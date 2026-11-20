import s from './CategoryTitle.module.css'
import {CATEGORIES} from "@/common/constants";

type Props = {
    category: string
}

export const CategoryTitle = ({category}: Props) => {

    const currentCategory = CATEGORIES.find(cat => cat.id === category)
    const currentTitle = currentCategory ? `${currentCategory.label} Movies` : 'Movies'

    return (
        <h3 className={s.title}>{currentTitle}</h3>
    );
};
