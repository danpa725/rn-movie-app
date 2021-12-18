import useItemLayout from "@/hooks/useItemLayout"
import React, { ReactElement, useCallback, useEffect } from "react"
import styled from "styled-components/native"
import {
    FlatListProps as RnFlatListProps,
    StyleProp,
    ViewStyle,
} from "react-native"

const FlatListContaienr = styled.FlatList`
    background: ${(props) => props.theme.background};
    width: 100%;
`

interface FlatListProps<DataType> {
    data: Readonly<DataType[]>
    RenderElement: ({
        data,
        index,
    }: {
        data: DataType
        index: number
    }) => JSX.Element
    keyExtractor: (item: DataType, index: number) => string
    horizontal: boolean
    itemHeight: number
    refreshing?: boolean
    onRefresh?: () => void
    ItemSeparatorComponent?: React.ComponentType<any>
    contentContainerStyle?: StyleProp<ViewStyle>
    ListHeaderComponent?: ReactElement
    ListHeaderComponentStyle?: StyleProp<ViewStyle>
    ListFooterComponent?: ReactElement
    ListFooterComponentStyle?: StyleProp<ViewStyle>
    showsHorizontalScrollIndicator?: boolean
    showsVerticalScrollIndicator?: boolean
}

function FlatList<DataType>({
    data,
    RenderElement,
    keyExtractor,
    horizontal,
    itemHeight,
    refreshing,
    onRefresh,
    ItemSeparatorComponent,
    contentContainerStyle,
    ListHeaderComponent,
    ListHeaderComponentStyle,
    ListFooterComponent,
    ListFooterComponentStyle,
    showsHorizontalScrollIndicator,
    showsVerticalScrollIndicator,
}: FlatListProps<DataType>) {
    const getItemLayout = useItemLayout(itemHeight)

    const renderItem = useCallback(({ item: dataList, index }) => {
        return <RenderElement data={dataList} index={index} />
    }, [])

    return (
        <FlatListContaienr
            refreshing={refreshing}
            onRefresh={onRefresh}
            data={data}
            renderItem={renderItem}
            horizontal={horizontal}
            disableVirtualization={false}
            removeClippedSubviews={false}
            getItemLayout={getItemLayout}
            //@ts-ignore
            keyExtractor={keyExtractor}
            contentContainerStyle={contentContainerStyle}
            ItemSeparatorComponent={ItemSeparatorComponent}
            ListHeaderComponent={ListHeaderComponent}
            ListHeaderComponentStyle={ListHeaderComponentStyle}
            ListFooterComponent={ListFooterComponent}
            ListFooterComponentStyle={ListFooterComponentStyle}
            showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
            showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        />
    )
}

export default FlatList
