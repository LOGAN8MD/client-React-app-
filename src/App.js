import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserForm from './pages/UserForm';
import DisplayUser from './pages/DisplayUser';

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/display" element={<DisplayUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
