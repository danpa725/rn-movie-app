import React, { ReactElement } from "react"

import { Ionicons } from "@expo/vector-icons"

import pallete from "@utils/style/pallete"
import shadow from "@utils/style/shadow"
import useThemeMode from "@hooks/useThemeMode"

import { makeImagePath } from "@api/utils/makeImagePath"

import Gradient from "@components/atoms/Gradient/Gradient"
import Image from "@components/atoms/Image/Image"
import Text from "@components/atoms/Text/Text"
import Tag from "@components/molecules/Tag/Tag"
import Title from "@components/molecules/Title/Title"
import FlatList from "@components/structure/FlatList/FlatList"

import {
    BoxContainer,
    HorizontalContainer,
    HorizontalSeperator,
    InfoContainer,
    ResultNumber,
} from "./SearchHorizontalList.style"

interface SearchResult {
    poster_path: string | null
    title?: string
    name?: string
    vote_average: number
    id: number
}

interface SearchResultsProps {
    data: SearchResult[]
    Icon: ReactElement
    title: string
}

const ITEM_HEIGHT = 275

function SearchHorizontalList({ data, Icon, title }: SearchResultsProps) {
    return (
        <HorizontalContainer>
            <Title
                Icon={Icon}
                title={title}
                fontSize="xlg"
                customeStyle={{
                    marginLeft: 20,
                }}
            />
            <FlatList
                data={data}
                horizontal={true}
                RenderElement={({
                    data: { vote_average, name, poster_path, title, id },
                    index,
                }) => (
                    <SearchRender
                        vote_average={vote_average}
                        name={name}
                        title={title}
                        poster_path={poster_path}
                        id={id}
                        index={index + 1}
                    />
                )}
                itemHeight={ITEM_HEIGHT}
                keyExtractor={(item: any) => String(item.id)}
                ItemSeparatorComponent={HorizontalSeperator}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingTop: 20,
                    paddingBottom: 32.5,
                    paddingHorizontal: 20,
                }}
            />
        </HorizontalContainer>
    )
}

interface SearchRenderProps extends SearchResult {
    index: number
}

const SearchRender = ({
    poster_path,
    title,
    name,
    vote_average,
    id,
    index: rating,
}: SearchRenderProps) => {
    const isLight = useThemeMode()

    return (
        <BoxContainer style={shadow.lg} key={id} isLight={isLight}>
            {poster_path && (
                <Image
                    width="125px"
                    height="100px"
                    uri={makeImagePath(poster_path)}
                    customeStyle={{
                        flex: 5,
                        borderTopRightRadius: 5,
                        borderTopLeftRadius: 5,
                    }}
                />
            )}
            {!poster_path && (
                <Gradient
                    startColor={pallete.teal6}
                    endColor={pallete.teal10}
                    startPos={{ x: 0, y: 1 }}
                    endPos={{ x: 1, y: 0 }}
                    customeStyle={{
                        width: 125,
                        flex: 5,
                        borderTopRightRadius: 5,
                        borderTopLeftRadius: 5,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Ionicons name="beer" size={40} color={pallete.gray2} />
                </Gradient>
            )}

            <InfoContainer>
                <Text
                    fontSize="md"
                    fontWeight={700}
                    customeStyle={{
                        marginBottom: 5,
                    }}
                >
                    <>{title?.slice(0, 17) || name?.slice(0, 17)}</>
                </Text>
                <Tag isLight={isLight} borderRadius="bRound">
                    <>
                        {vote_average}{" "}
                        <Ionicons
                            name="star"
                            color={pallete.yellow6}
                            size={10}
                        />
                    </>
                </Tag>
            </InfoContainer>
            <ResultNumber>{rating}</ResultNumber>
        </BoxContainer>
    )
}

export default SearchHorizontalList
