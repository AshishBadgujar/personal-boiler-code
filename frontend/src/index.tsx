import {
  Router,
  Route,
  hydrate,
  prerender as ssr,
  LocationProvider,
} from 'preact-iso';
import { useState } from 'preact/hooks';

import { Header } from './components/Header.jsx';
import { Home } from './pages/home.js';
import { NotFound } from './pages/_404.jsx';
import { About } from './pages/about.js';
import { DataContext } from './context/data.context.js';

export function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <DataContext.Provider value={{ tasks, setTasks }}>
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
    </DataContext.Provider>
  );
}

if (typeof window !== 'undefined') {
  hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
