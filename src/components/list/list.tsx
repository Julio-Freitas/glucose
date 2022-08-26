import React from "react";
import * as Style from "./styles";
import { ListItem } from "types/list";
import { formatDateTo } from "utils/formartDate";
import { FaTrash, FaEdit } from "react-icons/fa";


const List: React.FC<ListItem> = ({ list, onDeleteItem, onEditItem }) => {
  return (
    <Style.Ul>
      {list?.length > 0 &&
        list
          .filter((item) => item?.id)
          .map((item) => (
            <Style.Li key={item?.id}>
              <Style.TextSpan>
                {formatDateTo({
                  lang: "pt-br",
                  dateString: item.date || "",
                })}
              </Style.TextSpan>
              <Style.TextSpan>{item.time}</Style.TextSpan>
              <Style.TextSpan>{item.glucose}</Style.TextSpan>
              <Style.TextSpan>{item.correction}</Style.TextSpan>
              <Style.TextSpan>{item.pressure}</Style.TextSpan>
              <Style.GroupActions>
                <FaTrash onClick={() => item.id && onDeleteItem(item.id)} />
                <FaEdit onClick={() => item.id && onEditItem(item.id)}/>
              </Style.GroupActions>
            </Style.Li>
          ))}
    </Style.Ul>
  );
};

export default List;
