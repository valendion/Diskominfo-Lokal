export type NewsModal = {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  image: string;
};

export type LoaderData = {
  news: NewsModal[];
  bps: any;
  bpsPage: number;
};

export type MediaData = {
  [key: number]: string;
};
