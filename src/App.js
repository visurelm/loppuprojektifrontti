import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';
import { Grid } from 'react-bootstrap';
import './App.css';
import Home from './components/Home';
import Users from './components/Users';


const App = appProps => (
    <Router>
        <div className="App">
            <Grid>
                <switch>
                    <Route exact name="index" path="/" component={Home}/>
                    <Route path="/Users" component={Users}/>
                </switch>
            </Grid>
        </div>
    </Router>
)


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//           <Home/>
//       </div>
//     );
//   }
// }

export default App;
