import React from 'react';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import TopBar from './components/topbar/TopBar';
import Single from './pages/home/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';



const App = () => {
  return (
  <Router>
      <TopBar />
      <Switch>
         <Route  exact path='/' component={Home} />
         <Route  exact path='/register' component={Register} />
         <Route  exact path='/login' component={Login} />
         <Route  exact path='/write' component={Write} />
         <Route  exact path='/settings' component={Settings} />
         <Route  exact path='/post/:postId' component={Single} />
      </Switch>
  </Router>  
  );
}

export default App;
