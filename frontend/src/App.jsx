/* eslint-disable react/jsx-no-undef */
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CmsRoutes from "./routes/CmsRoutes";
import './styles/cms/style.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/cms" />} />
        <Route path="/cms/*" element={<CmsRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
