import {baseApi} from "@/app/baseApi";
import type {GetMoviesArgs, MovieResponse} from "@/features/movies/api/moviesApi.type";

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
    })
})

export const {
    useGetMoviesByCategoryQuery,
    useSearchMoviesQuery
} = moviesApi

