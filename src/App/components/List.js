import React from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import './List.css';
import {handleCheck, handleCheckboxId} from "../store/checkboxSlice";

const List = ({data}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const checkboxChangeHandler = (e) => {
        e.preventDefault();
        dispatch(handleCheck());
        navigate('/detail');
    };

    const getIdHandler = (id) => {
        checkboxChangeHandler()
        dispatch(handleCheckboxId(id))
    };

    return (
        <ul className="list">
            {
                data.map( (el) => {
                    return <li key={el['id']}>
                        <label>
                            <input key={el['id']} type="checkbox" onClick={() => getIdHandler(el['id'])}/> {el['from']}
                        </label>
                    </li>
                })
            }
        </ul>
    )
};

export default List;