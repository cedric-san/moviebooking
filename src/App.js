import React from 'react';
import './style.css';
import NavBar from './NavBar';
import Cards from './Cards';
import SubNavBar from './SubNavBar/SubNavBar';
import Footer from './Footer/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Error from './SubNavBar/Error';
import Theatres from './Theatres/Theatres';
import Events from './Events/Events';
import Form from './Form/Form';

import Banners from './Banners/Banners';
export default function App() {
  const [form, updateForm] = useState(false);

  const formChange = () => {
    updateForm(!form);
  };

  const navbarhead = {
    title: 'My Movie Booking',
  };
  const isBanner = false;
  return (
    <div>
      <BrowserRouter>
        <NavBar title={navbarhead} formChange={formChange} />
        <SubNavBar />
        {isBanner ? <Banners /> : null}
        <Switch>
          <Route path="/form" component={Form} />
          <Route exact path="/movie" component={Cards} />
          <Route exact path="/theatres" component={Theatres} />
          <Route exact path="/event" component={Events} />
          <Route path="/" component={Cards} />
        </Switch>
        <Footer title="footer menu" />
      </BrowserRouter>
    </div>
  );
}
