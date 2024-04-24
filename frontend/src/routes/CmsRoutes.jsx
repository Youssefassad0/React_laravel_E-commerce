import { Route, Routes } from "react-router-dom";
import IndexDashboard from "../Pages/cms/dashboard";
import { CmsLayouts } from '../layouts/CmsLayouts';

const CmsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CmsLayouts />}>
        <Route index element={<IndexDashboard />} />
      </Route>
    </Routes>
  );
};

export default CmsRoutes;
