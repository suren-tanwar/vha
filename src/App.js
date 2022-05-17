import React from "react"
import { createBrowserHistory } from "history";
import { Route,Switch,BrowserRouter as Router } from "react-router-dom";
import Getstarted from "./components/Getstarted"
import ChooseTemplate from "./components/ChooseTemplate"
import Responsiveheader from './components/headers/Responsiveheader'
import Header from './components/headers/Header'
import  HorizontalCard   from "./components/horizontalCard/HorizontalCard"
import BackHorizontalCard from './components/horizontalCard/BackHorizontalCard'
import VerticalCard from "./components/verticalCard/VerticalCard"
import BackVerticalCard from "./components/verticalCard/BackVerticalCard"
import CreateCard from "./responsive/CreateCard"

const history = createBrowserHistory() 

function App() {
  return (

    <div>
     <Router history={history}>
<div>
 {window.screen.width > 600 ? <Header /> : ""}
 <Switch>
 <Route path = "/" exact component={Getstarted}/> 
 <Route path = "/choose-template" exact component={ChooseTemplate}/> 
 <Route path = "/horizontal-card" exact component={HorizontalCard}/> 
 <Route path = "/horizontal-card-back" exact component={BackHorizontalCard}/>
 <Route path = "/vertical-card" exact component={VerticalCard}/> 
 <Route path = "/vertical-card-back" exact component={BackVerticalCard}/> 
 <Route path = "/create" exact component={CreateCard}/> 
 </Switch>
    </div>

    </Router>
    </div>
  );
}

export default App;

