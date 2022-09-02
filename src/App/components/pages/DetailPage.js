import React from "react";
import Button from '../reuse/Button'
import Detail from "../Detail";
import {data} from "../../data/data";

const DetailPage = () => {

    return (
        <div>
            <Detail data={data}/>
            <Button type='text' text='Go back'/>
        </div>
    );
};

export default DetailPage;