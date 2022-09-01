import React from "react";
import * as Style from "./styles";
import { ListItem } from "types/list";
import { formatDateTo } from "utils/formartDate";
import { FaTrash, FaEdit } from "react-icons/fa";

const List: React.FC<ListItem> = ({ list, onDeleteItem, onEditItem, newItem= false }) => {
  return (
    <Style.Ul>
      {list?.length > 0 &&
        list
          .filter((item) => item?.id)
          .map((item) => (
            <Style.Li key={item?.id} newItem={newItem === item.id}>
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
                <FaTrash
                  onClick={() =>
                    item.documentId && onDeleteItem(item.documentId)
                  }
                />
                <FaEdit onClick={() => onEditItem(item)} />
              </Style.GroupActions>
            </Style.Li>
          ))}
    </Style.Ul>
  );
};

export default React.memo(List);
