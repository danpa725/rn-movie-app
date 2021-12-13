import React, { ReactElement, useCallback } from "react"
import { StyleSheet } from "react-native"
import { BlurView } from "expo-blur"
import { Ionicons } from "@expo/vector-icons"

import pallete from "@utils/style/pallete"
import useThemeMode from "@hooks/useThemeMode"
import useItemLayout from "@hooks/useItemLayout"

import Image from "@components/atoms/Image/Image"
import TextCustome from "@components/atoms/Text/Text"
import Gradient from "@components/atoms/Gradient/Gradient"
import Tag from "@components/molecules/Tag/Tag"

import { MovieData } from "../utils/interface"
import { makeImagePath } from "../utils/getMovieData"

import {
    VerticalScrollContainer,
    CardContainer,
    SideContainer,
    ContentContainer,
    TagContainer,
    CardContainerDivider,
    FooterContainerDivider,
} from "./MovieRenderParent.style"
import shadow from "@/utils/style/shadow"

interface MovieUpcomingListProps {
    upcomingMovieList: MovieData[]
    ListHeaderComponent: ReactElement
    refreshing: boolean
    onRefresh: () => void
}

const ITEM_HEIGHT = 300

function MovieRenderParent({
    upcomingMovieList,
    ListHeaderComponent,
    refreshing,
    onRefresh,
}: MovieUpcomingListProps) {
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

    const getItemLayout = useItemLayout(ITEM_HEIGHT)

    const renderItem = useCallback(
        ({ item }) => (
            <CardContainer style={shadow?.xLg}>
                {item.backdrop_path !== null && (
                    <Image
                        width="100%"
                        height="100%"
                        uri={makeImagePath(item.backdrop_path)}
                        customeStyle={{
                            position: "absolute",
                        }}
                        borderRadius="10px"
                    />
                )}
                {item.backdrop_path === null && (
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
                {item.poster_path !== null && (
                    <Image
                        width="50%"
                        height="265px"
                        uri={makeImagePath(item.poster_path)}
                        customeStyle={{
                            marginLeft: 20,
                        }}
                        borderRadius="7.5px"
                    />
                )}
                {item.poster_path === null && (
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
                    <TextCustome
                        fontSize="16px"
                        fontWeight={700}
                        fontColor={pallete.gray2}
                    >
                        {item.title}
                    </TextCustome>
                    <ContentContainer>
                        <TagContainer>
                            <Tag
                                fontSize="9px"
                                isLight={isLight}
                                borderRadius="5px"
                                customeStyle={{
                                    marginRight: 10,
                                }}
                            >
                                <Ionicons name="calendar" size={10} />
                                {"  "}
                                {new Date(item.release_date).toLocaleDateString(
                                    "ko-KR",
                                    {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    }
                                )}
                            </Tag>
                            <Tag
                                fontSize="9px"
                                isLight={isLight}
                                borderRadius="5px"
                            >
                                <Ionicons name="arrow-up" size={10} />
                                {"  "}
                                {item.popularity.toFixed(1)}
                            </Tag>
                        </TagContainer>

                        <TextCustome
                            fontSize="11px"
                            fontWeight={300}
                            fontColor={pallete.gray4}
                        >
                            {item.overview && item.overview.length < 165
                                ? item.overview
                                : `${item.overview.slice(0, 165)}...`}
                            {item.overview.length === 0 &&
                                "There is no overview... sorry 😢"}
                        </TextCustome>
                    </ContentContainer>
                </SideContainer>
            </CardContainer>
        ),
        []
    )

    return (
        <VerticalScrollContainer
            refreshing={refreshing}
            onRefresh={onRefresh}
            ListHeaderComponent={ListHeaderComponent}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            data={upcomingMovieList}
            renderItem={renderItem}
            getItemLayout={getItemLayout}
            keyExtractor={(item) => String(item.id)}
            ItemSeparatorComponent={CardContainerDivider}
            removeClippedSubviews={false}
            disableVirtualization={false}
            ListFooterComponent={<FooterContainerDivider />}
        />
    )
}

export default MovieRenderParent
