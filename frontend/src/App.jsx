import { BrowserRouter } from "react-router-dom"
import  CmsRoutes from "./routes/CmsRoutes"
import './styles/cms/style.module.scss'
function App() {
  return (
  <BrowserRouter>
  <CmsRoutes/>
  </BrowserRouter>
  )
}

export default App
