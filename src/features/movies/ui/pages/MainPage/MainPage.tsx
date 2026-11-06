import {Banner} from "@/features/movies/ui/pages/MainPage/Banner/Banner";
import s from './MainPage.module.css'
import {CATEGORIES} from "@/common/constants";
import {CategorySection} from "@/features/movies/ui/pages/MainPage/CategorySection/CategorySection";
import {SearchForm} from "@/features/movies/ui/SearchForm/SearchForm";

export const MainPage = () => {

    return (
        <>
            <div className={s.wrapper}>
                <Banner/>

                <div className={s.content}>
                    <h2 className={s.contentTitle}>Welcome</h2>
                    <div className={s.contentDesc}>Browse highlighted titles from TMDB</div>

                    <SearchForm />
                </div>
            </div>

            {CATEGORIES.map( cat => (
                <CategorySection key={cat.id} category={cat}/>
            ))}
        </>
    )
};



