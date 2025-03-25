import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

import Page1 from './components/page1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
