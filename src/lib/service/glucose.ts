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
type TypeSnapshot = QueryDocumentSnapshot<DocumentData>[];
export const getAllGlucose = async () => {
  const glucoseQuery = query(todosCollection);
  const querySnapshot = await getDocs(glucoseQuery);
  const results: TypeSnapshot = [];

  querySnapshot.forEach((snapshot) => results.push(snapshot));
  const allGlucose = results.map((data) => ({
    ...data.data(),
    documentId: data.id,
  })) as Item[];

  return allGlucose.sort(
    (a, b) =>
      Number(new Date(b.date as string)) - Number(new Date(a.date as string))
  );
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

  const filter = allGlucose.filter(
    (item) => getDateFor(item.date as string) <= 3
  );

  return filter;
};

function getDateFor(date: string): number {
  const now = new Date();
  const ms = 1000;
  const seconds = 60;
  const minutes = 60;
  const day = 24;

  const timeOfOneDay = ms * minutes * seconds * day;
  const pastDate = new Date(date);
  const diff = Math.abs(now.getTime() - pastDate.getTime());
  const days = Math.ceil(diff / timeOfOneDay);
  return days;
}
