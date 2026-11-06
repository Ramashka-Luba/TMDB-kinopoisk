import {useGetMoviesByCategoryQuery} from "@/features/movies/api/moviesApi";
import {CardMovies} from "@/features/movies/ui/CardMovies/CardMovies";
import s from './CategorySection.module.css'
import type {CategoryItem} from "@/common/constants";
import {CategoryTitle} from "@/features/movies/ui/CategoryTitle/CategoryTitle";
import {Button} from "@/common/components/Button/Button";

type Props = {
    category: CategoryItem
}

export  const CategorySection = ({category}: Props) => {
    const {data} = useGetMoviesByCategoryQuery({category: category.id, params: {page: 1}});

    const displayMovie = data?.results.slice(0, 6)

    return (
        <div className={s.wrapper}>

            <div className={s.heading}>
                <CategoryTitle category={category.id}/>
                <Button buttonType={'link'} title={"View more"} to={`/movies/${category.id}`}/>
            </div>

            <div className={s.container}>
                {displayMovie && displayMovie.map(item => (
                    <CardMovies
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        bgUrl={item.poster_path}
                    />
                ))}
            </div>
        </div>
    );
};