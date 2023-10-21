import React, { FC, memo } from 'react';
import { FavoriteToggle, MovieCard, MovieImage } from './styled';
import Image from 'next/image';
import { CardContent, Stack, Typography } from '@mui/material';
import { MovieCardProps } from './types';

const MovieItem: FC<MovieCardProps> = ({ id, image, title, year, rating, handleToggleFavorite }) => {
  const handleChange = (event: React.SyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();

    handleToggleFavorite(id);
  };

  const handleOpenMovie = (event: React.SyntheticEvent) => {
    window.open(`https://www.themoviedb.org/movie/${id}`, '_blank');
  };

  return (
    <MovieCard onClick={handleOpenMovie}>
      <MovieImage>
        <Image
          alt='movie-1'
          src={image}
          blurDataURL={image}
          fill
          placeholder='blur'
          style={{
            objectFit: 'contain',
          }}
        />
      </MovieImage>

      <CardContent>
        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={3} mb={1} position='relative'>
          <Typography variant='h5' component='div'>
            {title}
          </Typography>

          <FavoriteToggle max={1} name='favorite' highlightSelectedOnly onChange={handleChange} />
        </Stack>

        <Stack direction='row' alignItems='center' gap={2}>
          <Typography variant='body2' color='#8ACDA3'>
            {rating}% Match
          </Typography>

          <Typography variant='body2'>{year}</Typography>
        </Stack>
      </CardContent>
    </MovieCard>
  );
};

export default memo(MovieItem);
