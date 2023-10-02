import { Outlet } from "react-router-dom";
import Header from "../pages/Header";
import Footer from "../pages/Footer";

const Main = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;