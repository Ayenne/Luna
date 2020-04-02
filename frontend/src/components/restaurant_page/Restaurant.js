import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store/index';
import serverUrl from "../../server";
import RestaurantView from "./layouts/restaurant_layout"



class Restaurant extends Component{
    componentDidMount() { this.fetchReviews() }

    fetchReviews() {
        const base_address = serverUrl + 'reviews/';

        fetch(base_address, {
            method: 'GET',
            headers: new Headers({'Authorization': 'Bearer ' + this.props.token})
        })
        .then((response) => response.json())
        .then((results) => {
            store.dispatch({type: "FETCH_REVIEWS", payload: results})
        });
    }

   render() {
        return (
            <>
                <RestaurantView />
            </>

        )
    }
}


export default Restaurant;
