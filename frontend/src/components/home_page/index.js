import React, {useState, useEffect} from "react";
import { connect } from "react-redux";

import { getBestRestaurants } from "../../store/actions/home"

import Stars from "../Stars";
import {HomeBanner, HomeBody} from "./style"

const Home = (props) => {

    const [search, setSearch] = useState("");
    
    useEffect(() => {
        props.dispatch(getBestRestaurants())
    }, []);

    const handleBestRestaurants = () => {
        console.log(props)
    }

    return(
        <>
        <HomeBanner>
            <form>
                <input 
                    type="text" 
                    placeholder="Search ..."
                    value={search}
                    onChange={(e) => setSearch(e.currentTarget.value)}
                />
                <button>Search</button>
            </form>
        </HomeBanner>
        <HomeBody>
            <h2>BEST RATED RESTAURANTS</h2>
            <section>
                <div className="card">
                    <div className="card-body">
                        <h4>RESTAURANT</h4>
                        <p>Adress</p>
                        <div className="card-rating">
                            <Stars stars={3}/>
                            <p>60</p>
                        </div>
                    </div>
                    <img className="fit-img" src="https://media-cdn.tripadvisor.com/media/photo-s/12/c1/c3/f5/restaurant-araz.jpg" alt="Restaurant" />
                </div>
                <div className="card">
                    <div className="card-body">
                        <h4>RESTAURANT</h4>
                        <p>Adress</p>
                        <div className="card-rating">
                            <Stars stars={3}/>
                            <p>60</p>
                        </div>
                    </div>
                    <img className="fit-img" src="https://media-cdn.tripadvisor.com/media/photo-s/12/c1/c3/f5/restaurant-araz.jpg" alt="Restaurant" />
                </div>
                <div className="card">
                    <div className="card-body">
                        <h4>RESTAURANT</h4>
                        <p>Adress</p>
                        <div className="card-rating">
                            <Stars stars={3}/>
                            <p>60</p>
                        </div>
                    </div>
                    <img className="fit-img" src="https://media-cdn.tripadvisor.com/media/photo-s/12/c1/c3/f5/restaurant-araz.jpg" alt="Restaurant" />
                </div>
                <div className="card">
                    <div className="card-body">
                        <h4>RESTAURANT</h4>
                        <p>Adress</p>
                        <div className="card-rating">
                            <Stars stars={3}/>
                            <p>60</p>
                        </div>
                    </div>
                    <img className="fit-img" src="https://media-cdn.tripadvisor.com/media/photo-s/12/c1/c3/f5/restaurant-araz.jpg" alt="Restaurant" />
                </div>
            </section>
        </HomeBody>
        </>
    )
}

const mapStateToProps = (state) => ({
    bestRestaurants: state.bestRestaurants
});

export default connect(mapStateToProps)(Home);