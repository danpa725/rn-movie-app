export interface TvTotalData {
    page: number

    total_pages: number
    total_results: number

    results: TvData[]
}

export interface TvData {
    poster_path: string | null
    backdrop_path: string | null
    adult: boolean
    overview: string
    genre_ids: number[]
    id: number
    name: string
    original_name: string
    original_language: string
    popularity: number
    vote_count: number
    vote_average: number
    first_air_date: string
}
