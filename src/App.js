import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Wrapper = styled.div`

  background-image: url(img/palmtrees.png);
  background-size: cover;
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;

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
    line-height: 25px;
  }

  a:hover {
    color: #ace2b8;

  }


  @media (max-width: 800px) {

.tagline {
  max-width: 350px;
  margin: 20px auto 0; 
}

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
    margin: 0 auto -50px;
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

class App extends Component {
  render() {
    return (
      <Wrapper>
        <MainContent>
          <Logo />
          <Band />
          <a className="tagline" href="https://www.instagram.com/parkletsband/">San Francisco's new Indie-Softrock</a>
          <Links>
            <a href="mailto:parkletsband.com">Booking</a>
            <a href="mailto:parkletsband.com">Management</a>
            <a href="mailto:parkletsband.com">Request Press Kit</a>
            <a href="mailto:parkletsband.com">Fans</a>
          
          </Links>
        </MainContent>
      </Wrapper>
    );
  }
}

export default App;
