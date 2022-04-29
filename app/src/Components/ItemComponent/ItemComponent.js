import React, {useContext, useEffect} from 'react';
import './ItemComponent.scss';
import ItemDetailsComponent from "../ItemDetailsComponent/ItemDetailsComponent";
import {ReactReduxContext} from "react-redux";
import {addToSelectedItems} from "../../Redux/Actions/AppActions";


const ItemComponent = ({item, isSimpleList = true}) => {
    const {store} = useContext(ReactReduxContext);

    const handleAddToDashboard = () => {
        store.dispatch(addToSelectedItems(item));
    };

    return (
        <div className="item-component">
            <span>Name:{item.name}</span>
            <span>Company:{item.company}</span>
            {isSimpleList && <span className="button" onClick={handleAddToDashboard}>Add to dashboard</span>}
            {!isSimpleList && <ItemDetailsComponent itemId={item.id}/>}
        </div>
    );
};

export default ItemComponent;
