import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./components/AppRouter/AppRouter"
import { ToastContainer } from "react-toastify"

function App() {

  return (
    <BrowserRouter>
      <AppRouter/>
      <ToastContainer/>
    </BrowserRouter>

  )
}

export default App
