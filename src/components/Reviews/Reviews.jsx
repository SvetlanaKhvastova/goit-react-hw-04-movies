import React, { Component } from 'react';
import PropTypes from 'prop-types';
import services from '../../services/services';
import s from './Reviews.module.css';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    const { getMovieReviews } = services;

    getMovieReviews(movieId).then(reviews => {
      this.setState({ reviews });
    });
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h4>{author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

Reviews.propTypes = {
  moviesId: PropTypes.string,
};

export default Reviews;
