import * as Style from "./styles";
type TableProps = {
  children: React.ReactNode;
};
const Table: React.FC<TableProps> = ({ children }) => {
  return (
    <Style.Table>
      <Style.TableHeader>
        <Style.TitleTable>Data</Style.TitleTable>
        <Style.TitleTable>Hora</Style.TitleTable>
        <Style.TitleTable>Glicemia</Style.TitleTable>
        <Style.TitleTable>Correção</Style.TitleTable>
        <Style.TitleTable>Pressão</Style.TitleTable>
        <Style.TitleTable>Ações</Style.TitleTable>
      </Style.TableHeader>
      {children}
    </Style.Table>
  );
};

export default Table;
