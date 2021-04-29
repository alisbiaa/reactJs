import React, {Component} from 'react';

class Counter extends Component {


    render() {
        const {onIncrement,counter,onDelete,onDecrement} = this.props
        return (
            <div className="row">
                <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
                <button
                    onClick={() => {onIncrement(counter)}}
                    className='btn btn-secondary btn-sm m-2 col-1'
                >
                    +
                </button>

                <button
                    onClick={() => {onDecrement(counter)}}
                    className={this.getButtonClasses()}
                >
                    -
                </button>

                <button
                    onClick={() => onDelete(counter.id)}
                    className="btn col-1 btn-danger btn-sm m-2">
                    x
                </button>


            </div>

        );
    }

    getBadgeClasses() {
        const {counter} = this.props

        let classes = "badge col-1 m-2 badge-";
        classes += counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    getButtonClasses() {
        const {counter} = this.props
        let classes = "btn col-1 btn-secondary btn-sm m-2 ";
        classes += counter.value === 0 ? 'disabled' : '';
        return classes;
    }

    formatCount() {
        const {counter} = this.props

        const {value} = counter;
        return value === 0 ? "Zero" : value;
    }
}


export default Counter;