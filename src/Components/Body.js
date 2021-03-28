import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import React from 'react'
import Sport from './Pages/Sport'
import General from "./Pages/General"
import Health from "./Pages/Health"
import Science from "./Pages/Science"
import Technology from "./Pages/Technology"
import ArticlePage from './Pages/ArticlePage'
import "./Body.css"


function Body (props){

    return(
        <div >
            <Router>
                <Switch>
                    <Route path="/" exact component={General} />
                    <Route path="/Health" exact component={Health} />
                    <Route path="/sport" exact component={Sport} />
                    <Route path="/Science" exact component={Science} />
                    <Route path="/technology" exact component={Technology} />
                    <Route path="/:id" component={ArticlePage} />
                    
                </Switch>
            </Router>       
        </div>
    )
}
export default Body;