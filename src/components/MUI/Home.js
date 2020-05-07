import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import Contact from './modules/views/Contact';
import AppFooter from './modules/views/AppFooter';
import HomePage from './modules/views/HomePage';
import AppInfo from './modules/views/AppInfo';
import AppNavBar from './modules/views/AppNavBar';

function Index(props) {
  return (
    <React.Fragment>
      <AppNavBar clearToken={props.clearToken}/>
      <HomePage />
      <AppInfo />
      <Contact />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);