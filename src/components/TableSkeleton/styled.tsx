import {Box, Skeleton, styled} from "@mui/material";

export const StyledSkeletonContainer = styled(Box)`
  transition: transform 0.2s ease-in-out;
  will-change: transform;

  &:hover {
    transform: scale(1.02);
  }
`;

export const StyledSkeleton = styled(Skeleton)`
  background-color: ${({ theme }) => theme.palette.grey[700]};
`;