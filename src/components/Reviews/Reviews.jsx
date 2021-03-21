import React, { Component } from 'react';
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
    // console.log(reviews);

    return (
      <>
        <ul className={s.reviews}>
          {reviews.map(({ id, author, content }) => (
            <li key={id} className={s.reviews__link}>
              <h4>{author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Reviews;
