export type Columns = {
  id: string;
  name: string;
  format?: <T>(value: T) => string;
};
