import { SelectChangeEvent } from '@mui/material';

export type SortByProps = {
  value: string;
  isSortingDisabled: boolean;
  handleChange: (event: SelectChangeEvent) => void;
};