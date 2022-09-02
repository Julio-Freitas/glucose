import React from "react";
import * as Style from "./styles";
import { ListItem } from "types/list";
import { formatDateTo } from "utils/formartDate";
import { FaTrash, FaEdit } from "react-icons/fa";
import { UseListGlucoseContext } from "context/list/contextList";

const List: React.FC<ListItem> = ({ newItem = false }) => {
  const { listItem, removeItemGLucose, editiItemGLucose } =
    UseListGlucoseContext();

  return (
    <Style.Ul>
      {listItem?.length > 0 &&
        listItem
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
                  onClick={() => item.documentId && removeItemGLucose(item.documentId)}
                />
                <FaEdit onClick={() => editiItemGLucose(item)} />
              </Style.GroupActions>
            </Style.Li>
          ))}
    </Style.Ul>
  );
};

export default React.memo(List);
