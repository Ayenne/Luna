import React, { Component } from 'react'
import { ReactComponent as Star} from '../assets/star.svg';


import styled from "styled-components";

const Rating = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
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

export default Stars;