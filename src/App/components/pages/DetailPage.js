import React from "react";

const DetailPage = ({data}) => {
    const checked = data.filter(el => el["is_unread"])[0];
    return (
        <h1>{checked['subject']}</h1>
    );
};

export default DetailPage;