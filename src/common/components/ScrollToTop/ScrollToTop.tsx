import { useEffect } from "react";
import {useLocation} from "react-router";


export const ScrollToTop = ()=> {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Перемещает скролл наверх при изменении URL
    }, [pathname]);

    return null;
}
