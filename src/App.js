import React from "react";
import SearchLayoutComponent from "./components/SearchLayoutComponent/SearchLayoutComponent";
import "./css/normalize.css";
import "./css/style.css";

const App = () => (
    <>
        <header className="header container flex">
                <h2 className="heading2">Поиск серий Рик и Морти</h2>
        </header>
        <main className="main">
            <div className="container"> 
                <SearchLayoutComponent />
            </div>
        </main>
    </>
);

export default App;