import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (e) => {
    let movies = this.state.movies;
    movies.splice(e, 1);
    console.log(movies);
    this.setState({movies: movies} );

  };

  render() {
    return (
        <div>
        <h2>{this.state.movies.length === 0 && "There are no movies in the database"}</h2>
        <h2>{this.state.movies.length > 0 && `Showing ${this.state.movies.length} in the database`}</h2>
        {
            this.renderTable()
        
        }
        </div>
      
    );
  }

  renderTable = () => {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map((m) => (
            <tr key={this.state.movies.indexOf(m)}>
              <th scope="row">{this.state.movies.indexOf(m)}</th>
              <td>{m.title}</td>
              <td>{m.genre.name}</td>
              <td>{m.numberInStock}</td>
              <td>{m.dailyRentalRate}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => this.handleDelete(this.state.movies.indexOf(m))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
}

export default Movies;
