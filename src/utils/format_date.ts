export function transformDateToCalendarIdSuffix(dateString: string): string {
  const [dayStr, monthStr, yearStr] = dateString.split("/");
  const day = Number(dayStr);
  const month = Number(monthStr);
  const year = Number(yearStr);
  const monthIndex = month - 1;
  return `${year}${monthIndex}${day}`;
}

export function getDiffMonths(outboundDate: string): number {
  const today = new Date();
  const [day, month, year] = outboundDate.split("/").map(Number);
  const targetDate = new Date(year, month - 1, day);
  const diffMonths =
    (targetDate.getFullYear() - today.getFullYear()) * 12 +
    (targetDate.getMonth() - today.getMonth());
  return diffMonths;
}
