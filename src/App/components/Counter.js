import React from "react";
import {useSelector} from "react-redux";
import {selectCheckboxChecked} from "../store/checkboxSlice";
import './Counter.css';

const Counter = () => {
    const checked = useSelector(selectCheckboxChecked);
    return (
        checked && <p className="counter">You have checked 1 item.</p>
    )
};

export default Counter;

