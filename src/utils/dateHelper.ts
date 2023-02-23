export function toMySqlDate(date: Date) {
  return date.toISOString().slice(0, 19).replace("T", " ");
}

export function getNextMonthDate(date: Date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, date.getDate());
}
