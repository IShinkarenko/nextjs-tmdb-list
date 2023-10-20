import SortBy from '@/src/components/SortBy';
import Spotlight from '@/src/components/SpotLight';
import { Box, Card, CardContent, CardMedia, Rating, SelectChangeEvent, Stack, Typography } from '@mui/material';
import Image from 'next/image';

import React, { useCallback, useState } from 'react';
import { FavoriteToggle, MovieCard, MovieImage, MoviesListContainer } from './styled';
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
          {Array.from(new Array(10)).map((_, index) => (
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
                <Stack direction='row' alignItems='center' justifyContent='space-between' gap={3} mb={1}>
                  <Typography variant='h5' component='div'>
                    Lizard
                  </Typography>

                  <FavoriteToggle
                    max={1}
                    name='favorite'
                    highlightSelectedOnly
                    onChange={() => handleSaveToFavorite('1212')}
                  />
                </Stack>

                <Stack direction='row' alignItems='center' gap={2}>
                  <Typography variant='body2' color='#8ACDA3'>
                    98% Match
                  </Typography>

                  <Typography variant='body2'>2023</Typography>
                </Stack>
              </CardContent>
            </MovieCard>
          ))}
        </MoviesListContainer>
      </Box>
    </>
  );
};

export default TopList;
