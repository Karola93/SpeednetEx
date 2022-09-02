import React from "react";
import Button from '../reuse/Button'
import Detail from "../Detail";
import {data} from "../../data/data";
import {useNavigate} from "react-router-dom";

const DetailPage = () => {
    const navigate = useNavigate();

    const backToHomePageHandler = (e) => {
        e.preventDefault();
        navigate('/')
    }

    return (
        <div>
            <Detail data={data}/>
            <Button type='text' text='Go back' onclick={backToHomePageHandler}/>
        </div>
    );
};

export default DetailPage;