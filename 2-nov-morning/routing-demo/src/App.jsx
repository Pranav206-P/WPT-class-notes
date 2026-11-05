import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NavigationBar } from "./components/NavigationBar"
import { Home } from "./pages/Home"
import { AboutUs } from "./pages/AboutUs"
import { ContactUs } from "./pages/ContactUs"
import { UserDetails } from "./pages/UserDetails"
import { RegistrationForm } from "./pages/RegistrationForm"


function App() {

  return (
    <BrowserRouter>
      <div>
        <NavigationBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/user-details" element={<UserDetails/>} />
          <Route path="/register" element={<RegistrationForm/>} />
        </Routes>


      </div>
    </BrowserRouter>

  )
}

export default App
