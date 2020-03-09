import { format, parseISO } from 'date-fns';

function formatDate(date) {
  return format(parseISO(date), 'dd/MM/yyyy');
}

export default formatDate;
