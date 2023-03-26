import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieCoreApi = createApi({
  reducerPath: "movieCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "-----",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "------"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopMovies: builder.query({
      query: () => "get-most-popular-movies",
    }),
    getTopSeries: builder.query({
      query: () => "get-top-rated-tv-shows",
    }),
    getTopMoviesByGenre: builder.query({
      query: ({ genre }) =>
        `get-popular-movies-by-genre?genre=${genre}&limit=10`, 
    }),
    getMovieDetails: builder.query({
      query: ({ movieId }) =>
        `/get-overview-details?tconst=tt${movieId}`,
    }),
    getMovieImg: builder.query({
      query: ({ movieId }) =>
        `/get-images?tconst=tt${movieId}&limit=2`,
    }),
    getMovieCast: builder.query({
      query: ({ movieId }) =>
        `/get-full-credits?tconst=${movieId}`,
    }),
 
    getMovieLikeThis: builder.query({
      query: ({ movieId }) =>
        `get-more-like-this?tconst=${movieId}&currentCountry=US&purchaseCountry=US`,
    }),
    getMovieComingSoon: builder.query({
      query: () =>
        `get-coming-soon-movies?currentCountry=US&purchaseCountry=US&homeCountry=US`,
    }),
    getFindMovie: builder.query({
      query: ({search}) =>
        `find?q=${search}`,
    }),
  }),
});

export const {useGetFindMovieQuery,useGetMovieCastQuery,useGetMovieComingSoonQuery,useGetMovieLikeThisQuery, useGetMovieImgQuery,useGetTopMoviesQuery, useGetMovieDetailsQuery,useGetTopMoviesByGenreQuery,useGetTopSeriesQuery } = movieCoreApi;
