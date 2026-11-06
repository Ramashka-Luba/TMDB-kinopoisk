import {NavLink} from "react-router";
import s from "./ButtonNavLink.module.css";

type Props = {
    to: string
    title: string
    variant?: boolean
}

export const ButtonNavLink = ({to, title, variant}: Props) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `${s.link} ${variant ? s.linkVariant : ''} ${isActive ? (variant ? s.activeLinkVariant : s.activeLink) : ''}`.trim()
            }
        >
            {title}
        </NavLink>
    );
};
