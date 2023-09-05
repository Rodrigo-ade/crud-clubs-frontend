import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';

import List from './pages/List';
import Team from './pages/Team';
import Form from './pages/Form';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <NavBar />
      <div className='p-3'>
        <Routes>
          <Route path='/' element={<List />} />
          <Route path='/clubs/:clubTla' element={<Team />} />
          <Route path='/form' element={<Form />} />
          <Route path='/edit/clubs/:clubTla' element={<Form />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
