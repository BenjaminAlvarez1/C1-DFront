import { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import TextField from '@mui/material/TextField'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import Slider from '@mui/material/Slider'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function FormularioGuerrero({ onAgregar }) {
  const [nombre, setNombre] = useState('')
  const [tipo, setTipo] = useState('Orco')
  const [nivel, setNivel] = useState(50)
  const [rango, setRango] = useState('Capitán')
  const [amenaza, setAmenaza] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()

    const nuevoGuerrero = {
      id: Date.now() + Math.random(),
      nombre,
      tipo,
      nivel,
      rango,
      amenaza
    }

    onAgregar(nuevoGuerrero)

    setNombre('')
    setTipo('Orco')
    setNivel(50)
    setRango('Capitán')
    setAmenaza(1)
  }

  return (
    <Card elevation={3}>
      <CardHeader
        title="Ingresar Guerrero"
        sx={{ backgroundColor: '#f0f0f0', borderBottom: '1px solid #ddd' }}
      />
      <CardContent>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          <TextField
            label="Nombre del Guerrero"
            variant="outlined"
            fullWidth
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
              Tipo de Guerrero
            </Typography>
            <RadioGroup
              row
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
            >
              <FormControlLabel value="Orco" control={<Radio color="error" />} label="Orco" />
              <FormControlLabel value="Uruk" control={<Radio color="secondary" />} label="Uruk" />
            </RadioGroup>
          </Box>

          <Box>
            <Typography variant="body2" color="text.secondary">
              Nivel de Combate ({nivel})
            </Typography>
            <Slider
              value={nivel}
              min={1}
              max={100}
              step={1}
              valueLabelDisplay="auto"
              onChange={(e, val) => setNivel(val)}
            />
          </Box>

          <FormControl fullWidth>
            <InputLabel id="label-rango">Categoría / Rango</InputLabel>
            <Select
              labelId="label-rango"
              value={rango}
              label="Categoría / Rango"
              onChange={(e) => setRango(e.target.value)}
            >
              <MenuItem value="Capitán">Capitán</MenuItem>
              <MenuItem value="Berserker">Berserker</MenuItem>
              <MenuItem value="Explorador">Explorador</MenuItem>
              <MenuItem value="Asediador">Asediador</MenuItem>
            </Select>
          </FormControl>

          <Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
              Nivel de Amenaza / Furia
            </Typography>
            <Rating
              value={amenaza}
              min={1}
              max={5}
              onChange={(e, val) => {
                if (val && val >= 1) {
                  setAmenaza(val)
                }
              }}
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 1 }}
          >
            Registrar Guerrero
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default FormularioGuerrero
