import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import NavBar from './components/Home/Navbar';
import Auth from './components/Auth/Auth';
import LootIndex from './components/MUI/LootIndex';
import Home from './components/MUI/Home';
import LogIn from './components/MUI/LogIn';
import SignUp from './components/MUI/SignUp';
import LootCreate from './components/MUI/LootCreate';
import AppNavBar from './components/MUI/modules/views/AppNavBar';
import Sitebar from './components/MUI/Sitebar';
import LootTable from './components/MUI/LootTable';
import LootEdit from './components/MUI/LootEdit';



function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <LootCreate token={sessionToken}/>
    : <Auth updateToken={updateToken}/>)
  }

  return (
    <BrowserRouter>
    <div className="App">
      {/* <Navigation /> */}
      <Switch>
      <Route path="/" exact> <Home clearToken={clearToken}/> </Route>
      <Route path="/index" exact> <LootIndex /> </Route>
      <Route path="/edit" exact> <LootEdit /> </Route>
      <Route path="/all" exact> <LootTable /> </Route>

      <Route path="/logout" exact> <Sitebar /> </Route>
      {/* <Sitebar clearToken={clearToken} /> */}
      {/* <AppNavBar clickLogout={clearToken} /> */}
      <Route path="user/login"> <LogIn updateToken={updateToken}/> </Route>
      <Route path="/user/signup"> <SignUp updateToken={updateToken}/> </Route>
      <Route path="/logloot"> <LootCreate token={sessionToken}/> </Route>
      {/* <Route path="/signup2" component={Signup} /> */}
      {/* <NavBar clearToken={clearToken}/> */}
      {protectedViews()}
      </Switch>
      </div>
      </BrowserRouter>
    
  );
}

export default App;
