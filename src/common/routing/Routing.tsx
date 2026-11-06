import {Navigate, Route, Routes} from "react-router";
import {MainPage} from "@/features/movies/ui/pages/MainPage/MainPage";
import {FilteredPage} from "@/features/movies/ui/pages/FilteredPage/FilteredPage";
import {FavoritesPage} from "@/features/movies/ui/pages/FavoritesPage/FavoritesPage";
import {PageNotFound} from "@/common/components/PageNotFound/PageNotFound";
import {Path} from "@/common/routing/Path";
import {CategoryPage} from "@/features/movies/ui/pages/CategoryPage/CategoryPage";
import {SearchPage} from "@/features/movies/ui/pages/SearchPage/SearchPage";

export const Routing = () => (
    <Routes>
        <Route path={Path.Main} element={<MainPage/>}/>

        <Route path={'/movies'} element={<Navigate to={Path.Category} />} /> {/* Если зашли на /movies, редиректим на популярные */}
        <Route path={Path.CategoryDetail} element={<CategoryPage/>}/> {/* Основной роут для категорий */}

        <Route path={Path.Filtered} element={<FilteredPage/>}/>
        <Route path={Path.Search} element={<SearchPage/>}/>
        <Route path={Path.Favorites} element={<FavoritesPage/>}/>
        <Route path={Path.NotFound} element={<PageNotFound/>}/>
    </Routes>
);