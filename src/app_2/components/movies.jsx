import React, {Component} from 'react';
import {getMovies} from "../services/fakeMovieService";
import {getGenres} from "../services/fakeGenreService";
import MoviesTable from "./movieTable";
import Pagination from "./pagination";
import {paginate} from "../utils/paginate";
import _ from 'lodash';
import Filter from "./filter";

class Movies extends Component {

    constructor() {
        super();
        this.state = {
            movies: [],
            pageSize : 4 ,
            currentPage : 1,
            currentFilter : '0',
            filters : [],
            sortColumn : {path : 'title' , order: 'asc'}
        }
    }

    componentDidMount() {
        this.setState({
            movies: getMovies().map(m=> {
                m.like = 0 ;
                return m ;
            }),
            filters : getGenres(),
        })
    }


    handleDelete = movie =>{
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies})
    }
    handleLike = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index].like = !movies[index].like;
        this.setState({movies});
    }

    handlePageChange = page => {
        this.setState({currentPage: page})
    };

    handleFilter = genre => {
        this.setState({currentFilter : genre,currentPage : 1})
    }
    handleSort = sortColumn => {
        this.setState({sortColumn});
    }

    getPageData= () => {
        const {pageSize, currentPage,currentFilter, movies: allMovies,sortColumn} = this.state;

        const filtered = currentFilter !== '0' ? allMovies.filter(m => m.genre._id === currentFilter._id) : allMovies

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const movies = paginate(sorted,currentPage,pageSize);
        return {totalCount: filtered.length,data:movies}
    }


    render() {
        const {pageSize, currentPage, movies: allMovies,sortColumn} = this.state;
        const {length : count } = allMovies;
        if (count === 0 ) return <p>There are no movies in the database.</p>

        const {totalCount,data : movies} = this.getPageData()
        return (
            <div className="row">
                <div className="col-2">
                    <Filter
                        onFilter={this.handleFilter}
                        currentFilter={this.state.currentFilter}
                        items={this.state.filters}/>
                </div>
                <div className="col">
                    <p>Showing {totalCount} movies in the database</p>
                    <MoviesTable
                        movies={movies}
                        onDelete={this.handleDelete}
                        onLike={this.handleLike}
                        onSort={this.handleSort}
                        sortColumn={sortColumn}
                    />
                    <Pagination
                        itemsCount={totalCount}
                        pageSize={pageSize}
                        onPageChange={this.handlePageChange}
                        currentPage={currentPage}
                    />

                </div>

            </div>
        );
    }
}

export default Movies;