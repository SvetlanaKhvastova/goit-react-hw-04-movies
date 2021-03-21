import React, { Component, lazy, Suspense } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import services from '../../services/services';
import Spinner from '../../components/Loader/Loader';
import s from './MovieDetailsPage.module.css';
import defaultPoster from '../../images/default_poster.jpg';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const Cast = lazy(() => import('../../components/Cast/Cast'));
const Reviews = lazy(() => import('../../components/Reviews/Reviews'));

class MovieDetailsPage extends Component {
  state = {
    movieDetails: {},
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    const { getMovieDetails } = services;

    getMovieDetails(movieId).then(movieDetails => {
      // console.log(movieDetails);
      this.setState({ movieDetails });
    });
  }

  comeBackBtnClick = () => {
    const { history, location } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }

    history.push('/');
  };

  render() {
    const {
      original_title,
      popularity,
      poster_path,
      title,
      vote_average,
      vote_count,
      overview,
      genres,
    } = this.state.movieDetails;

    const { comeBackBtnClick } = this;

    const { match, location } = this.props;
    return (
      <div className={s.details__page}>
        <div className={s.details__page__film}>
          <div>
            <img
              className={s.details__page__foto}
              alt={original_title}
              src={
                poster_path ? `${BASE_IMAGE_URL}${poster_path}` : defaultPoster
              }
            />
          </div>

          <div className={s.details__page__description}>
            <h2>{title}</h2>

            <h3>Vote: </h3>
            <p>{vote_average}</p>
            <h3>Votes: </h3>
            <p>{vote_count}</p>

            <h3>Popularity: </h3>
            <p>{popularity}</p>

            <h3>Original title: </h3>
            <p>{original_title}</p>

            <h3>About</h3>
            <p>{overview} </p>

            <h3>Genres</h3>
            <ul>
              {genres &&
                genres.map((genre, id) => {
                  return <li key={id}>{genre.name}</li>;
                })}
            </ul>

            <button
              type="buttton"
              onClick={comeBackBtnClick}
              className={s.button}
            >
              Go back
            </button>
          </div>
        </div>

        <div>
          <h3 className={s.information_block}>Information</h3>
          <ul className={s.information}>
            <li>
              <NavLink
                activeClassName={s.active}
                to={{
                  pathname: `${match.url}/cast`,
                  state: { ...location.state },
                }}
              >
                {' '}
                Casts
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName={s.active}
                to={{
                  pathname: `${match.url}/reviews`,
                  state: { ...location.state },
                }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>

        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route
              path={`${match.path}/cast`}
              render={prop => <Cast {...prop} />}
            />
            <Route
              path={`${match.path}/reviews`}
              render={prop => <Reviews {...prop} />}
            />
          </Switch>
        </Suspense>
      </div>
    );
  }
}
export default MovieDetailsPage;
