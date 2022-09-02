import {
  addGlucose,
  deleteGlucose,
  getAllGlucose,
  updateGLucose,
} from "lib/service/glucose";
import { useContext } from "react";
import { useCallback, useEffect } from "react";
import { createContext, useState } from "react";
import { Item } from "types/list";

type ContextList = {
  listItem: Item[];
  date: string | null;
  time: string | null;
  glucose: string | null;
  correction: string | null;
  pressure: string | null;
  documentId: string | null;
  newId: string | null;
  setListItem: React.Dispatch<React.SetStateAction<Item[]>>;
  setDate: React.Dispatch<React.SetStateAction<string | null>>;
  setTime: React.Dispatch<React.SetStateAction<string | null>>;
  setGlucose: React.Dispatch<React.SetStateAction<string | null>>;
  setCorrection: React.Dispatch<React.SetStateAction<string | null>>;
  setPressure: React.Dispatch<React.SetStateAction<string | null>>;
  setDocumentId: React.Dispatch<React.SetStateAction<string | null>>;
  setNewId: React.Dispatch<React.SetStateAction<string | null>>;
  getAllList: () => void;
};

export const ListContext = createContext<ContextList>({
  listItem: [],
  date: null,
  time: null,
  glucose: null,
  correction: null,
  pressure: null,
  documentId: null,
  newId: null,
  setListItem: () => {},
  setDate: () => {},
  setTime: () => {},
  setGlucose: () => {},
  setCorrection: () => {},
  setPressure: () => {},
  setDocumentId: () => {},
  setNewId: () => {},
  getAllList: () => {},
});

ListContext.displayName = "listGlucose";

type PropsList = {
  children: React.ReactNode;
};

export const ListProvider = ({ children }: PropsList) => {
  const [listItem, setListItem] = useState<Item[]>([
    {
      id: null,
      date: null,
      time: null,
      glucose: null,
      correction: null,
      documentId: null,
      pressure: null,
    },
  ]);
  const [date, setDate] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [glucose, setGlucose] = useState<string | null>(null);
  const [correction, setCorrection] = useState<string | null>(null);
  const [pressure, setPressure] = useState<string | null>(null);
  const [documentId, setDocumentId] = useState<string | null>(null);
  const [newId, setNewId] = useState<string | null>("");

  const getAllList = useCallback(async () => {
    setListItem(await getAllGlucose());
  }, []);

  useEffect(() => {
    getAllList();
  }, [getAllList]);

  return (
    <ListContext.Provider
      value={{
        listItem,
        setListItem,
        date,
        setDate,
        time,
        glucose,
        correction,
        pressure,
        documentId,
        newId,
        setTime,
        setGlucose,
        setCorrection,
        setPressure,
        setDocumentId,
        setNewId,
        getAllList,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export const UseListGlucoseContext = () => {
  const {
    listItem,
    setListItem,
    setDate,
    date,
    time,
    setTime,
    correction,
    setCorrection,
    documentId,
    setDocumentId,
    glucose,
    setGlucose,
    newId,
    setNewId,
    pressure,
    setPressure,
    getAllList,
  } = useContext(ListContext);

  const addItemGlucose = async (item: Item) => {
    await addGlucose(item);
    getAllList();
  };

  const updateItemGLucose = async (documentId: string, item: Item) => {
    await updateGLucose(documentId, item);
    getAllList();
  };

  const removeItemGLucose = async (documentId: string) => {
    setListItem(listItem.filter((item) => item.id !== documentId));
    await deleteGlucose(documentId);
    getAllList();
  };

  const editiItemGLucose = useCallback((newItem: Item) => {
    const { correction, date, documentId, glucose, pressure, time } = newItem;
    setDocumentId(newItem?.documentId || null);

    setDate(date);
    setTime(time as string);
    setGlucose(glucose as string);
    setCorrection(correction);
    setPressure(pressure as string);
    setDocumentId(documentId as string);
  }, []);

  const clearAllFields = () => {
    setDate("");
    setTime("");
    setGlucose("");
    setCorrection("");
    setPressure("");
    setDocumentId(null);
    setTimeout(() => setNewId(""), 600);
  };

  return {
    listItem,
    addItemGlucose,
    removeItemGLucose,
    editiItemGLucose,
    updateItemGLucose,
    time,
    date,
    glucose,
    correction,
    pressure,
    documentId,
    newId,
    setDate,
    setTime,
    setGlucose,
    setCorrection,
    setPressure,
    setDocumentId,
    setNewId,
    clearAllFields,
    setListItem,
    getAllList,
  };
};
