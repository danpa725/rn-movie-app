import { useQuery, useQueryClient } from "react-query"
import { TvTotalData } from "../interface/interface"
import { TV_CATEGORY, TV_QUERY } from "../queryKey/tvKey"
import { fetchTvData } from "./fetchTvData"

function useTvTrending() {
    return useQuery<TvTotalData>(
        [TV_CATEGORY, { type: TV_QUERY.TRENDING }],
        () => fetchTvData("trending")
    )
}

function useTvAiringToday() {
    return useQuery<TvTotalData>(
        [TV_CATEGORY, { type: TV_QUERY.AIRING_TODAY }],
        () => fetchTvData("airing_today")
    )
}

function useTvTopRated() {
    return useQuery<TvTotalData>(
        [TV_CATEGORY, { type: TV_QUERY.TOP_RATED }],
        () => fetchTvData("top_rated")
    )
}

function useRefetchingMovieData() {
    return useQueryClient().refetchQueries([TV_CATEGORY])
}

export { useTvTrending, useTvAiringToday, useTvTopRated }
