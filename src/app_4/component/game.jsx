import React, {Component} from 'react';
import Dashboard from "./dashboard";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playersList :[],
        }
    }

    handlePlayerAdd = operator => {
        const playersList = [...this.state.playersList];
        const numberOfPlayers = playersList.length;
        if (operator === '-') {
            if (numberOfPlayers === 0)  return;
            playersList.pop();
            this.setState({playersList});
        } else {
            if (numberOfPlayers === 10)  return;
            playersList.push({name:'', id: numberOfPlayers})
            this.setState({playersList});
        }
    }

    updatePlayerName = (name,player) => {
        const playersList = [...this.state.playersList];
        const index = playersList.indexOf(player);
        playersList[index].name = name;
        this.setState({playersList});
    }

    render() {
        const {playersList} = this.state;

        return (
            <div className='row border h-100'>
                <div className='col-3 my-auto'>
                    <Dashboard
                        playersList={playersList}
                        onNameChange={this.updatePlayerName}
                        onAddPlayer={this.handlePlayerAdd}
                        class
                    />
                </div>

            </div>
        );
    }
}


export default Game;
