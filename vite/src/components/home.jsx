import React, { Component } from 'react';
import Navbar from '../inside_components/navbar';
import MiddleSec from '../inside_components/middleSec';
import ContentIn from '../inside_components/contentIn';
import Contentss from '../inside_components/Contentss';

export class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <MiddleSec />
      
      <Contentss/>

      </>
    );
  }
}

export default Home;

