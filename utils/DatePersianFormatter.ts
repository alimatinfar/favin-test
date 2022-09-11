import {DateObject} from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

type formatType = "dddd DD MMMM، YYYY" | "dddd DD MMMM" |"DD MMMM YYYY" |"YYYY/MM/DD" | "hh:mm"

type Props = {
  date: any
  format?: formatType
}

export const DatePersianFormatter = function (date: any) {
  const formattedDate = new DateObject(date).convert(
    persian,
    persian_fa
  );
  return formattedDate
}


/**
 * @explain this function will help you to convert date to persian formatted date
 * @example PersianDatewithNamedMonth({date:"2022-8-1",formate:"YYYY/MM/DD"}) => "1401/5/10"
 */
const PersianDatewithNamedMonth = function ({date, format = "dddd DD MMMM"}: Props) {
  const convertedDate = DatePersianFormatter(date)
  const formatedDate = convertedDate.format(format)

  return formatedDate
}


export default PersianDatewithNamedMonth
