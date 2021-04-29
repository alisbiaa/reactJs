import React, {Component} from 'react';
import {Route,Link} from 'react-router-dom';
import App1 from './app_1/App';
import App2 from './app_2/App';
import App3 from './app_3/App';
import App4 from './app_4/App';
import App5 from './app_5/App';

class App extends Component {
    state = {
        app : 4,
    }
    renderApp = n =>{
        this.setState({app: n});
    }
    render() {
        const appRendered = this.state.app;

        return(
            <React.Fragment>
                <div className='row'>
                    <div className="col-2 container ml-2">
                        <ul className="list-group">
                            <Link to="/app1">
                                <li className={appRendered === 1 ? 'list-group-item active' : 'list-group-item'} onClick={() => this.renderApp(1)}>
                                     Go to app 1
                                </li>
                            </Link>
                            <Link to="/app2">
                                <li className={appRendered === 2 ? 'list-group-item active' : 'list-group-item'} onClick={() => this.renderApp(2)}>
                                     Go to app 2
                                </li>
                            </Link>
                            <Link to="/app3">
                                <li className={appRendered === 3 ? 'list-group-item active' : 'list-group-item'} onClick={() => this.renderApp(3)}>
                                     Go to app 3
                                </li>
                            </Link>
                            <Link to="/app4">
                                <li className={appRendered === 4 ? 'list-group-item active' : 'list-group-item'} onClick={() => this.renderApp(4)}>
                                    Go to app 4
                                </li>
                            </Link>
                            <Link to="/app5">
                                <li className={appRendered === 5 ? 'list-group-item active' : 'list-group-item'} onClick={() => this.renderApp(5)}>
                                     Go to app 5
                                </li>
                            </Link>
                        </ul>
                    </div>

                    <div className="col mr-2">
                        <Route path="/app1" component={App1} />
                        <Route path="/app2" component={App2} />
                        <Route path="/app3" component={App3} />
                        <Route path="/app4" component={App4} />
                        <Route path="/app5" component={App5} />
                    </div>
                </div>
            </React.Fragment>

        )

    }
}


export default App;
