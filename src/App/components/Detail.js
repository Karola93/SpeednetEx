import React, {useState} from "react";
import {useSelector} from "react-redux";
import {selectCheckboxChecked, selectCheckboxId} from "../store/checkboxSlice";
import {useCookies} from "react-cookie";

const Detail = ({data}) => {
    const id = useSelector(selectCheckboxId);
    const checkedEl = useSelector(selectCheckboxChecked)
    const [checkedElement, setCheckedElement] = useState({
        id: id,
        isChecked: checkedEl
    })
    const [cookies, setCookies] = useCookies();
    setCookies('checkedElement', checkedElement);

    const checked = data.filter(el => el["id"] === id)[0];
    return (<>
            <h1>{checked['subject']}</h1>
            {checked['snippet'] && <h2>{checked['snippet']}</h2>}
        </>
    )
};

export default Detail;