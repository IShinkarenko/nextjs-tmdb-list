import SortBy from '@/src/components/SortBy';
import Spotlight from '@/src/components/SpotLight';
import { Box, Pagination, SelectChangeEvent, Stack } from '@mui/material';

import React, { useCallback, useState } from 'react';
import { MoviesListContainer, MoviesSection } from './styled';
import MovieItem from '@/src/components/MovieItem';
import { useQuery } from '@tanstack/react-query';
import api from '@/src/services/api';

const TopList = () => {
  const [order, setOrder] = useState('ASC');
  const [page, setPage] = React.useState(1);

  // const { isLoading, isError, data, isFetching } = useQuery({
  //   queryKey: ['movies'],
  //   queryFn: () => api.movies.getMovies(`here will be query params - page/order`),
  // });

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleChangeOrder = useCallback((event: SelectChangeEvent) => {
    setOrder(event.target.value as string);
  }, []);

  const handleSaveToFavorite = useCallback((movieId: string) => {
    console.log(movieId);
  }, []);

  return (
    <>
      <Spotlight
        title='Enjoy big movies, hit series and more'
        subtitle='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'
        poster='/spotlight.jpg'
      />

      <MoviesSection>
        <SortBy value={order} handleChange={handleChangeOrder} />

        <MoviesListContainer>
          {Array.from(new Array(10)).map((_, index) => (
            <MovieItem
              key={index}
              id={index.toString()}
              image={'/movie-1.jpg'}
              title='Lizard'
              year='2023'
              rating={98}
              handleToggleFavorite={handleSaveToFavorite}
            />
          ))}
        </MoviesListContainer>

        <Stack direction='row' mt={7} justifyContent='center'>
          <Pagination count={10} page={page} onChange={handleChange} />
        </Stack>
      </MoviesSection>
    </>
  );
};

export default TopList;
