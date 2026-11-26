import { TooltipProvider } from '@radix-ui/react-tooltip'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { Toaster } from 'sonner'
import { routerBasename } from './basename'
import { Shell } from './components/Shell'
import { ConceptsIndex } from './pages/ConceptsIndex'
import { LibrariesIndex } from './pages/LibrariesIndex'
import { LibraryPage } from './pages/LibraryPage'
import { MotionIndex } from './pages/MotionIndex'
import { NotFound } from './pages/NotFound'
import { TermPage } from './pages/TermPage'
import { TermsIndex } from './pages/TermsIndex'

export function App() {
  return (
    <BrowserRouter basename={routerBasename(import.meta.env.BASE_URL)}>
      <TooltipProvider>
        <Toaster theme="system" />
        <Shell>
          <Routes>
            <Route path="/" element={<Navigate to="/terms" replace />} />
            <Route path="/terms" element={<TermsIndex />} />
            <Route path="/concepts" element={<ConceptsIndex />} />
            <Route path="/motion" element={<MotionIndex />} />
            <Route path="/terms/:termId" element={<TermPage />} />
            <Route path="/libraries" element={<LibrariesIndex />} />
            <Route path="/libraries/:libraryId" element={<LibraryPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Shell>
      </TooltipProvider>
    </BrowserRouter>
  )
}
