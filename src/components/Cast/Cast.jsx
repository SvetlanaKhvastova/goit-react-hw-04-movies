import React, { Component } from 'react';
import PropTypes from 'prop-types';
import services from '../../services/services';
import s from './Cast.module.css';

class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    const { getMovieCredits } = services;

    getMovieCredits(movieId).then(cast => {
      this.setState({ cast });
    });
  }

  render() {
    const { cast } = this.state;

    return (
      <div>
        <ul>
          {cast.map(({ id, name, character, profile_path }) => {
            return (
              <li key={id}>
                <img src={profile_path} alt={name} />
                <h4>{name}</h4>
                <p>{character}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

Cast.propTypes = {
  moviesId: PropTypes.string,
};

export default Cast;
