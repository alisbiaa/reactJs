import React, {Component} from 'react';
import './App.css';
import './services/fakeMovieService'
import Movies from "./components/movies";




class App extends Component {
    render() {
        return (
                <Movies />
        );
    }
}

export default App;