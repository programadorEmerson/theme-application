import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/Main';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
}

export default Routes;
