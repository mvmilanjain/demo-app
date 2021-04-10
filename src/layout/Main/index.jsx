import "./layout.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default props => {

    return (
        <div className={"mainLayout"}>
            <Header/>
            <div>{props.children}</div>
            <Footer/>
        </div>
    );
};
