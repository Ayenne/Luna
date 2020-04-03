import React, {useState, useEffect} from "react";
import { connect } from "react-redux";

import { getBestRestaurants } from "../../store/actions/home"

import Stars from "../Stars";
import {HomeBanner, HomeBody} from "./style"
import NavigationBar from "../NavigationBar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LoginForm from "../LoginForm";
import Registration from "../RegistrationPage";
import Restaurant from "../restaurant_page/Restaurant";
import UserProfilePage from "../UserProfilePage";
import Footer from "../Footer";

const Home = (props) => {

    const [search, setSearch] = useState("");
    
    useEffect(() => {
        props.dispatch(getBestRestaurants())
    }, []);

    const searchRequest = (e) => {
        e.preventDefault();
        window.location.href = `/search/?search=${search}`
    }

    const handleBestRestaurants = () => {
        let bestRestaurants = props.bestRestaurants[0];

        return (
            bestRestaurants.map(restaurant => {
                
                return (
                    <div className="card" key={restaurant.id}>
                        <div className="card-body">
                            <h4>{restaurant.name}</h4>
                            <p>{restaurant.street}, {restaurant.zip} {restaurant.city}, {restaurant.country}</p>
                            <div className="card-rating">
                                <Stars stars={restaurant.avg_rating.rating}/>
                                <p>{restaurant.total_of_reviews}</p>
                            </div>
                        </div>
                        {
                            restaurant.image ? <img className="fit-img" src={restaurant.image} alt={restaurant.name} /> : <img className="fit-img" src="https://media-cdn.tripadvisor.com/media/photo-s/12/c1/c3/f5/restaurant-araz.jpg" alt="Restaurant" />
                        }
                        
                    </div>
                )
            })
        )
        
    }

    return(
        <>
        <NavigationBar location="home"/>
        <HomeBanner>
            <form onSubmit={searchRequest}>
                <input 
                    type="text" 
                    placeholder="Search ..."
                    value={search}
                    onChange={(e) => setSearch(e.currentTarget.value)}
                />
                <button onClick={searchRequest}>Search</button>
            </form>
        </HomeBanner>
        <HomeBody>
            <h2>BEST RATED RESTAURANTS</h2>
            <section>
                { 
                    (props.bestRestaurants.length > 0) ? handleBestRestaurants() : <img src="https://static.impression.co.uk/2014/05/loading1.gif" />
                }
            </section>
        </HomeBody>
        </>
    )
}

const mapStateToProps = (state) => ({
    bestRestaurants: state.bestRestaurants
});

export default connect(mapStateToProps)(Home);