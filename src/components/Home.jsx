import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import anime from 'animejs';

const Wrapper = styled.div`

  background-image: url(img/palmtrees.png);
  background-size: cover;
  display: flex;
  min-height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;

  @media (max-width: 800px) {
    padding-top: 20px;
  }

  font-family: "Oswald"

`

const MainContent = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    color: white;
    font-size: 20px;
    font-style: italic;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 7px;
    margin-top: 20px;
    text-decoration: none;
    line-height: 30px;
  }

  a:hover {
    color: #ace2b8;

  }

  @media (max-width: 800px) {

    .tagline {

      max-width: 350px;
      margin: 20px auto 0; 

    }

    padding-bottom: 50px;

  }

`

const Logo = styled.div`  

  width: 700px;
  background-image: url(img/parkletslogobox.svg);
  height: 170px;
  background-size: contain;
  background-position: center;
  z-index: 100;
  margin: 0 auto -75px;
  background-repeat: no-repeat;

  @media (max-width: 800px) {

    width: 100vw;
    height: 120px;
    margin: 0 auto 0px;
    background-position: center;

  }

  .mainsvgfill {
    fill: black;
  }

`

const Band = styled.div`

  width: 800px;
  height: 500px;
  background-image: url(img/thebandweb.jpg);
  background-size: cover;
  background-position: center;

  @media (max-width: 800px) {

    width: 100vw;
    height: 300px;
    background-size: contain;
    background-repeat: no-repeat;

  }

`

const Links = styled.div`

  display: flex;
  justify-content: center;
  a {
    letter-spacing: 1px;
    padding: 0 13px;
    font-size: 15px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }

`

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <MainContent>
          <Logo></Logo>
          <Band />
          <a className="tagline" href="https://open.spotify.com/track/02EvAEh9x1JCjctT8NPgIV?si=C2g4QhvpQtGZNg5YQflwzQ">"Get Down"<br></br>the debut single is out now</a>
          <Links>
            <a href="mailto:booking@parkletsband.com">Booking</a>
            <a href="mailto:mgmt@parkletsband.com">Management</a>
            <a href="/presskit">Request Press Kit</a>
            <a href="mailto:fans@parkletsband.com">Fans</a>
          </Links>
        </MainContent>
      </Wrapper>
    );
  }
}

export default Home;
