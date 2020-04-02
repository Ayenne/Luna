import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store/index';
import serverUrl from "../../server";
import RestaurantView from "./layouts/restaurant_layout"

class Restaurant extends Component{
    componentDidMount() { this.fetchReviews() }

    fetchReviews() {
        const base_address = serverUrl + 'reviews/restaurant/3/';
        let suffix = '';
        if (this.props.query.length > 0) suffix += "?search=" + this.props.query;

        fetch(base_address + suffix, {
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

const mapStateToProps = (state) => {
    console.log(state);
    return {
        token: state.token,
        reviews: state.reviews,
        query: state.query,
    }
};
const connection = connect(mapStateToProps);
const ConnectedRestaurant = connection(Restaurant);

export default ConnectedRestaurant;
