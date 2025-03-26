import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

import Page1 from './components/page1';
import Page2 from './components/page2';
import Travel1 from './components/travel1';
import Travel2 from './components/travel2';
import Sports1 from './components/sports1';
import Sports2 from './components/sports2';
import Music1 from './components/music1';
import Music2 from './components/music2';
import Tech1 from './components/tech1';
import Tech2 from './components/tech2';
import Design1 from './components/design1';
import Design2 from './components/design2';
import Photo1 from './components/photo1';
import Photo2 from './components/photo2';
import Game1 from './components/game1';
import Game2 from './components/game2';
import Domain1 from './components/domain1';
import Domain2 from './components/domain2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/travel1" element={<Travel1 />} />
        <Route path="/travel2" element={<Travel2 />} />
        <Route path="/sports1" element={<Sports1 />} />
        <Route path="/sports2" element={<Sports2 />} />
        <Route path="/music1" element={<Music1 />} />
        <Route path="/music2" element={<Music2 />} />
        <Route path="/tech1" element={<Tech1 />} />
        <Route path="/tech2" element={<Tech2 />} />
        <Route path="/design1" element={<Design1 />} />
        <Route path="/design2" element={<Design2 />} />
        <Route path="/photo1" element={<Photo1 />} />
        <Route path="/photo2" element={<Photo2 />} />
        <Route path="/game1" element={<Game1 />} />
        <Route path="/game2" element={<Game2 />} />
        <Route path="/domain1" element={<Domain1 />} />
        <Route path="/domain2" element={<Domain2 />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
