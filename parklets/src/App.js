import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Wrapper = styled.div`

  background-color: #FAF3DD;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  color: #305077;

  .instagram {
    border: 2px solid #305077;
    padding: 10px 14px;
    border-radius: 4px;
    margin: 0 10px;
  }

  .instagram:hover {
    border: 2px solid #305077;
    background-color: #305077;
    padding: 10px 14px;
    border-radius: 4px;
  }

  a {
    text-decoration: none;
    color: #305077;
    transition: .2s ease;
  }

  a:hover {
    text-decoration: none;
    color: #a1dbaa;
  }

  h2 {
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 700;
  }

  .contact {
    display: flex;
    flex-wrap: wrap;
    max-width: 800px;
    justify-content: center;
    margin: 0 20px 50px 20px;
  }

  .chunk:hover {
    border-top: 2px solid #305077;
    border-bottom: 2px solid #305077;

  }

  .chunk {
    margin: 10px;
    padding: 10px 0;
    border-top: 2px solid rgba(255,255,255,0);
    border-bottom: 2px solid rgba(255,255,255,0);
    transition: .2s ease;
    min-width: 240px;
  }

`

const Logo = styled.div`

  height: 100px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(img/logo.svg);
  margin: 40px;

`

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Logo>
        </Logo>
        <div className="contact">
          <div className="chunk">
            <h2>General Questions</h2>
            <a href="mailto:contact@parkletsband.com">contact@parkletsband.com</a>
          </div>
          <div className="chunk">
            <h2>Booking Inquiries</h2>
            <a href="mailto:booking@parkletsband.com">booking@parkletsband.com</a>
          </div>
          <div className="chunk">
            <h2>Request Our Press Kit</h2>
            <a href="mailto:press@parkletsband.com">press@parkletsband.com</a>
          </div>
          <div className="chunk">
            <h2>Other Business</h2>
            <a href="mailto:management@parkletsband.com">management@parkletsband.com</a>
          </div>
          <div className="chunk">
            <h2>Let's Be Friends!</h2>
            <a href="mailto:management@parkletsband.com">fans@parkletsband.com</a>
          </div>
        </div>
        <div className="socialMedia">
          <a className="instagram" href="https://www.instagram.com/parkletsband/">Instagram</a>

          <a className="instagram" href="https://www.facebook.com/Parklets-303267193704426/">Facebook</a>        </div>

      </Wrapper>
    );
  }
}

export default App;
