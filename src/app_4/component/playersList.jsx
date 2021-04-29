// @flow
import * as React from 'react';


export const PlayersList = (props) => {
    const {playersList,onNameChange} = props;
    return (
        <ul className="list-group">
            {playersList.map(player =>
                <li className="list-group-item" key={player.id}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> P {player.id + 1} </span>
                        </div>
                        <input
                            onChange={event => onNameChange(event.target.value , player)}
                            className="form-control"
                        />
                    </div>


                </li>)}
        </ul>
    );
};