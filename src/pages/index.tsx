import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import type { NextPage } from "next";
import * as Styles from "styles/styles";
import { Item } from "types/list";

import Button from "components/button";
import Input from "components/input";
import List from "components/list";
import Table from "components/table";
import Modal from "components/modal";

import { glucoseLastThreeDays } from "lib/service/glucose";

import { FaEye } from "react-icons/fa";
import DropdownMenu from "components/dropdown";
import Alert from "components/alert";
import { UseListGlucoseContext } from "context/list/contextList";
import { validationForm } from "utils/validationForm";
import {  UseAlertContext } from "context/alert/context";

const Home: NextPage = () => {
  const {
    addItemGlucose,
    date,
    time,
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
    setNewId,
    updateItemGLucose,
    clearAllFields,
    setListItem,
    getAllList,
  } = UseListGlucoseContext();

  const [showModal, setShowModal] = useState<boolean>(false);
  const { onSetStatusAlert } = UseAlertContext();

  const filterGlucose = async () => {
    const result = await glucoseLastThreeDays();
    setListItem(result);
  };

  const _handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { send, msg } = validationForm({ date, glucose, time });

    if (!send)
      return onSetStatusAlert({
        msg,
        hidden: true,
        type: "warn",
      });

    const newItem: Item = {
      id: uuidv4(),
      date,
      time,
      glucose,
      correction,
      pressure,
    };

    setNewId(newItem.id as string);

    documentId
      ? updateItemGLucose(documentId, newItem)
      : addItemGlucose(newItem);

    onSetStatusAlert({
      msg: documentId ? "Atualizado com sucesso!" : "Adicionado com sucesso!",
      hidden: true,
      type: "sucess",
    });
    clearAllFields();
  };

  const handleFilter = (value: string) => {
    if (value === "all") return getAllList();
    if (value === "last-3-days") return filterGlucose();
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
        <List newItem={newId || ""} />
      </Table>

      <Modal
        statusModal={showModal}
        onCloseModal={(status) => setShowModal(status)}
      />
      <Alert delay={2000} />
    </Styles.Container>
  );
};

export default Home;
