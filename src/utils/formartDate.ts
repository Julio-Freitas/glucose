type paramsFormatDate = {
  lang: string;
  dateString: string;
};
export const formatDateTo = ({ lang, dateString }: paramsFormatDate) => {
  const dateParse = Date.parse(`${dateString}T00:00`);
  const date = new Date(dateParse);
  if (isNaN(Number(date))) return "Data não valida";
  return date.toLocaleDateString(lang, {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  });
};
