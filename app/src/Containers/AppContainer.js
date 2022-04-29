import React, {useContext, useEffect} from 'react';
import DashboardContainer from "./DashboardContainer";
import ListContainer from "./ListContainer";
import './AppContainer.scss';
import {ReactReduxContext, useSelector} from "react-redux";
import axios from "axios";
import {setAllItems, setIsLoading} from "../Redux/Actions/AppActions";


const AppContainer = () => {
    const {store} = useContext(ReactReduxContext);
    const isLoading = useSelector(({app}) => app.isLoading);

    // TODO - save redux state to user storage, ability to keep selected items after page reload

    useEffect(() => {
        // TODO - create JS class with API calls
        axios.get('https://api.recruitment.4soft.tech/list')
            .then((response) => {
                store.dispatch(setIsLoading(false));
                store.dispatch(setAllItems(response.data));
            })
    }, []);

    console.log(isLoading);

    if (isLoading) {
        return <span>Loading...</span>
    }

    return (
        <div className="app-container">
            <DashboardContainer/>
            <ListContainer/>
        </div>
    );
};

export default AppContainer;
