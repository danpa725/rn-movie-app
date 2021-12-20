import { API_KEY } from "@constants/constant"
import axios from "axios"

type SearchInfoQuery = "movie" | "tv"

const getSearchURL = (searchInfoQuery: SearchInfoQuery, query: string) =>
    `https://api.themoviedb.org/3/search/${searchInfoQuery}?api_key=${API_KEY}&language=en-US&page=1&region=KR&page=1&query=${query}`

export const fetchSearchData = async (
    dataInfoQuery: SearchInfoQuery,
    query: string
): Promise<any> => {
    const { data } = await axios.get(getSearchURL(dataInfoQuery, query))
    return data
}
