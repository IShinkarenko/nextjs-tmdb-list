import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React, { FC, memo } from 'react';

import { MOVIE_DB_IMAGE_URL, SINGLE_MOVIE_URL } from '@/src/constant/common-constants';

import { FavoriteToggle, MovieCard, MovieImage, MovieTitle, StyledCardContent } from './styled';
import { MovieCardProps } from './types';

const MovieItem: FC<MovieCardProps> = ({
  id,
  image,
  title,
  year,
  rating,
  isAddedToFavorites,
  handleToggleFavorite,
}) => {
  const imageURL = image ? MOVIE_DB_IMAGE_URL + image : '/image-placeholder.webp';

  const handleChange = () => {
    handleToggleFavorite(id);
  };

  const handleOpenMovie = () => {
    window.open(`${SINGLE_MOVIE_URL}${id}`, '_blank');
  };

  return (
    <MovieCard
      onClick={handleOpenMovie}
      sx={{
        border: isAddedToFavorites ? '1px solid #2FBAD1' : '1px solid transparent',
      }}
    >
      <MovieImage>
        <Image
          alt={title}
          src={imageURL}
          blurDataURL={imageURL}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          placeholder='blur'
          quality={75}
          priority
          style={{
            objectFit: 'contain',
          }}
        />
      </MovieImage>

      <StyledCardContent>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          gap={3}
          mb={1}
          position='relative'
          pr={3}
        >
          <MovieTitle variant='h5'>{title}</MovieTitle>

          <FavoriteToggle
            max={1}
            value={isAddedToFavorites ? 1 : 0}
            name='favorite'
            highlightSelectedOnly
            onChange={handleChange}
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        </Stack>

        <Stack direction='row' alignItems='center' gap={2}>
          <Typography variant='body2' color='#8ACDA3'>
            {rating ? `${Math.trunc(rating * 10)}% Match` : 'No rating'}
          </Typography>

          <Typography variant='body2'>{year}</Typography>
        </Stack>
      </StyledCardContent>
    </MovieCard>
  );
};

export default memo(MovieItem);
