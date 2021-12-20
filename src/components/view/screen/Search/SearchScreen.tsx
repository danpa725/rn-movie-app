import React, { useMemo, useState } from "react"

import {
    useMovieSearchData,
    useTvSearchData,
} from "@api/search/fetcher/useSearchData"
import { Ionicons } from "@expo/vector-icons"
import Loader from "@components/atoms/Loader/Loader"
import useLoadingState from "@hooks/useLoadingState"
import pallete from "@utils/style/pallete"
import shadow from "@utils/style/shadow"
import SearchHorizontalList from "./SearchHorizontalList/SearchHorizontalList"
import { Container, SearchBar } from "./SearchScreen.style"

function SearchScreen() {
    const [query, setQuery] = useState("")
    const onChangeText = (userText: string) => setQuery(userText)

    const onSubmit = (text: string) => {
        if (!text) return
        refetchMovieData()
        refetchTvData()
    }

    const {
        isLoading: isTvSearchLoading,
        data: searchTvData,
        refetch: refetchTvData,
    } = useTvSearchData(query, false)
    const {
        isLoading: isMovieSearchLoading,
        data: searchMovieData,
        refetch: refetchMovieData,
    } = useMovieSearchData(query, false)

    const isLoading = useLoadingState([isTvSearchLoading, isMovieSearchLoading])

    const filteredMovieData = useMemo(
        () =>
            searchMovieData?.results.map(
                ({ poster_path, title, vote_average, id }) => ({
                    id,
                    poster_path,
                    title,
                    vote_average,
                })
            ),
        [searchMovieData]
    )
    const filterdTvData = useMemo(
        () =>
            searchTvData?.results.map(
                ({ poster_path, name, vote_average, id }) => ({
                    id,
                    poster_path,
                    name,
                    vote_average,
                })
            ),
        [searchTvData]
    )

    return (
        <Container>
            <SearchBar
                placeholder=" Search anything!"
                maxLength={35}
                placeholderTextColor={pallete.gray6}
                autoCapitalize="none"
                onChangeText={onChangeText}
                style={shadow.xsm}
                onSubmitEditing={() => onSubmit(query)}
            />
            {isLoading && <Loader />}
            {!isLoading && filteredMovieData && filterdTvData && (
                <>
                    <SearchHorizontalList
                        data={filteredMovieData}
                        title="Movie"
                        Icon={
                            <Ionicons
                                name="cloud-done"
                                size={17.5}
                                color={pallete.teal7}
                            />
                        }
                    />
                    <SearchHorizontalList
                        data={filterdTvData}
                        title="Tv"
                        Icon={
                            <Ionicons
                                name="cloud-done"
                                size={17.5}
                                color={pallete.blue6}
                            />
                        }
                    />
                </>
            )}
        </Container>
    )
}

export default SearchScreen
