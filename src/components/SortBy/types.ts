import { SelectChangeEvent } from '@mui/material';

export type SortByProps = {
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
};
