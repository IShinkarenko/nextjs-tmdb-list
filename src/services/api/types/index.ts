export interface PopularMovie {
  backdrop_path: string;
  first_air_date: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  title: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface PopularMoviesList {
  page: number;
  results: PopularMovie[];
  total_pages: number;
  total_results: number;
}