import React, {Component} from 'react';
import PropTypes from 'prop-types';

class filter extends Component {
    render() {
        const {onFilter,currentFilter,items} = this.props;
        return (
            <ul className="list-group">
                <li key='all'
                    onClick={() => onFilter('0')}
                    className={currentFilter !== '0' ? "list-group-item" : "list-group-item active"}
                >
                    All Genres
                </li>

                {items.map( item =>
                    <li key={item._id}
                        className={currentFilter && currentFilter._id === item._id ? "list-group-item  active" : "list-group-item"}
                        onClick={() => onFilter(item)}
                    >
                        {item.name}
                    </li>
                 )}

            </ul>
        );
    }
}

filter.propTypes = {
    onFilter: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
};

export default filter;
