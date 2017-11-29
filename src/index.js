import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ThemeProvider } from 'react-jss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
import theme from './theme';
import registerServiceWorker from './registerServiceWorker';

import Layout from './layout';
import Home from './home';
import RecipeList from './recipe-list';
import RecipeSingle from './recipe-single';
import './index.css';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/recipes" component={RecipeList} />
            <Route exact path="/recipes/all" component={RecipeList} />
            <Route exact path="/recipes/:recipeId" component={RecipeSingle} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  </ReduxProvider>,
  document.getElementById('root')
);

registerServiceWorker();
