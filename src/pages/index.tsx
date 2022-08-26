import { FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Button from "components/button";
import Input from "components/input";
import List from "components/list";
import Table from "components/table";
import type { NextPage } from "next";
import * as Styles from "./styles";

import { Item } from "types/list";
import Modal from "components/modal";

import {
  addGlucose,
  glucoseLastThreeDays,
  getAllGlucose,
} from "lib/service/glucose";

import { FaEye } from "react-icons/fa";
import DropdownMenu from "components/dropdown";
import { formatDateTo } from "utils/formartDate";
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

  useEffect(() => {
    getAllGlucose().then((results) => setListItem(results as Item[]));
  }, []);

  const filterGlucose = async () => {
    const result = await glucoseLastThreeDays();
    setListItem(result as Item[]);
  };

  const clearAllFields = () => {
    setDate("");
    setTime("");
    setGlucose("");
    setCorrection("");
  };

  const canAddField = () => {
    const isFill = !date || !time || !glucose;
    const monthCurrent = new Date().getMonth() + 1;
    const dayCurrent = new Date().getDate();
    const monthForm = Number(date?.split("-")[1]);
    const dayForm = Number(date?.split("-")[2]);

    if (isFill) {
      alert("Os campo date, hora ou glicemia devem ser preenchidos!");
      return false;
    }

    if (monthForm > monthCurrent || dayForm > dayCurrent) {
      alert("Não pode inserir Datas futuras!");
      return false;
    }

    return true;
  };

  const _handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!canAddField()) return;
    const newItem: Item = {
      id: uuidv4(),
      date,
      time,
      glucose,
      correction,
      pressure,
    };
    setListItem([...listItem, { ...newItem }]);
    clearAllFields();
    addGlucose(newItem);
    getAllGlucose().then((results) => setListItem(results as Item[]));
  };

  const handleFilter = (value: string) => {
    if (value === "all") {
      getAllGlucose().then((results) => setListItem(results as Item[]));
      return;
    }

    if (value === "last-3-week") {
      filterGlucose();
      return;
    }
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
          onChange={({ target }) => setPressure(target?.value)}
        />
        <Button type="submit" text="Salvar" />
      </Styles.Form>
      <Table>
        <List
          list={listItem}
          onDeleteItem={(id: any) => console.log(id)}
          onEditItem={(id: any) => console.log(id)}
        />
      </Table>
      <Modal
        statusModal={showModal}
        onCloseModal={(status) => setShowModal(status)}
      />
    </Styles.Container>
  );
};

export default Home;
