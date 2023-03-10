import './styles.css';
import './sketchyStyles.css';
import Main from './pages/Main';
import ViewProduct from './pages/ViewProduct';
import { Routes, Route, Navigate } from 'react-router-dom';
import EditProduct from './pages/EditProduct';

const App = () => {
  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<Main />} />
        <Route path="/products/:id" element={<ViewProduct />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
      </Routes>
    </div>
  );
};

export default App;
