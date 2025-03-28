import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/app.sass'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import Detail from './Detail.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
