// App.js
import React, { lazy, Suspense } from 'react';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
        <About />
      </Suspense>
    </div>
  );
};

export default App;

