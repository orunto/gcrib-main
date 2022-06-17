import React from 'react';
// import { useEffect } from 'react';

import { Top, ProfilePic, CalendarButton, ReadsButton, VideosButton, NavBar } from './components';
import {  HomeReads } from './containers';

import './App.css';
import './css/Home.css';

// const API_URL = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=13c2c347572f41dc86b098f810d1d381';

const App = () => {
  // const ReadsSearch = async(title) => {
  //   const response = await fetch(`${API_URL}&s=${title}`);
  //   const data = await response.json();

  //   console.log(data);
  //   console.log("Columbia");
  // }

  // useEffect(() => {
  //   ReadsSearch();
  // }, []);

  return (
    <section>
      <Top />
      <ProfilePic />
      <CalendarButton />
      <ReadsButton />
      <VideosButton />
      <HomeReads />
      <NavBar />
    </section>
  );
}

export default App;