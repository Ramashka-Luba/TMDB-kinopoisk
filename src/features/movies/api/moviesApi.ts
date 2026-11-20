import {baseApi} from "@/app/baseApi";
import type {CardResponse, GetMoviesArgs, MovieDetails, MovieResponse} from "@/features/movies/api/moviesApi.type";

export const moviesApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getMoviesByCategory: build.query<MovieResponse, {category: string, params: GetMoviesArgs}>({
            query: ({ category, params: { page }}) => ({
                url: `movie/${category}`,
                params: { page }
            }),
            providesTags: ['Movies']
        }),

        searchMovies: build.query<MovieResponse, GetMoviesArgs>({
            query: (params) => ({
                url: `search/movie`,
                params
            }),
            providesTags: ['Movies']
        }),

        getMovieById: build.query<MovieDetails, number>({
            query: (movieId) => ({
                url: `movie/${movieId}`,
            }),
            providesTags: ['Movies']
        }),

        getMovieCreditsById: build.query<CardResponse, number>({
            query: (movieId) => ({
                url: `movie/${movieId}/credits`,
            }),
            providesTags: ['Movies']
        }),

        getSimilarMovie: build.query<MovieResponse, number>({
            query: (movieId) => ({
                url: `movie/${movieId}/similar`,
            }),
            providesTags: ['Movies']
        }),
    })
})

export const {
    useGetMoviesByCategoryQuery,
    useSearchMoviesQuery,
    useGetMovieByIdQuery,
    useGetMovieCreditsByIdQuery,
    useGetSimilarMovieQuery
} = moviesApi

