import moment from "moment";
import "moment/locale/id";

export function formatDate(dateString: string) {
  const date = moment(dateString);
  return date.format("dddd, DD MMMM YYYY");
}
