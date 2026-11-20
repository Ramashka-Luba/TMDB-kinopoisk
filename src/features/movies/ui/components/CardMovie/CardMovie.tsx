import s from './CardMovie.module.css'
import {useParams} from "react-router";
import {
    useGetMovieByIdQuery,
    useGetMovieCreditsByIdQuery,
    useGetSimilarMovieQuery
} from "@/features/movies/api/moviesApi";
import {Rating} from "@/features/movies/ui/components/Rating/Rating";
import imageIcon from "../../../../../assets/imageIcon.svg"
import {ItemMovies} from "@/features/movies/ui/components/ItemMovies/ItemMovies";


export const CardMovie = () => {
    const {id} = useParams<{ id: string }>()
    const movieId = Number(id)

    const {data: movie} = useGetMovieByIdQuery(movieId)
    const {data: cast} = useGetMovieCreditsByIdQuery(movieId)
    const {data: similarMovies} = useGetSimilarMovieQuery(movieId)

    const posterSrc = movie?.poster_path ? `https://image.tmdb.org/t/p/original/${movie?.poster_path}` : imageIcon
    const year = movie?.release_date.slice(0,4)
    const runtime = movie?.runtime && `${Math.floor(movie?.runtime / 60)}ч ${movie?.runtime % 60}м`;
    const castItem = cast?.cast.slice(0,6)
    const similarItem = similarMovies?.results.slice(0,6)

    return (
        <section className={s.content}>
            <div className={s.info}>
                <div className={s.poster}>
                    <img src={posterSrc} alt="poster movie"/>
                </div>
                <div>
                    <h2 className={s.title}>{movie?.title}</h2>
                    <div className={s.meta}>
                        <span>Release year: {year}</span>
                        {movie?.vote_average && <Rating rating={movie?.vote_average}/>}
                        <span>Runtime: {runtime}</span>
                    </div>
                    <p className={s.text}>{movie?.overview}</p>
                    <div>
                        <h3 className={s.subtitle}>Genres</h3>
                        <ul className={s.badges}>
                            {movie?.genres.map(genre => (
                                <li key={genre.id} className={s.badge}>{genre.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <h3 className={s.caption}>Cast</h3>
                <ul className={s.wrapper}>
                    {castItem?.map(item => (
                        <li key={item.id} className={s.castList}>
                            <span className={s.avatar}>
                                <img src={item.profile_path ? `http://image.tmdb.org/t/p/w185/${item.profile_path}` : imageIcon} alt="profile image"/>
                            </span>
                            <span className={s.name}>{item.name}</span>
                            <span className={s.character}>{item.character}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className={s.caption}>Similar Movies</h3>
                <ul className={s.wrapper}>
                    {similarItem?.map(movie => (
                        <ItemMovies
                            id={movie.id}
                            title={movie.title}
                            bgUrl={movie.poster_path}
                            rating={movie?.vote_average}
                        />
                    ))}

                </ul>
            </div>
        </section>
    );
}