import { API_KEY } from "@constants/constant"
import axios from "axios"

type DataInfoQuery = "trending" | "airing_today" | "top_rated"

const getTvURL = (dataInfoQuery: DataInfoQuery) => {
    if (dataInfoQuery === "trending")
        return `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`
    return `https://api.themoviedb.org/3/tv/${dataInfoQuery}?api_key=${API_KEY}&language=en-US&page=1&region=KR`
}

export const fetchTvData = async (
    dataInfoQuery: DataInfoQuery
): Promise<any> => {
    const { data } = await axios.get(getTvURL(dataInfoQuery))
    return data
}
