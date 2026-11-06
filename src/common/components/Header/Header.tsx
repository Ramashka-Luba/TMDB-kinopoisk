import s from './Header.module.css'
import {Path} from "@/common/routing/Path";
import {NavLink} from "react-router";
import logo from './../../../../src/assets/logo.svg'
import {ButtonNavLink} from "@/common/components/Button/ButtonNavLink/ButtonNavLink";
import {NAVIGATION} from "@/common/constants";

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <NavLink to={Path.Main}>
                    <img className={s.logo} src={logo} alt="MTDB logo"/>
                </NavLink>
                <nav className={s.nav}>
                    {NAVIGATION.map(item => (
                        <ButtonNavLink key={item.to} to={item.to} title={item.label}/>
                    ))}
                </nav>
                <div>Dark</div>
            </div>
        </header>
    );
};