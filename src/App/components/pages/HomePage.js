import React from "react";
import List from "../List";
import {data} from "../../data/data";
import './HomePage.css'


function HomePage(){
    return <List className="header" data={data}/>
}

export default HomePage;
