export interface IEpisode {
  server_name: string;
  server_data: IServerData[];
}

export interface IServerData {
  name: string;
  slug: string;
  filename: string;
  link_embed: string;
  link_m3u8: string;
}

export interface IMovieDetail {
  _id: string;
  name: string;
  origin_name: string;
  content: string;
  type: string;
  status: string;
  thumb_url: string;
  poster_url: string;
  year: number;
  category: string[];
  country: string[];
  time: string;
  episode_total: string;
  quality: string;
  lang: string;
  slug: string;
  actors: string[];
  director: string[];
  trailer_url: string;
  created: {
    time: string;
  };
  modified: {
    time: string;
  };
  tmdb: {
    id: string;
    vote_average: number;
    poster_path: string;
    backdrop_path: string;
  };
  imdb: {
    id: string;
    vote_average: number;
    poster_path: string;
    backdrop_path: string;
  };
}

export interface IMovieDetailResponse {
  status: string;
  msg: string;
  movie: IMovieDetail;
  episodes: IEpisode[];
}
