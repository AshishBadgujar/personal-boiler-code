import {
  LocationProvider,
  Router,
  Route,
  hydrate,
  prerender as ssr,
} from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Home } from './pages/home.js';
import { NotFound } from './pages/_404.jsx';
import { About } from './pages/about.js';

export function App() {
  return (
    <LocationProvider>
      <main className="container">
        <Header />
        <Router>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route default component={NotFound} />
        </Router>
      </main>
    </LocationProvider>
  );
}

if (typeof window !== 'undefined') {
  hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
