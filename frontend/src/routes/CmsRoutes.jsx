import { Route, Routes } from "react-router-dom";
import IndexDashboard from "../Pages/cms/dashboard";
import {CmsLayouts} from '../layouts/CmsLayouts'
const CmsRoutes=()=><Routes>
    {/* <Route  path="/cms" element={<IndexDashboard/>} /> */}
    <Route path="/cms" element={<CmsLayouts/>} > 
        <Route index element={<IndexDashboard/>}  />
    </Route>
</Routes>

export default CmsRoutes;