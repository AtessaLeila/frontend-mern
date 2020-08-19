import React, { Component } from 'react';
import './App.css';
import wsj from './img/wsj.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from "./components/Home/Home";
import Articles from "./components/Articles";
import ShowIndex from "./components/ShowIndex/ShowIndex";
import Create from "./components/Create";
import Edit from "./components/Edit/Edit";




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    fetch('https://calm-reaches-73008.herokuapp.com/article')
      .then(response => response.json())
      .then(articles => {
        console.log(articles)

      })
  }

  render() {


    return (
      <div className="App">
        {/* <div class="info">
          <p>DJIA 26154.28 <span className="red">0.62%</span></p>
          <p>Nasdaq 10632.58 <span className="green">0.46%</span></p>
          <p>U.S.10Yr 1/32 Yield <span className="green">0.548%</span></p>
          <p className="oil">Crude Oil 39.97 <span className="red">0%</span></p>
          <p className="euro">Euro 1.1817 <span className="red">0.25%</span></p>
        </div> */}
        <div className="wsj-img"><img className="wsj" src={wsj}></img></div>
        <Router>
          <div>
            <div className="">
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <Link className="link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="link" to="/article">Articles</Link>
                </li>
                <li className="nav-item">
                  <Link className="link" to="/create">Create</Link>
                </li>
              </ul>
              <hr></hr>
            </div>
            <Route path="/" exact component={Home} />
            <Route path="/article" component={Articles} />
            <Route path="/index/:id" component={ShowIndex} />
            <Route path="/create" component={Create} />
            <Route path="/update/:id" component={Edit} />
            <Route path="/delete/:id" component={ShowIndex} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
