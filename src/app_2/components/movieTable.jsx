// @flow
import React, {Component} from 'react';
import {Table} from "./table";
import Like from "./like";


class MoviesTable extends Component {

    columns = [
        { path : 'title', label : 'Title'},
        { path : 'genre.name', label : 'Genre'},
        { path : 'numberInStock', label : 'Stock'},
        { path : 'dailyRentalRate', label : 'Rate'},
        { content : movie => <Like like={movie.like} onLike={() => this.props.onLike(movie)}/>},
        { content: movie => <button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-sm">Delete</button>},
    ];

    render() {
        const {movies,onSort,sortColumn} = this.props;
        return (

            <Table columns={this.columns} data={movies} sortColumn={sortColumn} onSort={onSort}/>
        );
    }
}

MoviesTable.propTypes = {};

export default MoviesTable;
