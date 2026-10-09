import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import FormularioGuerrero from './components/FormularioGuerrero'
import TablaEjercito from './components/TablaEjercito'

function App() {
  const [tropas, setTropas] = useState([])

  const agregarGuerrero = (nuevo) => {
    setTropas([...tropas, nuevo])
  }

  const eliminarGuerrero = (id) => {
    setTropas(tropas.filter(guerrero => guerrero.id !== id))
  }

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#1e1e1e', mb: 4 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            Anillo Único
          </Typography>
          <Typography variant="subtitle1" sx={{ fontStyle: 'italic' }}>
            Uno para dominarlos a todos
          </Typography>
        </Toolbar>
      </AppBar>

      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-md-8 col-lg-6">
            <FormularioGuerrero onAgregar={agregarGuerrero} />
          </div>
        </div>

        <div className="row">
          <div className="col-12 mb-5">
            <TablaEjercito tropas={tropas} onEliminar={eliminarGuerrero} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
