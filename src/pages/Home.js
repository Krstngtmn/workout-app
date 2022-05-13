import { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Background from '../components/Background';

import "../styles/Home.scss";

function Home() {
  return (
    <Fragment>
      <Header />
      <Background />
      <h1>This is the home page if you're logged in and have workouts. See all workouts created.</h1>
      <Footer />
    </Fragment>
  )
}

export default Home;