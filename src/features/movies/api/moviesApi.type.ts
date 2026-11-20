// for movie By Category
export type MovieResponse = {
    page: number;
    results: MovieItem[];
    total_pages: number;
    total_results: number;
}

export type MovieItem = {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export type GetMoviesArgs = {
    query?: string
    include_adult?: boolean
    language?: string
    primary_release_year?: string
    page?: number
    region?: string
    year?: string
}

export type CategoryType = 'popular' | 'now_playing' | 'top_rated' | 'upcoming'

// for Movie By Id
export type MovieDetails = Omit<MovieItem, 'genre_ids'> & {
    belongs_to_collection: MovieCollection | null;
    budget: number;
    genres: Genre[];
    homepage: string | null;
    imdb_id: string | null;
    origin_country: string[];
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    revenue: number;
    runtime: number | null;
    softcore: boolean;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
}

export type Genre = {
    id: number;
    name: string;
}

export type ProductionCompany = {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
}

export type ProductionCountry = {
    iso_3166_1: string;
    name: string;
}

export type SpokenLanguage = {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export type MovieCollection = {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
}

// for Movie Credit By Id
export type CardResponse = {
    id: number;
    cast: CastMember[];
    crew: CrewMember[];
}

export type PersonBase = {
    adult: boolean;
    gender: number; // 0 - не указан, 1 - женский, 2 - мужской, 3 - небинарный
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    credit_id: string;
}

export type CastMember =  PersonBase & {
    cast_id: number;
    character: string;
    order: number;
}

export type CrewMember = PersonBase & {
    department: string;
    job: string;
}