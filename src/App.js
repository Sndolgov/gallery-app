import Header from "./component/header/Header";
import {useEffect} from "react";
import WebFont from 'webfontloader'
import styles from './App.module.css'
import {Route, Routes} from "react-router-dom";
import Home from "./component/home/Home";
import About from "./component/about/About";
import Insta from "./component/insta/Insta";
import Shop from "./component/shop/Shop";
import Work from "./component/work/Work";


const menuItems = {
    left: ['WORK', 'SHOP'],
    right: ['INSTA', 'ABOUT']
}

function App() {

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Poor Story']
            }
        });
    }, []);

    return (
        <div className={styles.main}>
            <Header menuItems={menuItems}/>
            <Home/>
            {/*<Header menuItems={menuItems}/>*/}
            {/*<Routes>*/}
            {/*    <Route path={"/"} element={<Home/>}/>*/}
            {/*</Routes>*/}
        </div>
    );
}

export default App;

{/*<BrowserRouter>*/
}
{/* <Route path={"/"}>*/
}
{/* <Home/>*/
}
{/* </Route>*/
}
{/* <Route path={"/about"}>*/
}
{/* <About/>*/
}
{/* </Route>*/
}
{/* <Route path={"/insta"}>*/
}
{/* <Insta/>*/
}
{/* </Route>*/
}
{/* <Route path={"/shop"}>*/
}
{/* <Shop/>*/
}
{/* </Route>*/
}
{/* <Route path={"/work"}>*/
}
{/* <Work/>*/
}
{/* </Route>*/
}
{/* </BrowserRouter>*/
}

// https://www.malikafavre.com/about
// https://shantellmartin.art/
// https://www.jamesllewis.com/
// https://tamarhalpern.nyc/
// http://www.andreamanningart.com/
// http://www.mattpamer.com/
// https://www.takesadamatsutani.com/
