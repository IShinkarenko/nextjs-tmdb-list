import { Alert, Pagination, SelectChangeEvent, Stack } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';

import MovieItem from '@/src/components/MovieItem';
import SortBy from '@/src/components/SortBy';
import Spotlight from '@/src/components/SpotLight';
import TableSkeleton from '@/src/components/TableSkeleton/TableSkeleton';
import { DESC_ORDER, FAVORITE_MOVIES_LOCAL_STORAGE_KEY } from '@/src/constant/common-constants';
import api from '@/src/services/api';
import { getYear } from '@/src/utils/utils';

import { MoviesListContainer, MoviesSection } from './styled';

const TopList: FC = () => {
  const [order, setOrder] = useState<string>(DESC_ORDER);
  const [page, setPage] = useState<number>(1);
  const [favoritesList, setFavoritesList] = useState<number[]>([]);
  const ref = useRef(null);
  const ITEMS_PER_PAGE = 20;
  const TOTAL_ITEMS_TO_SHOW = 500;

  useEffect(() => {
    setFavoritesList(JSON.parse(localStorage.getItem(FAVORITE_MOVIES_LOCAL_STORAGE_KEY) || '[]'));
  }, []);

  const {
    isLoading,
    isError,
    data: popularMovies,
    isFetching,
  } = useQuery({
    queryKey: ['movies', page, order],
    queryFn: () =>
      api.movies.getPopularMovies({
        page,
        sortOrder: order,
      }),
  });

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);

    if (ref && ref.current) {
      (ref.current as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleChangeOrder = useCallback((event: SelectChangeEvent) => {
    setOrder(event.target.value as string);
  }, []);

  const handleSaveToFavorite = (movieId: number) => {
    let localStorageFavoriteMoviesList = favoritesList.slice();

    if (favoritesList.includes(movieId)) {
      localStorageFavoriteMoviesList = localStorageFavoriteMoviesList.filter((item: number) => item !== movieId);
    } else {
      localStorageFavoriteMoviesList.push(movieId);
    }

    setFavoritesList(localStorageFavoriteMoviesList);
    localStorage.setItem(FAVORITE_MOVIES_LOCAL_STORAGE_KEY, JSON.stringify(localStorageFavoriteMoviesList));
  };

  if (isError) {
    return <Alert severity='error'>Error while fetching movies list</Alert>;
  }

  return (
    <>
      <Spotlight
        title='Enjoy big movies, hit series and more'
        subtitle='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'
        poster='/spotlight.jpg'
      />

      <MoviesSection ref={ref}>
        <SortBy value={order} isSortingDisabled={isFetching || isError} handleChange={handleChangeOrder} />

        <MoviesListContainer>
          <TableSkeleton isLoading={isFetching || isLoading}>
            {popularMovies?.results.map(({ id, backdrop_path, title, original_title, release_date, vote_average }) => (
              <MovieItem
                key={id}
                id={id}
                image={backdrop_path}
                title={title || original_title}
                year={getYear(release_date)}
                rating={vote_average}
                isAddedToFavorites={favoritesList.includes(id)}
                handleToggleFavorite={handleSaveToFavorite}
              />
            ))}
          </TableSkeleton>
        </MoviesListContainer>

        <Stack direction='row' mt={7} justifyContent='center'>
          <Pagination
            count={Math.ceil(TOTAL_ITEMS_TO_SHOW / ITEMS_PER_PAGE)}
            page={page}
            onChange={handleChange}
            size='small'
          />
        </Stack>
      </MoviesSection>
    </>
  );
};

export default TopList;
