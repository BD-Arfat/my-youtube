import logo from './logo.svg';
import './App.css';

import { AppContext } from './Context/ContextApi';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Headers from './Components/Headers';
import Feed from './Components/Feed';
import SearchResult from './Components/SearchResult';
import VideoDetails from './Components/VideoDetails';

function App() {
  return (
    <AppContext>
      <BrowserRouter>
      <div className='flex flex-col h-full'>
        <Headers/>
        <Routes>
          <Route path='/' exact element={<Feed/>}/>
          <Route path='/searchResult/:searchQuery' element={<SearchResult/>}/>
          <Route path='/video/:id' element={<VideoDetails/>}/>
        </Routes>

      </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
