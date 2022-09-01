import { FormEvent, useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import type { NextPage } from "next";
import * as Styles from "styles/styles";
import { Item } from "types/list";

import Button from "components/button";
import Input from "components/input";
import List from "components/list";
import Table from "components/table";
import Modal from "components/modal";

import {
  addGlucose,
  glucoseLastThreeDays,
  getAllGlucose,
  deleteGlucose,
  updateGLucose,
} from "lib/service/glucose";

import { FaEye } from "react-icons/fa";
import DropdownMenu from "components/dropdown";
import Alert from "components/alert";
import { AlertState } from "types/alert";

const Home: NextPage = () => {
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
  const [showModal, setShowModal] = useState<boolean>(false);
  const [documentId, setDocumentId] = useState<string | null>(null);
  const [newId, setNewId] = useState("");

  const [statusAlert, setStatusAlert] = useState<AlertState>({
    msg: "",
    hidden: false,
    type: "warn",
  });

  const getAllList = useCallback(
    async () => setListItem(await getAllGlucose()),
    []
  );
  useEffect(() => {
    getAllList();
  }, [getAllList]);

  const filterGlucose = async () => {
    const result = await glucoseLastThreeDays();
    setListItem(result);
  };

  const clearAllFields = () => {
    setDate("");
    setTime("");
    setGlucose("");
    setCorrection("");
    setPressure("");
    setDocumentId(null);
    setTimeout(() => setNewId(""), 600);
  };

  const canAddField = () => {
    const isFill = !date || !time || !glucose;
    const monthCurrent = new Date().getMonth() + 1;
    const monthForm = Number(date?.split("-")[1]);
    // const yearForm = new Date(date as string).getFullYear();
    // const currentYear = new Date().getFullYear();

    if (isFill) {
      setStatusAlert({
        msg: "Os campo date, hora ou glicemia devem ser preenchidos!",
        hidden: true,
        type: "warn",
      });
      return false;
    }

    if (monthForm > monthCurrent) {
      setStatusAlert({
        msg: "Não é possivel lançar datas futuras",
        hidden: true,
        type: "warn",
      });
      return false;
    }

    return true;
  };

  const _handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!canAddField()) return;
    const msg = documentId
      ? "Atualizado com sucesso!"
      : "Adicionado com sucesso!";
    const newItem: Item = {
      id: uuidv4(),
      date,
      time,
      glucose,
      correction,
      pressure,
    };

    setNewId(newItem.id as string);

    documentId ? updateGLucose(documentId, newItem) : addGlucose(newItem);

    setStatusAlert({
      msg,
      hidden: true,
      type: "sucess",
    });
    getAllList();
    clearAllFields();
  };

  const handleFilter = (value: string) => {
    if (value === "all") return getAllList();

    if (value === "last-3-days") return filterGlucose();
  };

  const _handleDeletedItem = (documentId: string) => {
    deleteGlucose(documentId);
    getAllList();

    setStatusAlert({
      msg: "Deletado com sucesso!",
      hidden: true,
      type: "sucess",
    });
  };

  const _handleEditItem = (item: Item) => {
    const { correction, date, documentId, glucose, pressure, time } = item;

    setDate(date);
    setTime(time as string);
    setGlucose(glucose as string);
    setCorrection(correction);
    setPressure(pressure as string);
    setDocumentId(documentId as string);
  };

  return (
    <Styles.Container>
      <Styles.WrapperButtons>
        <DropdownMenu optionSelected={handleFilter} className="dropdown" />
        <Button
          type="button"
          width="170px"
          height="auto"
          onClick={() => setShowModal(!showModal)}
          text="Consultar Tabela de Glicose"
          icon={<FaEye width="50px" height="100px" />}
        />
      </Styles.WrapperButtons>

      <Styles.Form action="/" onSubmit={_handleOnSubmit}>
        <Input
          type="date"
          name="date"
          placeholder="Data"
          value={date || ""}
          onChange={({ target }) => setDate(target?.value)}
        />
        <Input
          type="time"
          name="time"
          placeholder="Hora"
          value={time || ""}
          onChange={({ target }) => setTime(target?.value)}
        />
        <Input
          type="text"
          name="glucose"
          placeholder="Glicemia"
          value={glucose || ""}
          onChange={({ target }) => setGlucose(target?.value.replace(/\D/, ""))}
        />
        <Input
          type="text"
          name="correction"
          placeholder="correção"
          value={correction || ""}
          onChange={({ target }) => setCorrection(target?.value)}
        />
        <Input
          type="text"
          name="pressure"
          placeholder="Pressão"
          value={pressure || ""}
          onChange={({ target }) =>
            setPressure(target?.value.replace(/[A-Z]/gi, ""))
          }
        />
        <Styles.WrapperButtons content="flex-end">
          <Button
            type="submit"
            width="170px"
            text={documentId ? "Atualizar" : "Salvar"}
          />
          <Button
            type="button"
            width="170px"
            text="limpar"
            onClick={clearAllFields}
          />
        </Styles.WrapperButtons>
      </Styles.Form>
      <Table>
        <List
          list={listItem}
          newItem={newId}
          onDeleteItem={_handleDeletedItem}
          onEditItem={_handleEditItem}
        />
      </Table>
      <Modal
        statusModal={showModal}
        onCloseModal={(status) => setShowModal(status)}
      />

      <Alert
        delay={2000}
        hiddenAlert={(status) =>
          setStatusAlert({ msg: "", hidden: !status, type: "warn" })
        }
        msg={statusAlert.msg}
        hidden={statusAlert.hidden}
        type={statusAlert.type}
      />
    </Styles.Container>
  );
};

export default Home;
