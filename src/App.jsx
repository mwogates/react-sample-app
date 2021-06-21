import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import '@assets/styles/app.scss';

// HOC
import Layout from './components/layouts/Layout';

// Pages
import Home from './pages/Home';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>React Sample App</title>
      </Helmet>
      <Router>
        <Switch>
          <Layout exact path="/" component={Home} />
        </Switch>
      </Router>
    </HelmetProvider>
  );
}

export default App;
