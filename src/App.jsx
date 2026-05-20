import { BrowserRouter as Router, Routes, Route } from 'react-router' // Importa el router y los componentes necesarios para definir rutas.

import Home from "./pages/Home"
import Login from './pages/Login'
import Products from "./pages/Products"

function App() {
  return(
    <>
      <Router>
        <Routes>
          {/* Ruta para la página de login. */}
          <Route path="/" element={<Login />} />
          {/* Ruta para la página principal, solo accesible después de iniciar sesión. */}
          <Route path="/home" element={<Home />} />
          {/* Ruta para la página de productos. */}
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
