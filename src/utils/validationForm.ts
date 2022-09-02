import { Item } from "types/list";

export const validationForm = ({
  date,
  time,
  glucose,
}: Pick<Item, "glucose" | "time" | "date">): { msg: string; send: boolean } => {
  const isFill = !date || !time || !glucose;
  const monthCurrent = new Date().getMonth() + 1;
  const monthForm = Number(date?.split("-")[1]);

  if (isFill) {
    return {
      msg: "Os campo data, hora ou glicemia devem ser preenchidos!",
      send: false,
    };
  }

  if (monthForm > monthCurrent) {
    return {
      msg: "Não é possivel lançar datas futuras",
      send: false,
    };
  }

  return {
    msg: "",
    send: true,
  };
};
