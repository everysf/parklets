import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import anime from 'animejs';

const Wrapper = styled.div`

// background: #424242;
  display: flex;
  min-height: 100vh;
  width: 100vw;
  justify-content: center;

  @media (max-width: 800px) {
    padding-top: 20px;
  }

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    color: lightblue;
  }

`

const Newspaper= styled.div`

  border: 1px solid white;
  margin: 50px 20px;
  width: 100%;
  max-width: 800px;
  min-height: 400px;
  color: white;
  padding: 40px;
  
  h1, h2, h3, h4 {
    font-family: 'Oswald';
    text-transform: uppercase;
    letter-spacing: 5px;
    font-style: italic;
  }

  h1 {
    font-size: 30px;
    background-color: white;
    margin: -40px -40px 40px;
    color: black;
    padding: 40px;
  }
  hr {
    margin: 50px -40px 50px -20px;
  }
  img {
    max-width: 100%;
    margin: 5px 0;
  }
  h4 {
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 20px;
    margin-bottom: 10px;
    width: auto;
    line-height: 30px;
  }

  a {
    text-align: center;
    font-style: italic;
  }

  p {
    line-height: 25px;
    font-family: 'Libre Baskerville';
    padding-left: 20px;
    margin-bottom: 40px;

    @media (max-width: 400px){
      padding-left: 0;
    }

  }

  .borderWhite {
    border: 1px solid white;
  }


  @media (max-width: 400px){
    margin: 20px;
    h1 {
      font-size: 20px;
      padding-left: 20px;
    }
    h4 {
      margin-left: -20px;
    }
    img {
    }
  }

`

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Newspaper>
          <h1>Parklets Press Kit</h1>
          <h4>Band Photo</h4>
          <img src="img/thebandweb.jpg"></img>
          <hr />
          <h4>Music</h4>
          <p>
          <a href="https://open.spotify.com/album/2XyjyhQOWDezLi5gwFusIW?si=5Xj4sY38RMODwF88DLTl_g">Spotify</a><br/>  
          <a href="https://itunes.apple.com/us/album/get-down-single/1462665856">Apple Music</a> <br/>  <a href="https://www.youtube.com/watch?v=dOaptPsXAPs">Youtube</a>
          </p>
          <hr />
          <h4>Social Media Links</h4><p>
            <a href="https://www.instagram.com/parkletsband/">Instagram</a>
                     {/* //    <a href="twitter.com">Twitter</a>        //     <a href="facebook.com">Facebook</a> */}
          </p>
          <hr/>
          <h4>Contact</h4><p>
            <a href="mailto:mgmt@parkletsband.com">Management</a><br/>
            <a href="mailto:mgmt@parkletsband.com">Press</a><br/>
            <a href="mailto:mgmt@parkletsband.com">Booking</a>
          </p>
          <hr/>
          <h4>Website</h4><p>
            <a href="https://parkletsband.com/">Parkletsband.com</a><br/>
          </p>
          <hr/>
          <h4>Bio</h4>
          <p>Parklets seem to be living the young and fast San Francisco music lifestyle. The band’s music is authentic to who they are–the 5 early 20’s California-natives were drawn to the city and met organically while having fun with friends from SF State and USF. Singer/keyboardist Kendall Kincaid and lead guitarist Kevin Macaraeg have spearheaded the project by writing songs and organizing shenanigans. “Honestly, we just mess around after work and write down whatever sounds good, and sometimes it sticks. We’re trying not to take it too seriously, but hope that people know we mean business.” -Kevin Macaraeg. With help from producer and musician Henry Chadwick, Parklets are not afraid to explore the sonic boundaries. Their creative arrangements and unique sounds push Indie Softrock into 2019.</p>
          <h4>Recent News</h4>
          <p>Parklets are hitting the San Francisco music scene strong with their new single: “Get Down”. The band is entering their exponential growth phase. They have pieced together a tight team of musicians, producers, and music business connections that are fueling up the rocketship for launch. After much anticipation, this single marks their first public release which has already gained traction in the San Francisco college communities of SF State and USF. “Get Down”, is an anthem dedicated to the ups and downs of growing up and working hard to make it in the city. With an entire laptop full of demos, they plan to release 2 more singles throughout the summer of 2019, “Joey” and “Maybe”, and their EP in August. </p>
          <h4>Related Artists</h4>
          <p>The Marias, No Vacation, Wallows, Hunny, San Cisco, Hippo Campus, Vampire Weekend, Alvvays, The Cranberries, The Walters, Caroline Rose</p>
          <h4>Members</h4>
          <p>Kendal Kincaid, VOX/Keys<br/>
          Kevin Macaraeg, Lead Guitar<br/>
          Zayn Mufti, Drums<br/>
          Erik Betancourt, Guitar<br/>
          Emilie Francis, Bass
          </p>
          <h4>Production, Mixing, Mastering</h4>
          <p>
          <a href="http://www.henrychadwick.net/">Henry Chadwick</a>, (Henry Chadwick, Compound Recordings)<br/>
          <a href="http://www.cianriordan.com/">Cian Riordan</a>, (The Wombats, Foxygen, Wavves, Julian Lage)
          </p>
          <h4>Genre(s)</h4>
          <p>Dreampop, Indie-Softrock, Alternative</p>
          <h4>Hometown</h4>
          <p>San Francisco, CA</p>
          <h4>Social Media Links</h4><p>
            <a href="https://www.instagram.com/
            parkletsband/">Instagram</a>         //    <a href="twitter.com">Twitter</a>        //     <a href="facebook.com">Facebook</a>
          </p>
          <h4>Date Formed</h4>
          <p>March 2019</p>
          <h4>Up Coming Releases</h4>
          <p>
            "Get Down", May 14th, 2019<br/>
            "Joey", June 18th, 2019<br/>
            "Maybe", July 16th, 2019<br/>
            EP Release (Title to be determined), August 19th, 2019
          </p>
          <hr />
          <h4>LOGOS</h4>
          <br/>
          <h4>PNG</h4>
          <img src="img/parkletslogobox-01.png"></img>
          <img src="img/parkletslogobox-02.png"></img>
          <img src="img/parkletslogobox-03.png"></img>
          <img className="borderWhite" src="img/parkletslogosquare-01.png"></img>
          <img className="borderWhite" src="img/parkletslogosquare-02.png"></img>
          <img className="borderWhite" src="img/parkletslogosquare-03.png"></img>
          <img className="borderWhite" src="img/parkletslogosquare-04.png"></img>
          <h4>SVG</h4>
          <img src="img/parkletslogobox-01.svg"></img>
          <img src="img/parkletslogobox-02.svg"></img>
          <img src="img/parkletslogobox-03.svg"></img>
          <h4>EPS</h4>
          <a href="mailto:press@parkletsband.com">Please email for .eps formats</a>
          <hr />
          <h4>Get Down Single</h4>
          <img src="img/getdownsingle.jpg"></img>
          <h4>Artwork</h4>
          <img src="img/parkletsillustrations-01.jpg"></img>
          <img src="img/parkletsillustrations-02.jpg"></img>
          <img src="img/parkletsillustrations-03.jpg"></img>
        </Newspaper>
      </Wrapper>
    );
  }
}

export default Home;
