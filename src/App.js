import { Component, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import s from './App.css';

import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import links from './nav.json';

import Main from './components/Main/Main';

import Spinner from './components/Loader/Loader';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className={s.App}>
        <Header>
          <Navigation links={links} />
        </Header>

        <Main>
          <Suspense fallback={<Spinner />}>
            <Switch>
              {routes.map(route => {
                console.log(route);
                return <Route {...route} />;
              })}
            </Switch>
          </Suspense>
        </Main>
      </div>
    );
  }
}

export default App;
