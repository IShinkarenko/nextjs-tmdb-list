import {Box} from "@mui/material";
import React, {FC} from 'react';

import {StyledSkeleton, StyledSkeletonContainer} from "@/src/components/TableSkeleton/styled";

import { TableSkeletonProps } from './types';

const TableSkeleton: FC<TableSkeletonProps> = ({
  children = null,
  isLoading,
}) => {
  const dynamicRows = Array.from({ length: 20 }).map((_, index) => (
    <StyledSkeletonContainer key={index}>
      <StyledSkeleton variant="rectangular" width={'100%'} height={118} />

      <Box sx={{ pt: 0.5 }}>
        <StyledSkeleton />

        <StyledSkeleton width="60%" />
      </Box>
    </StyledSkeletonContainer>
  ));

  return isLoading ? (
    <>
      {dynamicRows}
    </>
  ) : children;
};

export default TableSkeleton;