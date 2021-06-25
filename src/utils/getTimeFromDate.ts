export const getTimeFromDate = (date: number) =>
  Intl.DateTimeFormat("en-GB", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(date)
