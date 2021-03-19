import React, { Component, lazy, Suspense } from 'react';
import { NavLink, Route, Switch } from 'react-router';
import services from '../../services/services';
import Spinner from '../../components/Loader/Loader';

const Cast = lazy(() => import('../../components/Cast/Cast'));
const Reviews = lazy(() => import('../../components/Reviews/Reviews'));

class MovieDetailsPage extends Component {
  state = {
    movieDetails: {},
  };

  componentDidMount() {
    const { moviesId } = this.props.match.params;
    // console.log(moviesId);
    const { getMovieDetails } = services;

    getMovieDetails(moviesId).then(movieDetails => {
      this.setState({ movieDetails });
      console.log(movieDetails);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div>
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
