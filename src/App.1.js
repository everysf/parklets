import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Wrapper = styled.div`

  background-color: #1d2427;

`

// const Wrapper = styled.div`

//   background-image: url(img/thebandweb.jpg);
//   background-position: center;
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   flex-direction: column;
//   background-size: cover;
//   justify-content: center;
//   align-items: center;
//   background-repeat: no-repeat;
//   color: #305077;

//   @media (max-width: 970px) {
//     display: block;    
//     height: auto;
//     min-height: 100vh;
//     background-color: #1d2427;;
//     width: 100vw;
//     background-size: contain;
//   }

//   .socialMedia {
//     padding: 30px 0;
//     display: flex;
//     justify-content: center;
//     @media (max-width: 970px) {
  
//       background-color: #f8e682;
//     }
//   }

//   .instagram {
//     border: 2px solid #305077;
//     padding: 10px 14px;
//     border-radius: 4px;
//     margin: 0 10px;
//   }

//   .instagram:hover {
//     border: 2px solid #305077;
//     background-color: #305077;
//     padding: 10px 14px;
//     border-radius: 4px;
//   }

//   a {
//     text-decoration: none;
//     color: #305077;
//     transition: .2s ease;
//   }

//   a:hover {
//     text-decoration: none;
//     color: #a1dbaa;
//   }

//   h2 {
//     font-size: 20px;
//     margin-bottom: 10px;
//     font-weight: 700;
//   }

//   .contact {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     background-color: #f8e682;
//     padding: 0 5px;
//     width: 100vw;
//     position: fixed;
//     bottom: 0;
//     text-align: center;

//     @media (max-width: 970px) {
//       position: relative;
//     }
//   }

//   .chunk {
//     margin: 5px 10px;
//     padding: 10px 0;
//     width: 250px;
//     border-top: 2px solid rgba(255,255,255,0);
//     border-bottom: 2px solid rgba(255,255,255,0);
//     transition: .2s ease;
//   }

// `

// const Logo = styled.div`

//   height: 200px;
//   width: 600px;
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: contain;
//   background-image: url(img/logo.svg);
//   margin: 40px;

//   @media (max-width: 970px) {
//     width: 100vw;
//     height: 300px;
//     background-size: cover;
//     margin: 0;  
//     background-image: url(img/thebandweb.jpg);
//   }

// `

// const BottomLiner = styled.div`

//   width: 100vw;
//   height: 50px;
//   background-color: #1d2427;
//   position: fixed;
//   bottom: 0;
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   color: white;

//   a {
//     color: white;
//   }

//   @media (max-width: 970px) {
//     height: auto;
//   }

// `

// const LogoCont = styled.div`

//   margin: 0 20px;
//   position: fixed;
//   left: 0;
//   height: 100vh;
//   width: 350px;
//   background-image: url(img/parkletslogobox.svg);
//   z-index: 100;
//   background-position: center;

//   @media (max-width: 970px) {
//     position: fixed;
//     margin: 40px 0 0 0;
//     height: 140px;
//     width: 100vw;
//     background-repeat: no-repeat;
//     background-size: contain;
//   }


// `

// const Links = styled.div`

//   padding: 0 10px;

//   a {
//     padding: 0 10px;
//     font-style: italic;
//   }

//   @media (max-width: 970px) {
//     display: flex;
//     flex-direction: column;
//     width: 100%;

//     a {

//       width: 100%;
//       padding: 10px 0;
//       text-align: center;
//     }
//     padding: 10px 0;
//   }

// `

class App extends Component {
  render() {
    return (
      <Wrapper>
        {/* <LogoCont>
        </LogoCont>
        <BottomLiner className="bottomLiner">
          <Links>
            <a href="https://www.instagram.com/parkletsband/">San Francisco's New Indie-Softrock</a>
            <a href="mailto:booking@parkletsband.com">Booking</a>
            <a href="mailto:press@parkletsband.com">Request Press Kit</a>
            <a href="mailto:mgmt@parkletsband.com">Management</a>
            <a href="mailto:fans@parkletsband.com">Fans</a>
          </Links>
        </BottomLiner> */}

        {/* <Logo>
        </Logo>
        <div className="socialMedia">
          <a className="instagram" href="https://www.instagram.com/parkletsband/">Instagram</a>
          <a className="instagram" href="https://www.facebook.com/Parklets-303267193704426/">Facebook</a>        
        </div>
        <div className="contact">
          <div className="chunk">
            <a href="mailto:contact@parkletsband.com">contact@parkletsband.com</a>
          </div>
          <div className="chunk">
            <a href="mailto:booking@parkletsband.com">booking@parkletsband.com</a>
          </div>
          <div className="chunk">
            <a href="mailto:press@parkletsband.com">press@parkletsband.com</a>
          </div>
          <div className="chunk">
            <a href="mailto:management@parkletsband.com">management@parkletsband.com</a>
          </div>
          <div className="chunk">
            <a href="mailto:management@parkletsband.com">fans@parkletsband.com</a>
          </div>
        </div> */}

      </Wrapper>
    );
  }
}

export default App;
