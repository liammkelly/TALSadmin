import React from "react"
import { Route, Switch, NavLink } from 'react-router-dom'
import ClassForm from "./components/ClassForm"
import ClassList from "./components/ClassList"
import ScheduleForm from "./components/ScheduleForm"

const App = () => (
  <>
    <div class="nav">
    <ul>
      <li><NavLink to="add-class">Add a class</NavLink></li>
      <li><NavLink to="schedule-class">Schedule a class</NavLink></li>
      <li><NavLink to="view-classes">View classes</NavLink></li>
    </ul>
    </div>
    
    <Switch>
      <Route path="/add-class" component={ClassForm} />
      <Route path="/schedule-class" component={ScheduleForm} />
      <Route path="/view-classes" component={ClassList} />
    </Switch>

    <div style={{width:"100%",textAlign:"center"}}><hr/>[ <a href="/">exit admin</a> ]</div>
  </>
)

export default App