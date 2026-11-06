import {Path} from "@/common/routing/Path";

export const NAVIGATION = [
    {to: Path.Main, label: 'Main'},
    {to: Path.Category, label: 'Category'},
    {to: Path.Filtered, label: 'Filtered'},
    {to: Path.Search, label: 'Search'},
    {to: Path.Favorites, label: 'Favorites'},
]

export const CATEGORIES = [
    {id: 'popular', label: 'Popular'},
    {id: 'top_rated', label: 'Top Rated'},
    {id: 'upcoming', label: 'Upcoming'},
    {id: 'now_playing', label: 'Now Playing'},
] as const

export type CategoryItem = typeof CATEGORIES[number];