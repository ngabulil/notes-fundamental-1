import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import AddNotes from './pages/AddNotes';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import ArchiveNotes from './pages/ArchiveNotes';

function App() {
  return (
   <React.Fragment>    <header>
   <h1><Link to='/'>MeNotes</Link></h1>
   <Navigation />
 </header>
 <div className='div-main'>
    <Routes>
       <Route path='/' element={<HomePage />} />
       <Route path='/archive' element={<ArchiveNotes />} />
       <Route path='/add' element={<AddNotes />} />
       <Route path='/notes/:id' element={<DetailPage />} />
    </Routes>
 </div></React.Fragment>
  );
}

export default App;
