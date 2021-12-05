import React, { useEffect, useState } from "react"
import styled from "styled-components/native"
import { getMovieList } from "./utils/getMovieData"

import Loader from "@/components/atoms/Loader/Loader"
import MovieSlider from "./MovieSlider/MovieSlider"
import { MovieData } from "./utils/interface"
import { MovieScreenContainer } from "./MovieScreen.style"

function MovieScreen() {
    const [loading, setLoading] = useState(true)
    const [movieList, setMovieList] = useState<MovieData[]>([])
    const [upcomingMovieList, setUpcomingMovieList] = useState<any[]>([])

    const getData = () => {
        Promise.resolve(getMovieList("now_playing")).then((data: MovieData[]) =>
            setMovieList(data)
        )
        Promise.resolve(getMovieList("upcoming")).then((data: MovieData[]) =>
            setUpcomingMovieList(data)
        )
    }

    useEffect(() => {
        getData()
        setLoading(false)
    }, [])

    if (loading) return <Loader />

    return (
        <MovieScreenContainer>
            <MovieSlider movieList={movieList} />
        </MovieScreenContainer>
    )
}

export default MovieScreen
