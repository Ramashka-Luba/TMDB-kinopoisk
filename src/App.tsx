import './App.module.css'
import {Routing} from "@/common/routing/Routing";
import {Header} from "@/common/components/Header/Header";
import s from './App.module.css'
import {ScrollToTop} from "@/common/components/ScrollToTop/ScrollToTop";
import {Footer} from "@/common/components/Footer/Footer";


function App() {

    return (
        <div className={s.app}>
            <Header/>
            <div className={s.main}>
                <ScrollToTop/>
                <Routing/>
            </div>
            <Footer/>
        </div>
    )
}

export default App
