import { API_KEY } from "@constants/constant"
import axios from "axios"

type DataInfoQuery = "now_playing" | "upcoming" | "trending"

const getMovieURL = (dataInfoQuery: DataInfoQuery) => {
    if (dataInfoQuery === "trending")
        return `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
    return `https://api.themoviedb.org/3/movie/${dataInfoQuery}?api_key=${API_KEY}&language=en-US&page=1&region=KR`
}

export const fetchMovieData = async (
    dataInfoQuery: DataInfoQuery
): Promise<any> => {
    const { data } = await axios.get(getMovieURL(dataInfoQuery))
    return data
}
