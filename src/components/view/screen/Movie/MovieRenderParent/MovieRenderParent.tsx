import React, { ReactElement } from "react"
import { StyleSheet, View } from "react-native"

import { BlurView } from "expo-blur"
import { Ionicons } from "@expo/vector-icons"

import pallete from "@utils/style/pallete"
import shadow from "@utils/style/shadow"

import useThemeMode from "@hooks/useThemeMode"

import Image from "@components/atoms/Image/Image"
import Text from "@components/atoms/Text/Text"
import Gradient from "@components/atoms/Gradient/Gradient"
import Tag from "@components/molecules/Tag/Tag"
import FlatList from "@components/structure/FlatList/FlatList"

import { makeImagePath } from "@api/utils/makeImagePath"
import { MovieData } from "@api/movie/interface/interface"

import {
    CardContainer,
    SideContainer,
    ContentContainer,
    TagContainer,
    CardContainerDivider,
    FooterContainerDivider,
} from "./MovieRenderParent.style"

interface MovieUpcomingListProps {
    upcomingMovieList: MovieData[]
    ListHeaderComponent: ReactElement
    refreshing: boolean
    onRefresh: () => void
}

function MovieRenderParent({
    upcomingMovieList,
    ListHeaderComponent,
    refreshing,
    onRefresh,
}: MovieUpcomingListProps) {
    return (
        <FlatList
            refreshing={refreshing}
            onRefresh={onRefresh}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            data={upcomingMovieList}
            RenderElement={({ data }) => {
                if (data) {
                    return <RenderElement data={data} />
                }
                return (
                    <View>
                        <Text fontSize="md">없노</Text>
                    </View>
                )
            }}
            itemHeight={300}
            //@ts-ignore
            keyExtractor={(item) => String(item.id)}
            ListHeaderComponent={ListHeaderComponent}
            ItemSeparatorComponent={CardContainerDivider}
            ListFooterComponent={<FooterContainerDivider />}
        />
    )
}

function RenderElement({ data }: { data: MovieData }) {
    const isLight = useThemeMode()

    const gradientColors = {
        background: {
            light: [pallete.blue3, pallete.blue6],
            dark: [pallete.blue4, pallete.blue9],
        },
        image: {
            light: [pallete.blue2, pallete.blue4],
            dark: [pallete.blue3, pallete.blue6],
        },
    }

    return (
        <CardContainer style={shadow?.xLg}>
            {data.backdrop_path !== null && (
                <Image
                    width="100%"
                    height="100%"
                    uri={makeImagePath(data.backdrop_path)}
                    customeStyle={{
                        position: "absolute",
                    }}
                    borderRadius="bRound"
                />
            )}
            {data.backdrop_path === null && (
                <Gradient
                    startColor={
                        isLight
                            ? gradientColors.background.light[0]
                            : gradientColors.background.dark[0]
                    }
                    startPos={{ x: 0, y: 1 }}
                    endColor={
                        isLight
                            ? gradientColors.background.light[1]
                            : gradientColors.background.dark[1]
                    }
                    endPos={{ x: 1, y: 0 }}
                    customeStyle={[
                        StyleSheet.absoluteFill,
                        { borderRadius: 10 },
                    ]}
                />
            )}

            <BlurView
                intensity={isLight ? 70 : 90}
                style={[
                    StyleSheet.absoluteFill,
                    {
                        borderRadius: 10,
                    },
                ]}
                tint={"dark"}
            />
            {data.poster_path !== null && (
                <Image
                    width="50%"
                    height="265px"
                    uri={makeImagePath(data.poster_path)}
                    customeStyle={{
                        marginLeft: 20,
                    }}
                    borderRadius="bxxxlg"
                />
            )}
            {data.poster_path === null && (
                <Gradient
                    startColor={
                        isLight
                            ? gradientColors.image.light[0]
                            : gradientColors.image.dark[0]
                    }
                    endColor={
                        isLight
                            ? gradientColors.image.light[1]
                            : gradientColors.image.dark[1]
                    }
                    startPos={{ x: 1, y: 0 }}
                    endPos={{ x: 0, y: 1 }}
                    customeStyle={{
                        alignItems: "center",
                        justifyContent: "center",
                        width: "50%",
                        height: 265,
                        marginLeft: 20,
                        borderRadius: 7.5,
                    }}
                >
                    <Ionicons
                        name="trail-sign-outline"
                        color={isLight ? pallete.white : pallete.gray2}
                        size={85}
                    />
                </Gradient>
            )}

            <SideContainer
                style={{
                    borderTopColor: pallete.gray4,
                    borderBottomColor: pallete.gray4,
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                }}
            >
                <Text fontSize="xlg" fontWeight={700} fontColor={pallete.gray2}>
                    {data.title}
                </Text>
                <ContentContainer>
                    <TagContainer>
                        <Tag
                            isLight={isLight}
                            borderRadius="bxxlg"
                            customeStyle={{
                                marginRight: 10,
                            }}
                            fontSize="xsm"
                        >
                            <Ionicons name="calendar" size={10} />
                            {"  "}
                            {new Date(data.release_date).toLocaleDateString(
                                "ko-KR",
                                {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                }
                            )}
                        </Tag>
                        <Tag
                            isLight={isLight}
                            borderRadius="bxxlg"
                            fontSize="xsm"
                        >
                            <Ionicons name="arrow-up" size={10} />
                            {"  "}
                            {data.popularity.toFixed(1)}
                        </Tag>
                    </TagContainer>

                    <Text
                        fontSize="md"
                        fontWeight={300}
                        fontColor={pallete.gray4}
                    >
                        <>
                            {data.overview && data.overview.length < 165
                                ? data.overview
                                : `${data.overview.slice(0, 165)}...`}
                            {data.overview.length === 0 &&
                                "There is no overview... sorry 😢"}
                        </>
                    </Text>
                </ContentContainer>
            </SideContainer>
        </CardContainer>
    )
}

export default MovieRenderParent
