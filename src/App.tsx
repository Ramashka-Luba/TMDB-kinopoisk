import './App.module.css'
import {Routing} from "@/common/routing/Routing";
import {Header} from "@/common/components/Header/Header";
import s from './App.module.css'
import {ScrollToTop} from "@/common/components/ScrollToTop/ScrollToTop";
import {Footer} from "@/common/components/Footer/Footer";
import {ToastContainer} from "react-toastify";
import {useGlobalLoading} from "@/common/hooks";
import {LinearProgress} from "@/features/movies/ui/LinearProgress/LinearProgress";

function App() {

    const isGlobalLoading = useGlobalLoading()

    return (
        <div className={s.app}>
            <Header/>
            {isGlobalLoading && <LinearProgress/>}
            <div className={s.main}>
                <ScrollToTop/>
                <Routing/>
            </div>
            <Footer/>
            <ToastContainer/>
        </div>
    )
}

export default App
