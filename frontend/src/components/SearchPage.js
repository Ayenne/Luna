import React, {Component} from "react";
import NavigationBar from "./NavigationBar";
import styled from "styled-components";
import Stars from "./Stars";
import Img from '../assets/restaurant.jpeg';
import { Link  } from "react-router-dom";


const Tile = styled(Link)`
    background: white;
    border: 1px solid #ddd;
    border-top: 8px solid #e47d31;
    margin: 10px;
    width: 271px;
    color: #4c4c4c;
    text-decoration: none;
    img {
        width: 271px;
        height: 284px;
    }
    article {
        padding: 10px;
    }
    h3, h4 {
        font-weight: normal;
    }
    h3 {
        font-size: 20px;
    }
    h4 {
        font-size: 16px;
        padding-top: 4px;
    }
`;
const Inline = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Restaurants = styled.div`
    padding-top: 100px;
    display: flex;
    width: 1180px;
    flex-wrap: wrap;
`;
const Page = styled.div`
    display: flex;
    justify-content: center;
`;

class Restaurant extends Component {
    render() {
        return <>
            <Tile to="/restaurant/3">
                <article>
                    <h3>The Bite</h3>
                    <h4>Address</h4>
                    <Inline>
                        <Stars stars={3}/>
                        <span>68</span>
                    </Inline>
                </article>
                <img src={Img}></img>
            </Tile>
        </>
    }
};

const Search = () => (
    <>
        <NavigationBar location="search"/>
        <Page>
        <Restaurants>
            <Restaurant></Restaurant>
            <Restaurant></Restaurant>
            <Restaurant></Restaurant>
            <Restaurant></Restaurant>
            <Restaurant></Restaurant>
            <Restaurant></Restaurant>
            <Restaurant></Restaurant>
            <Restaurant></Restaurant>
        </Restaurants>
        </Page>
    </>
);

export default Search;
