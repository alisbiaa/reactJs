import React, {Component} from 'react';
import './App.css';
import {NavBar} from "./components/navBar";
import Counters from "./components/counters";




class App extends Component {
    state = {
        counters : [
            { id : 1, value : 4 },
            { id : 2, value : 0 },
            { id : 3, value : 0 },
            { id : 4, value : 0 },
        ]
    }

    componentDidMount() {
        // perfect place to make ajax calls to get data from server
        // console.log('App - Mounted');
    }

    handleDelete = counterID => {
        // console.log('Event Handler Called', counterID);
        const counters = this.state.counters.filter(c => c.id !== counterID);
        this.setState({counters});
    };

    handleReset = () => {

        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters});

    };

    handleIncrement = counter =>{
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index].value++;
        this.setState({counters});
    }

    handleDecrement = counter => {
        if (counter.value > 0) {
            const counters = [...this.state.counters];
            const index = counters.indexOf(counter);
            counters[index].value--;
            this.setState({counters});
        }

    }

    render() {
        // console.log('App - Rendered');

        return (
            <React.Fragment>
                <NavBar totalCounters={this.state.counters.filter(c=> c.value > 0 ).length}/>
                <main className="container">
                    <Counters
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                        counters={this.state.counters}
                        onDecrement={this.handleDecrement}
                    />
                </main>
            </React.Fragment>

        );
    }
}

export default App;