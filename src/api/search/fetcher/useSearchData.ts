import { useQuery } from "react-query"

import { MovieTotalData } from "@api/movie/interface/interface"
import { TvTotalData } from "@api/tv/interface/interface"

import { SEARCH_CATEGORY, SEARCH_CATEGORY_QUERY } from "../queryKey/searchKey"
import { fetchSearchData } from "./fetchSerachData"

function useMovieSearchData(query: string, enabled: boolean) {
    return useQuery<MovieTotalData>(
        [SEARCH_CATEGORY, SEARCH_CATEGORY_QUERY.MOVIE, query],
        () => fetchSearchData("movie", query),
        { enabled }
    )
}

function useTvSearchData(query: string, enabled: boolean) {
    return useQuery<TvTotalData>(
        [SEARCH_CATEGORY, SEARCH_CATEGORY_QUERY.TV, query],
        () => fetchSearchData("tv", query),
        {
            //* 시작하자마자 api 요청을 할 지 말 지를 결정
            enabled,
        }
    )
}

export { useMovieSearchData, useTvSearchData }
