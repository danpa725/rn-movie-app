import { useState } from "react"
import { useQueryClient } from "react-query"

function useRefetch(
    fetchCategory: string
): [isRefreshing: boolean, onRefresh: () => Promise<void>] {
    const queryClient = useQueryClient()

    const [isRefreshing, setRefreshing] = useState<boolean>(false)
    const onRefresh = async () => {
        setRefreshing(true)
        await queryClient.refetchQueries([fetchCategory])
        setRefreshing(false)
    }

    return [isRefreshing, onRefresh]
}

export default useRefetch
