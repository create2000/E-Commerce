import React from "react";

function HomeLayout () {
    const numberOfItems = 100;
    const items = [];

    for (let i = 1; i <= numberOfItems; i++) {
        items.push(<li key={i}>Home Layout {i}</li>);
    }
    
    return(
        <ul>
        {items}
    </ul>
);

}

export default HomeLayout