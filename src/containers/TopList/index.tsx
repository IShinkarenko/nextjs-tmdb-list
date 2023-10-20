import SortBy from '@/src/components/SortBy';
import Spotlight from '@/src/components/SpotLight';
import { Box, Card, CardContent, CardMedia, Rating, SelectChangeEvent, Typography } from '@mui/material';
import Image from 'next/image';

import React, { useCallback, useState } from 'react';
import { MovieCard, MovieImage, MoviesListContainer } from './styled';
import { ImageWrapper } from '@/src/components/SpotLight/styled';

const TopList = () => {
  const [order, setOrder] = useState('ASC');

  const handleChangeOrder = useCallback((event: SelectChangeEvent) => {
    setOrder(event.target.value as string);
  }, []);

  const handleSaveToFavorite = useCallback((movieId: string) => {
    //save to local storage
    console.log(movieId);
  }, []);

  return (
    <>
      <Spotlight />

      <Box mt={10} p='0 58px'>
        <SortBy value={order} handleChange={handleChangeOrder} />

        <MoviesListContainer>
          <MovieCard>
            <MovieImage>
              <Image
                alt='movie-1'
                src={'/movie-1.jpg'}
                blurDataURL={'/spotlight.jpg'}
                layout='fill'
                objectFit='cover'
                placeholder='blur'
              />
            </MovieImage>

            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Lizard
              </Typography>

              <Typography variant='body2'>2023</Typography>

              <Rating max={1} name='favorite' highlightSelectedOnly onChange={() => handleSaveToFavorite('1212')} />
            </CardContent>
          </MovieCard>

          <Box>dwwdwed</Box>
          <Box>dwwdwed</Box>
          <Box>dwwdwed</Box>
          <Box>dwwdwed</Box>
        </MoviesListContainer>
      </Box>
    </>
  );
};

export default TopList;
