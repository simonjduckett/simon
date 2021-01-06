import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/style.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Topbar } from './components/topbar';
import { Home } from './components/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
//import Rellax from 'rellax';
import { Menu } from './components/menu';
import { Projects } from './components/projects';
import { About } from './components/About';
import { PageNotFound } from './components/PageNotFound';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstload: true
    }

    this.logfirstload = this.logfirstload.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount(){
      //var rellax = new Rellax('.rellax');
      AOS.init();
      
    }

  toggleMenu() {
    let menu = document.getElementById('menu');
    let ham = document.getElementById('ham');

    menu.classList.toggle("show");
    ham.classList.toggle("change");
  }

  logfirstload(){
    this.setState({ firstload: false })
  }

  render() {
    var mobile = window.matchMedia("(max-width: 600px)")
    return (
      <div className="App">
        <HashRouter>
          <Topbar toggleMenu={this.toggleMenu} firstload={this.state.firstload} />
          <Menu toggleMenu={this.toggleMenu} />
          <Switch>
            <Route exact path='/' render={() => { return <Home logfirstload={this.logfirstload} firstload={this.state.firstload} mobile={mobile} /> }} />
            <Route path='/projects' render={() => { return <Projects /> }} />
            <Route path='/about' render={() => { return <About /> }} />
            <Route component={PageNotFound} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;