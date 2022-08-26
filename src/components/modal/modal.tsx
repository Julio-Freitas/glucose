import React, { useState, memo, useEffect, useRef } from "react";
import * as Style from "./styles";

type propsModal = {
  statusModal?: boolean;
  onCloseModal?: (status: boolean) => void;
};

const Modal: React.FC<propsModal> = ({ statusModal = false, onCloseModal }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [currrentStatus, setCurrentStatus] = useState<boolean>(statusModal);

  useEffect(() => {
    const handleClickOuside = (event: MouseEvent) => {
      const closeModal =
        onCloseModal &&
        currrentStatus &&
        modalRef?.current &&
        !modalRef.current?.contains(event?.target as HTMLElement);

      if (closeModal) {
        setCurrentStatus(false);
        onCloseModal && onCloseModal(false);
        return;
      }
    };

    document.addEventListener("click", handleClickOuside);

    return () => {
      document.removeEventListener("click", handleClickOuside);
    };
  }, [currrentStatus]);

  useEffect(() => {
    setCurrentStatus(statusModal);
  }, [statusModal]);

  return (
    <Style.Modal statusModal={currrentStatus} ref={modalRef}>
      <Style.CloseButton
        onClick={() => {
          onCloseModal && onCloseModal(false);
          setCurrentStatus(false);
        }}
      >
        X
      </Style.CloseButton>
      <Style.Table>
        <Style.Caption>Doses a serem aplicadas por MG/DL</Style.Caption>
        <Style.TableHeader>
          <tr>
            <th scope="col">Até 200 </th>
            <th scope="col">De 200 até 250</th>
            <th scope="col">De 251 até 300</th>
            <th scope="col">De 301 até 350</th>
            <th scope="col"> menor que 80 e acima de 351</th>
          </tr>
        </Style.TableHeader>
        <Style.TableBody>
          <tr>
            <td scope="row">2 UI</td>
            <td>4 UI</td>
            <td>6 UI</td>
            <td>8 UI</td>
            <td>Acionar Plantonista</td>
          </tr>
        </Style.TableBody>
      </Style.Table>
    </Style.Modal>
  );
};

export default memo(Modal);
