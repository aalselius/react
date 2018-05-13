import React, {Components } from 'react';
import About from './About.js';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';
import './App.css';

// const About = () => <h1>About</h1>;
const Home = () => <h1>Home</h1>;
const NotFound = () => <h1>404</h1>;

function RandomPath(props) {
    console.log(props.amtch.params.random);
    return(
        <div>
            <h1>{props.amtch.params.random}</h1>
        </div>
    );
}

function About() {
    return(
        <div>
            <h1>This is About</h1>
            <Link to="/">Home</Link>
        </div>
    );
}

class App extends Component {
    render() {
        return(
            <BrowserRouter>
            <div>
                <nav>  {/* Kan bryta ut till egen komponent. Se till att importera Link från react router dom */}
                <Link to="/">Home</Link>  {/* NavLink har fler egenskaper såsom active lyssnar på klassen .active */}
                <Link to="/about">About</Link>
            </nav>
                <Route exact path="/" component={Home}/> {/* man kan byta ut component mot render och skriva ut koden direkt mha render={()= =>(<h1>Hej</h1>)}*/}
                <Route path="/about" component={About} />
                <Route path="/:random" component={RandomPath} />
                <Route component={NotFound} /> {/* 404 */}
            </div>
            </BrowserRouter>
        );
    }
}

export default App;