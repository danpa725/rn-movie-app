import { useQuery, useQueryClient } from "react-query"

import { fetchMovieData } from "./fetchMovieData"
import { MOVIE_CATEGORY, MOVIE_QUERY } from "@api/movie/queryKey/movieKey"

import { MovieTotalData, TrendingMovieTotalData } from "../interface/interface"

function useMovieNowPlaying() {
    return useQuery<MovieTotalData>(
        [MOVIE_CATEGORY, { type: MOVIE_QUERY.NOW_PLAYING }],
        () => fetchMovieData("now_playing")
    )
}

function useMovieUpcoming() {
    return useQuery<MovieTotalData>(
        [MOVIE_CATEGORY, { type: MOVIE_QUERY.UPCOMING }],
        () => fetchMovieData("upcoming")
    )
}

function useMovieTrending() {
    return useQuery<TrendingMovieTotalData>(
        [MOVIE_CATEGORY, { type: MOVIE_QUERY.TRENDING }],
        () => fetchMovieData("trending")
    )
}

function useRefetchingMovieData() {
    return useQueryClient().refetchQueries([MOVIE_CATEGORY])
}

export {
    useMovieNowPlaying,
    useMovieTrending,
    useMovieUpcoming,
    useRefetchingMovieData,
}
