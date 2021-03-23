import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import SingleProduct from './components/SingleProduct/SingleProduct';
import { Provider } from 'react-redux'
import store from './Redux/store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
      <Navigation />
      <Switch>
          <Route exact path="/single-product" component={SingleProduct} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
      
    </div>
    </Provider>
  );
}

export default App;
