import React, {useContext, useEffect} from 'react';
import './AppContainer.scss';
import {ReactReduxContext, useSelector} from "react-redux";
import ItemComponent from "../Components/ItemComponent/ItemComponent";


const DashboardContainer = () => {
    const selectedItems = useSelector(({app}) => app.selectedItems);

    return (
        <div className="list-container">
            <h2>List of your items:</h2>
            {selectedItems && selectedItems.map((item) => {
                return <ItemComponent
                    key={item.id}
                    item={item}
                    isSimpleList={false}
                />
            })}
        </div>
    );
};

export default DashboardContainer;
