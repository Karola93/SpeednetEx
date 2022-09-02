import React from "react";
import {useNavigate} from "react-router-dom";
import './List.css';

const List = ({data}) => {
    const navigate = useNavigate();

    const checkboxChangeHandler = (e) => {
        e.preventDefault();
        navigate('/detail');
    }

    return (
        <ul className="list">
            {
                data.map( (el) => {
                    return <li key={el['id']}>
                        <label>
                            <input key={el['id']} type="checkbox" onClick={checkboxChangeHandler}/> {el['from']}
                        </label>
                    </li>
                })
            }
        </ul>
    )
};

export default List;