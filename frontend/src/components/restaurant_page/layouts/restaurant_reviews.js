import React, { Component } from 'react'
import Stars from "../../Stars";
import styled from "styled-components";
import Avatar from '../../../assets/avatar.jpg';


const Filter = styled.div`    
    form {
        width: 650px;
        display: flex;
        padding: 20px 0px;
        justify-content: space-between;
        margin: 0;

            
        input {
            width: 510px;
            height: 40px;
            border-radius: 3px;
            border: solid 1px #ebebeb;
            background-color: #ffffff;
            outline: none;
            font-size: 16px;
        }
        
    } 
        button {
            width: 120px;          
            height: 40px;
            border-radius: 28px;
            font-size: 16px;
            text-align: center;
            color: #ffffff;
            background-color: #e47d31;
            border: 0px;
            outline: none;
            cursor: pointer;
        }
`;
const ReviewWrapper = styled.div`
    height: auto;
    width: 650px;
    background-color: white;
    border-radius: 3px;
`;
const Header = styled.div`
    height: 66px;
    border-bottom: solid 1px #ebebeb;
    display: flex;
    
    img {
        width: 66px;   
        height: 66px;
    }
    h2 {
        display: flex;
        flex-grow: 1;
        justify-content: flex-end;
        align-items: center;
        font-size: 14px;
        font-weight: 300;
        color: #000000;
        padding: 10px;
    }
`;
const Author = styled.div`
    p {
        font-size: 20px;
        font-weight: bold;
        color: #e47d31;
        padding: 10px 10px 0px 10px;
    }
    p + p {
        font-size: 14px;
        font-weight: bold;
        color: #4c4c4c;
        padding: 4px 10px;
    }
`;
const Score = styled.div`
    padding: 10px;
`;
const Comment = styled.div`
    p {
        padding: 15px;
        font-size: 16px;
        font-weight: 300;
        color: #000000;
    }
`;
const Footer = styled.div`
    display: flex;
    padding: 10px;
    p {
        display: flex;
        flex-grow: 1; 
        justify-content: flex-end;
        align-items: center;
        font-size: 16px;  
        color: #e47d31;   
    }
`;
const ActionButton = styled.button`
    background-color: rgba(145, 145, 145, 0.6);
    font-size: 16px;
    color: white;
    text-decoration: none;
    border: none;
    outline: none;
    width: 124px;
    height: 33px;
    font-weight: 300;
    font-family: Roboto;
    cursor: pointer;
    &:hover {
        background: #e98539;
    }
`;

const LikeButton = styled(ActionButton)`
    border-top-left-radius: 28px;
    border-bottom-left-radius: 28px;
    img{
        width: 17px;
        height: 21px;
        background-color: #ffffff;
    }
`;
const CommentButton = styled(ActionButton)`
    border-top-right-radius: 28px;
    border-bottom-right-radius: 28px;
    margin-left: 1px;
`;

class RestaurantReviews extends Component {
    render() {
        return (
            <>
                <Filter>
                    <form>
                        <input
                            placeholder="Filter list..."
                            type="text"
                        />
                        <button>FILTER</button>
                    </form>
                </Filter>
                <ReviewWrapper>
                    <Header>
                        <img src = {Avatar}/>
                        <Author>
                            <p>Greta Ż.</p>
                            <p>23 Reviews in total</p>
                        </Author>
                        <Score>
                            <Stars stars={5}/>
                        </Score>
                        <h2>03.03.2020 12:30</h2>
                    </Header>
                    <Comment>
                        <p>This location at the Bahnhofstrasse is quite friendly and easily located across the street
                            from the train station. The people there seem to be quite good and helpful in their service.
                        </p>
                    </Comment>
                    <Footer>
                        <LikeButton>Like 23</LikeButton>
                        <CommentButton>Comment 4</CommentButton>
                        <p>View all comments</p>
                    </Footer>
                </ReviewWrapper>
            </>
        );
    }
}

export default RestaurantReviews;