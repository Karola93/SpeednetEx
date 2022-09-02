import React from "react";
import {useSelector} from "react-redux";
import {selectCheckboxId} from "../store/checkboxSlice";

const Detail = ({data}) => {
    const id = useSelector(selectCheckboxId);
    const checked = data.filter(el => el["id"] === id)[0];
    return (
        <h1>{checked['subject']}</h1>
    )
};

export default Detail;