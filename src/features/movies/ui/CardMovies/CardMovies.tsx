import s from './CardMovies.module.css'
import {NavLink} from "react-router";

type Props = {
    id: number
    title: string
    bgUrl: string | null
}

export const CardMovies = ({id, title, bgUrl}: Props ) => {
    return (
        <div className={s.card}>
            <div className={s.poster}>
                <NavLink to={`movies/${id}`}>
                    {bgUrl && <img src={`https://image.tmdb.org/t/p/original/${bgUrl}`} alt="image movi"/>}
                </NavLink>
            </div>

            <NavLink className={s.titleLink} to={`movies/${id}`}>{title}</NavLink>
        </div>
    );
};