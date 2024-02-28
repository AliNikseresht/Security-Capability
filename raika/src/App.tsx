import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import { mainRoutes } from './routes/routes';
import Layout from './layout/Layout';

function App() {
  return (
    <Router>
      <Routes>
        {mainRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<Layout>{route.element}</Layout>}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
