import React, { Component } from 'react';
import PropTypes from 'prop-types';
import services from '../../services/services';
import s from './Cast.module.css';
import defaultPoster from '../../images/default_poster.jpg';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w300';

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
    // console.log(cast);

    return (
      <div>
        <ul className={s.cast}>
          {cast.map(({ id, name, character, profile_path }) => {
            return (
              <li key={id} className={s.cast__link}>
                <img
                  src={
                    profile_path
                      ? `${BASE_IMAGE_URL}${profile_path}`
                      : defaultPoster
                  }
                  alt={name}
                />
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
