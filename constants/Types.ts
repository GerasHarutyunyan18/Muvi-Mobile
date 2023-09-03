export type Actor = {
  actor: string;
  id: number;
};

export type Category = {
  name: string;
  id: number;
};

export type Country = {
  country: string;
  id: number;
};

export type Film = {
  id: number;
  image_url: string;
  createdAt: string;
  name: string;
  englishName: string;
  duration: string;
  category: Category[];
  description: string;
  countries: Country[];
  actors: Actor[];
  image: string | null;
  videoUrl: string;
  director: null | number;
  director_name: null | string;
  createdDate: number;
  created_date_string: string | null;
};
