export const getYear = (date: string): string => {
  return date ? new Date(date).getFullYear().toString() : '-';
};