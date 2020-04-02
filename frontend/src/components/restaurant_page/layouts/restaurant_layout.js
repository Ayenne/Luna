import React, { Component } from 'react'
import styled from 'styled-components';
import Laderach from '../../../assets/laderach-banner.jpg';
import { ReactComponent as Clock} from '../../../assets/clock.svg';
import { ReactComponent as Money} from '../../../assets/money.svg';
import Stars from "../../Stars";
import RestaurantReviews from "./restaurant_reviews";


const BannerPhoto = styled.div`
    height: 496px;
    margin-top: 72px;
    background-image: url(${Laderach});
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;
const Banner = styled.div`
    height: 204px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    
`;
const CenteredContent = styled.div`
    width: 1440px;
    margin: 0 auto;
`;
const About = styled.div`
    height: 200px;
    width: 420px;
    padding: 50px;
    h2 {
        font-family: Roboto;
        letter-spacing: 1px;
        margin-bottom: 5px;
        width: 412px;
        height: 36px;
        font-size: 30px;
        font-weight: bold;
        color: white;
    }
    h3 {
        font-family: Roboto;
        margin-bottom: 5px;
        width: 233px;
        height: 29px;
        font-size: 24px;
        font-weight: 300;
        text-align: center;
        color: white;
    }
`;

const ReviewCount = styled.p`
    font-family: Roboto;
    margin-left: 10px;
    font-size: 20px;
    font-weight: 300;
    color: white;
`;

const Content = styled.div`
    display: flex;
`;

const Reviews = styled.div`
    width: 60%;
    height: 5000px;
`;
const Info = styled.ul`
    width: 40%;
    background-color: #f5f5f5;
    li {
        display: flex;
        align-items: center;
        font-size: 20px;
        font-weight: 300;
        svg {
          padding: 15px 20px 15px 15px;
        }
    }
    li + li {
        border-top: solid 1px #d8d8d8;
    }
`;

const Inline = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const ButtonContainer = styled.div`
    height: 40px;
    padding: 29px;
    display: flex;
    justify-content: space-between;

    button {
        width: 200px;
        height: 39px;
        border-radius: 28px;
        font-size: 16px;
        text-align: center;
        color: white;
        background-color: #e47d31;
        border: none;
        cursor: pointer;
        outline: none;
        &:hover {
            background: #e98539;
        }
    }
`;


class RestaurantView extends Component{
    render(){
        console.log(this.props.restaurant);
        return(
            <>
                    <BannerPhoto>
                        <Banner>
                        <CenteredContent>
                            <About>
                                <h2>{this.props.restaurant.name}</h2>
                                <h3>{this.props.restaurant.category.name}</h3>
                                <Inline>
                                    <Stars stars={3}/>
                                    <ReviewCount>4 reviews </ReviewCount>
                                </Inline>
                            </About>
                        </CenteredContent>
                        </Banner>
                    </BannerPhoto>
                    <CenteredContent>
                        <Content>
                            <Reviews>
                                <RestaurantReviews/>
                                <Reviews />
                            </Reviews>
                            <Info>
                                <li>
                                    <Clock/>
                                    <p>Monday - Friday 9:00 am - 8:00 pm</p>
                                </li>
                                <li>
                                    <Money/>
                                    <p>Price level: $$$</p>
                                </li>
                                <ButtonContainer>
                                    <button>WRITE A REVIEW</button>
                                    <button>EDIT DATA</button>
                                </ButtonContainer>
                            </Info>
                        </Content>
                    </CenteredContent>

            </>
        )
    }
}


export default RestaurantView;
