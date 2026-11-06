import s from './Button.module.css'
import {Link} from "react-router";

type Props = {
    title: string,
    type?: 'submit' | 'reset' | 'button',
    disabled?: boolean,
    onClick?: () => void,
    //link
    buttonType?: 'link',
    to?: string
}

export const Button = ({title, type, disabled, onClick, buttonType, to}: Props) => {
    const onClickHandler =()=> {
        onClick?.()
    }

    if (buttonType === 'link' && to) {
        return (
            <Link className={s.button} to={to}>{title}</Link>
        )
    } else {
        return (
            <button
                disabled={disabled}
                type={type}
                className={s.button}
                onClick={onClickHandler}
            >
                {title}
            </button>
        );
    }
};