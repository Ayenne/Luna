import React, { Component } from 'react'
import styled from 'styled-components';
import Laderach from '../../../assets/laderach-banner.jpg';
import { ReactComponent as Star} from '../../../assets/star.svg';
import { ReactComponent as Clock} from '../../../assets/clock.svg';
import { ReactComponent as Money} from '../../../assets/money.svg';



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

const Rating = styled.div`
    height: 40px;
    display: flex;
`;

const StarIcon = styled(Star)`
    width: 30px;
    height: 30px;
    opacity: 0.6;
    filter: brightness(0) saturate(100%) invert(100%) sepia(96%) saturate(15%) hue-rotate(212deg) brightness(104%) contrast(104%);
    ${props => props.lit && `
        filter: brightness(0) saturate(100%) invert(80%) sepia(40%) saturate(867%) hue-rotate(4deg) brightness(109%) contrast(95%);
        opacity: 1;
    `}
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
        justify-content: center;
    }
`;
const OpeningTime = styled.div`
    display: flex;
    height: 58px;
    border-bottom: solid 1px #d8d8d8;
    width: 100%;
    p {
        margin-top: 22px;
        margin-left: 25px;
        width: 414px;
        height: 24px;
        font-size: 20px;
        font-weight: 300;
        color: black;
    }
`;
const ClockIcon = styled(Clock)`
    margin-left: 20px;
    margin-top: 20px;
`;

const PriceInfo = styled.div`
    display: flex;
    width: 414px;
    height: 24px;
    p {
        font-family: Roboto;
        margin-top: 13px;
        margin-left: 23px;
        font-size: 20px;
        font-weight: 300;
        color: black;
    }
`;

const MoneyIcon = styled(Money)`
    margin-left: 17px;
    margin-top: 10px;
`;

const Inline = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

class Stars extends Component {
    render() {
        return (
            <Rating>
                <StarIcon lit={this.props.stars >= 1}/>
                <StarIcon lit={this.props.stars >= 2}/>
                <StarIcon lit={this.props.stars >= 3}/>
                <StarIcon lit={this.props.stars >= 4}/>
                <StarIcon lit={this.props.stars >= 5}/>
            </Rating>
        );
    }
}

class RestaurantView extends Component{
    render(){
        return(
            <>
                    <BannerPhoto>
                        <Banner>
                        <CenteredContent>
                            <About>
                                <h2>Laderach Chocolates</h2>
                                <h3>Chocolatiers & Shops</h3>
                                <Inline>
                                    <Stars stars={3}/>
                                    <ReviewCount>0 reviews </ReviewCount>
                                </Inline>
                            </About>
                        </CenteredContent>
                        </Banner>
                    </BannerPhoto>
                    <CenteredContent>
                        <Content>
                            <Reviews></Reviews>
                            <Info>
                                <li>
                                    <ClockIcon/>
                                    <p>Monday-Friday 9:00 am - 8:00 pm</p>
                                </li>
                                <li>
                                    <MoneyIcon/>
                                    <p>Price level: $$$</p>
                                </li>
                            </Info>
                        </Content>
                    </CenteredContent>
            </>
        )
    }
}

export default RestaurantView
