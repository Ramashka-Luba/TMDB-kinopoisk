import s from './ItemMovies.module.css'
import {NavLink} from "react-router";
import imageIcon from './../../../../assets/imageIcon.svg'

type Props = {
    id: number
    title: string
    bgUrl: string | null
}

export const ItemMovies = ({id, title, bgUrl}: Props ) => {
    return (
        <div className={s.item}>
            <div className={s.poster}>
                <NavLink to={`movies/${id}`}>
                    {bgUrl
                        ? <img className={s.img} src={`https://image.tmdb.org/t/p/original/${bgUrl}`} alt="image movi"/>
                        : <img className={s.img} src={imageIcon} alt="image movi"/>}
                </NavLink>
            </div>

            <NavLink className={s.titleLink} to={`movies/${id}`}>{title}</NavLink>
        </div>
    );
};