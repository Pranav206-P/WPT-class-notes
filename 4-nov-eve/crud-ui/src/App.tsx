import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./components/AppRouter/AppRouter"
import { ToastContainer } from "react-toastify"
import { GlobalStyles, StyledEngineProvider } from "@mui/material"

function App() {

  return (
    <StyledEngineProvider enableCssLayer>

    <GlobalStyles styles="@layer theme, base, mui, components, utilities;"></GlobalStyles>
      <BrowserRouter>
        <AppRouter />
        <ToastContainer />
      </BrowserRouter>
    </StyledEngineProvider>
  )
}

export default App
