import { Route, Routes } from "react-router-dom";
import IndexDashboard from "../Pages/cms/dashboard";
import { CmsLayouts } from '../layouts/CmsLayouts';
import IndexLogin from "../Pages/cms/login";
import { CmsPrivate } from "./CmsPrivate";

const CmsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CmsLayouts />}>
        <Route index element={<CmsPrivate>
          <IndexDashboard/>
        </CmsPrivate>} />
        <Route path="login" element={<IndexLogin />} />
      </Route>
    </Routes>
  );
};

export default CmsRoutes;
