import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

import Page1 from './components/page1';
import Page2 from './components/page2';
import Travel1 from './components/travel1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/travel1" element={<Travel1 />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
