import { BrowserRouter, Route, Routes } from 'react-router'
import { routerBasename } from './basename'
import { Shell } from './components/Shell'
import { Home } from './pages/Home'

export function App() {
  return (
    <BrowserRouter basename={routerBasename(import.meta.env.BASE_URL)}>
      <Shell>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Shell>
    </BrowserRouter>
  )
}
