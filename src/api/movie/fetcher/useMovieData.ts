import { useQuery } from "react-query"

import { fetchMovieData } from "./fetchMovieData"
import {
    MOVIE_NOW_PLAYING,
    MOVIE_TRENDING,
    MOVIE_UPCOMING,
} from "@api/movie/queryKey/movieKey"
import { MovieTotalData, TrendingMovieTotalData } from "../interface/interface"

function useMovieNowPlaying() {
    return useQuery<MovieTotalData>(MOVIE_NOW_PLAYING, () =>
        fetchMovieData("now_playing")
    )
}

function useMovieUpcoming() {
    return useQuery<MovieTotalData>(MOVIE_UPCOMING, () =>
        fetchMovieData("upcoming")
    )
}

function useMovieTrending() {
    return useQuery<TrendingMovieTotalData>(MOVIE_TRENDING, () =>
        fetchMovieData("trending")
    )
}

export { useMovieNowPlaying, useMovieTrending, useMovieUpcoming }
