import styled from 'styled-components'
import Home from '../../assets/home_meat.jpg';


export const HomeBanner = styled.section`
    margin-top: 72px;
    height: 38vh;
    width: 100vw;
    background: url(${Home});
    background-repeat: no-repeat;
    background-position: center center; 
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
        width: 80%;
        height: 100%;
        display: flex;
        justify-content:center;
        flex-wrap:nowrap;
        align-items: center;

        input {
            width: 38%;
            height: 10%;
            border: 0px;
            border-radius:5px;
            padding:1%;
        }

        input::placeholder { 
            color: #000;
            font-size: 1.2em;
        }

        button {
          width: 200px;
          height: 55px;
          border-radius: 28px;
          font-family: Helvetica;
          font-size: 20px;
          text-align: center;
          color: #ffffff;
          background-color: #e47d31;
          border: 0px;
          margin-left: 3%;
      }

    }
`;

export const HomeBody = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        border-bottom: solid 3px #e47d31;
        height: 40px;
        padding: 0 10px;
        font-weight: bold;
        text-transform: uppercase;
        color: #4c4c4c;
        font-size: 24px;
        margin-top: 30px;
        margin-bottom: 75px; 
    }

    .card {
        width: 25%;
        background: #fff;
        border-top: solid 8px #e47d31;

        .card-body {
            padding: 5%;

            h4 {
                font-weight: bold;
                text-transform: uppercase;
            }

            .card-rating {
                display: flex;
                justify-content: space-between;
                margin: 1% 5%;

                p {
                    margin-top: 3.5%;
                }
            }

        }
    }
`;