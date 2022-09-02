import React from "react";

const Detail = ({data}) => {
    const checked = data.filter(el => el["id"])[0];
    return (
        <h1>{checked['subject']}</h1>
    )
};

export default Detail;