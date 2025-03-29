import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Main } from "./pages/Main"
import { BragDocument} from "./pages/BragDocument"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="issue/:id" element={<BragDocument />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
