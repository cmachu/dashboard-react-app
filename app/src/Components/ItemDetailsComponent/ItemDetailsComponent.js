import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";

const ItemDetailsComponent = ({itemId}) => {
    const [itemDetails, setItemDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // TODO - render graphs with details
    // TODO - 5s auto refresh

    useEffect(() => {
        refreshDetails();
    }, []);

    const refreshDetails = () => {
        setIsLoading(true);
        axios.get('https://api.recruitment.4soft.tech/details/' + itemId)
            .then((response) => {
                setItemDetails(response.data);
                setIsLoading(false);
                console.log(response.data);
            });
    };

    if (isLoading) {
        return (<div className="item-details-component">Loading details...</div>)
    }

    return (
        <div className="item-details-component">
            <span>ID: {itemDetails.id}</span>
            <span>number_of_active_users: {itemDetails.number_of_active_users}</span>
            <span>number_of_users: {itemDetails.number_of_users}</span>
            <span>server_address: {itemDetails.server_address}</span>
            <br/><br/>
            <span onClick={refreshDetails}>REFRESH DETAILS</span>
        </div>
    );
};

export default ItemDetailsComponent;
