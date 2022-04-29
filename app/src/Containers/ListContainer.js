import React, {useContext, useEffect} from 'react';
import './AppContainer.scss';
import {ReactReduxContext, useSelector} from "react-redux";
import ItemComponent from "../Components/ItemComponent/ItemComponent";


const ListContainer = () => {
    const items = useSelector(({app}) => app.allItems);

    return (
        <div className="list-container">
            <h2>List of all items:</h2>
            {items.map((item, index) => {
                return <ItemComponent
                    key={"list-" + index}
                    item={item}
                    isSimpleList={true}
                />
            })}
        </div>
    );
};

export default ListContainer;
