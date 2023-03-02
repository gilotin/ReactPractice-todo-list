import { Fragment } from "react";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Table from "./components/Table";

function App() {
    return (
        <Fragment>
            <Navigation />

            <Table />

            <Footer />
        </Fragment>
    );
}

export default App;
