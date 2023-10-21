export type MovieCardProps = {
  id: string;
  image: string;
  title: string;
  year: string;
  rating: number;
  handleToggleFavorite: (id: string) => void;
};
