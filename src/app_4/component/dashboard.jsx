import * as React from 'react';
import {Collapse} from "react-bootstrap";
import {Component} from "react";
import {PlayersList} from "./playersList";


class Dashboard extends Component{

    constructor(props) {
        super(props);
        this.state = {
            collapse : false
        }
    }



    handleCollapse = () => this.setState({collapse : !this.state.collapse}) ;


    render() {
        const {playersList,onAddPlayer,onNameChange} = this.props;
        const numberOfPlayers = playersList.length;

        return (
            <React.Fragment>
                <div className="input-group m-2">

                    <input
                        type="text"
                        className="form-control btn btn-outline-secondary"
                        value={numberOfPlayers ? numberOfPlayers : ''}
                        placeholder="Add players"
                        aria-describedby="button-addon4"
                        onClick={this.handleCollapse}
                        readOnly
                    />


                    <div className="input-group-append" id="button-addon4">
                        <button
                            className="btn btn-outline-secondary" aria-expanded={numberOfPlayers}
                            aria-controls="example-collapse-text"
                            type="button"
                            onClick={() => {
                                onAddPlayer('+')
                            }}
                        >
                            +
                        </button>

                        <button
                            onClick={() => onAddPlayer('-')}
                            className="btn btn-outline-secondary" type="button"> -
                        </button>
                    </div>
                </div>
                <Collapse in={this.state.collapse}>
                    <div id="example-collapse-text">
                        <PlayersList playersList={playersList} onNameChange={onNameChange}/>
                    </div>
                </Collapse>

                <button className="btn btn-outline-secondary m-2 w-75" type="button"> Start </button>

            </React.Fragment>



        );
    }

};

export default Dashboard;