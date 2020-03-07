import React from 'react';
import { Switch } from 'react-router-dom';

/** Couriers */
import CouriersEdit from '~/pages/Couriers/CouriersEdit';
import CouriersList from '~/pages/Couriers/CouriersList';
import CouriersNew from '~/pages/Couriers/CouriersNew';
/** Orders */
import OrderEdit from '~/pages/Orders/OrderEdit';
import OrderList from '~/pages/Orders/OrderList';
import OrderNew from '~/pages/Orders/OrderNew';
/** Problems */
import ProblemsList from '~/pages/Problems/ProblemsList';
/** Recipients */
import RecipientEdit from '~/pages/Recipients/RecipientEdit';
import RecipientsList from '~/pages/Recipients/RecipientList';
import RecipientNew from '~/pages/Recipients/RecipientNew';
import SignIn from '~/pages/SignIn';

import Route from './Routes';

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      {/** Orders */}
      <Route path="/orders" exact component={OrderList} isPrivate />
      <Route path="/orders/add" exact component={OrderNew} isPrivate />
      <Route path="/orders/edit/:id" exact component={OrderEdit} isPrivate />
      {/** Problems */}
      <Route path="/problems" exact component={ProblemsList} isPrivate />
      {/** Couriers */}
      <Route path="/couriers" exact component={CouriersList} isPrivate />
      <Route path="/couriers/add" exact component={CouriersNew} isPrivate />
      <Route
        path="/couriers/edit/:id"
        exact
        component={CouriersEdit}
        isPrivate
      />
      {/** Recipients */}
      <Route path="/recipients" exact component={RecipientsList} isPrivate />
      <Route path="/recipients/add" exact component={RecipientNew} isPrivate />
      <Route
        path="/recipients/edit/:id"
        exact
        component={RecipientEdit}
        isPrivate
      />
    </Switch>
  );
}
