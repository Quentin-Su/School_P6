import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/Home';
import { About } from './pages/About';
import { Accommodation } from './pages/Accommodation';
import { Error } from './pages/Error';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='accommodation/:id' element={<Accommodation />} />
        <Route path='error' element={<Error />} />
      </Routes>
    </Layout>
  );
};