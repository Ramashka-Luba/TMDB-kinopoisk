import s from "./SearchForm.module.css";
import {Button} from "@/common/components/Button/Button";
import React from "react";
import {useNavigate, useSearchParams} from "react-router";
import {Path} from "@/common/routing/Path";

type Props = {
    setSearchQuery?: (query: string) => void;
}

export const SearchForm = ({setSearchQuery}: Props) => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const currentQuery = searchParams.get("query") || '';

    const onSubmitHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const searchValue = formData.get('searchQuery') as string;

        if (!searchValue) return;

        if (setSearchQuery) {
            setSearchQuery(searchValue.trim())
            navigate(`${Path.Search}?query=${encodeURIComponent(searchValue)}`);
        } else {
            // Если мы на главной, просто редиректим на страницу поиска с параметром
            navigate(`${Path.Search}?query=${encodeURIComponent(searchValue)}`);
        }
    };

    //очищаем запрос после нажатия на крестик
    const onInputHandler = (e: React.InputEvent<HTMLInputElement>) => {
        if (e.currentTarget.value === '' && setSearchQuery) {
            setSearchQuery('')
            navigate(Path.Search) // очищаем URL при очистке инпута
        }
    }

    return (
        <form className={s.form} onSubmit={onSubmitHandler}>
            <input
                className={s.input}
                name="searchQuery"
                type='search'
                placeholder='Search for a movie'
                defaultValue={currentQuery}
                onInput={onInputHandler}
                required
            />
            <Button type={'submit'} title={'Search'}/>
        </form>
    );
};

