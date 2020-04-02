import React, {useState} from "react";
import Stars from "../Stars";

import {HomeBanner, HomeBody} from "./style"

const Home = () => {

    const [search, setSearch] = useState("");
    
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
            <div class="card">
                <div class="card-body">
                    <h4>RESTAURANT</h4>
                    <p>Adress</p>
                    <div class="card-rating">
                        <Stars stars={3}/>
                        <p>60</p>
                    </div>
                        <img />
                </div>
            </div>
        </HomeBody>
        </>
    )
}

export default Home;