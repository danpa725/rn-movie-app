import { useEffect, useState } from "react"

function useLoadingState(loadingStateArray: boolean[]) {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(
        () =>
            setIsLoading(loadingStateArray.reduce((acc, curr) => acc || curr)),
        [loadingStateArray]
    )

    return isLoading
}

export default useLoadingState
