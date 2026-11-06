import s from "./Banner.module.css";
import defaultBg from "@/assets/suyrfBIG.png";
import {useCallback, useMemo} from "react";
import {useGetMoviesByCategoryQuery} from "@/features/movies/api/moviesApi";

export const Banner = () => {
    const {data} = useGetMoviesByCategoryQuery({category: 'popular', params: {page: 1}});

    const getRandomIndex = useCallback((length: number) => {
        return Math.floor(Math.random() * length)
    },[])

    const movie = data?.results

    const randomBackdrop = useMemo(() => {
        if (movie && movie.length > 0) {
            const randomIndex = getRandomIndex(movie.length);
            return movie[randomIndex].backdrop_path;
        }
        return null;
    }, [movie, getRandomIndex]);

    const bgUrl = randomBackdrop ? `https://image.tmdb.org/t/p/original/${randomBackdrop}` : defaultBg;

    return (
        <div className={s.banner}>
            <img className={s.image} src={bgUrl} alt="bg"/>
        </div>
    );
};