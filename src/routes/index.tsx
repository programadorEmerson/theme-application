import { Route, Switch } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import MainPage from 'pages/MainPage';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/main" component={MainPage} />
    </Switch>
  );
}

export default Routes;
