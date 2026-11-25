import { BrowserRouter, Route, Routes } from 'react-router'
import { routerBasename } from './basename'
import { Shell } from './components/Shell'
import { Home } from './pages/Home'
import { LibraryPage } from './pages/LibraryPage'
import { NotFound } from './pages/NotFound'
import { TermPage } from './pages/TermPage'

export function App() {
  return (
    <BrowserRouter basename={routerBasename(import.meta.env.BASE_URL)}>
      <Shell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms/:termId" element={<TermPage />} />
          <Route path="/libraries/:libraryId" element={<LibraryPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Shell>
    </BrowserRouter>
  )
}
