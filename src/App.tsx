import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { routes } from './configs/routes.ts';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {
          routes.map((route, index) => {
            return (
              <Route
                key={index + 1}
                path={route.path}
                element={<route.layout><route.component /></route.layout>}
              />
            )
          })
        }
      </Routes>
    </BrowserRouter>
  )
}
