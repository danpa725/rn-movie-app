import React, { useEffect, useState } from "react"
import styled from "styled-components/native"
import { getMovieList } from "./utils/getMovieData"

import Loader from "@/components/atoms/Loader/Loader"
import MovieSlider from "./MovieSlider/MovieSlider"
import { MovieData, TrendingMovieData } from "./utils/interface"
import { MovieScreenContainer } from "./MovieScreen.style"
import MovieTrendingList from "./MovieTrendingList/MovieTrendingList"

function MovieScreen() {
    const [loading, setLoading] = useState(true)
    const [movieList, setMovieList] = useState<MovieData[]>([])
    const [upcomingMovieList, setUpcomingMovieList] = useState<MovieData[]>([])
    const [trendingMovieList, setTrendingMovieList] = useState<
        TrendingMovieData[]
    >([])

    const fetchData = () => {
        Promise.resolve(getMovieList("now_playing")).then((data: MovieData[]) =>
            setMovieList(data)
        )
        Promise.resolve(getMovieList("upcoming")).then((data: MovieData[]) =>
            setUpcomingMovieList(data)
        )
        Promise.resolve(getMovieList("trending")).then(
            (data: TrendingMovieData[]) =>
                setTrendingMovieList(data.slice(0, 9))
        )
    }

    useEffect(() => {
        fetchData()
        setLoading(false)
    }, [])

    if (loading) return <Loader />

    return (
        <MovieScreenContainer>
            <MovieSlider movieList={movieList} />
            <MovieTrendingList trendingMovieList={trendingMovieList} />
        </MovieScreenContainer>
    )
}

export default MovieScreen
