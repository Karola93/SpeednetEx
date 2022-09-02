import React from "react";
import List from "../List";
import {data} from "../../data/data";
import {useCookies} from 'react-cookie';
import './HomePage.css'
import Counter from "../Counter";


function HomePage() {
    const [cookies, setCookie] = useCookies();
    return (
        <>
            <List className="header" data={data}/>
            {cookies.checkedElement && <Counter/>}
        </>

    )
}

export default HomePage;
