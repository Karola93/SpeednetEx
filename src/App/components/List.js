import React from "react";

const List = ({data}) => {
    return (
        <ul>
            {
                data.map( (el) => {
                    return <li key={el['id']}>
                        <label>
                            <input type="checkbox"/> {el['from']}
                        </label>
                    </li>
                })
            }
        </ul>
    )
};

export default List;