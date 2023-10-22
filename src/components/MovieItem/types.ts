export type MovieCardProps = {
  id: number;
  image: string;
  title: string;
  year: string;
  rating: number;
  isAddedToFavorites: boolean;
  handleToggleFavorite: (id: number) => void;
};