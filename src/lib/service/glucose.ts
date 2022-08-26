import {
  collection,
  QueryDocumentSnapshot,
  DocumentData,
  query,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
} from "@firebase/firestore";
import { firestore } from "lib/firebase/initFirebase";
import { Item } from "types/list";

const todosCollection = collection(firestore, "glucose");

export const getAllGlucose = async () => {
  const glucoseQuery = query(todosCollection);
  const querySnapshot = await getDocs(glucoseQuery);
  const results: QueryDocumentSnapshot<DocumentData>[] = [];
  querySnapshot.forEach((snapshot) => results.push(snapshot));
  const allGlucose = results.map((data) => ({
    ...data.data(),
    documentId: data.id,
  }));
  return allGlucose;
};

export const updateGLucose = async (documentId: string, glucoseData: any) => {
  const _glucose = doc(firestore, `glucose/${documentId}`);
  await updateDoc(_glucose, { ...glucoseData });
};

export const deleteGlucose = async (documentId: string) => {
  const _glucose = doc(firestore, `glucose/${documentId}`);
  await deleteDoc(_glucose);
};

export const addGlucose = async (glucoseData: any) => {
  const timestamp: string = Date.now().toString();
  const _glucose = doc(firestore, `glucose/${timestamp}`);

  try {
    await setDoc(_glucose, glucoseData);
  } catch (error) {
    console.log("An error occurred while adding todo");
  }
};

export const glucoseLastThreeDays = async () => {
  const allGlucose = (await getAllGlucose()) as Item[];
  const now = new Date();
  const nowDay = now.getDate() - 3;
  const nowMonth = now.getMonth()
  const nowYear = now.getFullYear();
  const filter = allGlucose.filter((item) => {
    const itemDate = new Date(item.date as string);
    return (
      itemDate.getDate() >= nowDay && nowYear === itemDate.getFullYear() && nowMonth === itemDate.getMonth()
    );
  });
  return filter;
};
