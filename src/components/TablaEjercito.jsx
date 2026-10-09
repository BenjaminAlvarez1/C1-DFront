import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

function TablaEjercito({ tropas, onEliminar }) {
  return (
    <TableContainer component={Paper} elevation={3}>
      <Typography variant="h6" sx={{ p: 2, backgroundColor: '#f0f0f0', borderBottom: '1px solid #ddd' }}>
        Despliegue del Ejército
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Nombre del Guerrero</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Tipo de Guerrero</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Categoría / Rango</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Nivel</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Clasificación</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Acción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tropas.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} align="center" sx={{ py: 3, color: 'text.secondary' }}>
                No hay tropas registradas en el ejército.
              </TableCell>
            </TableRow>
          ) : (
            tropas.map((guerrero) => (
              <TableRow key={guerrero.id}>
                <TableCell>{guerrero.nombre || 'Sin nombre'}</TableCell>
                <TableCell>{guerrero.tipo}</TableCell>
                <TableCell>{guerrero.rango}</TableCell>
                <TableCell>{guerrero.nivel}</TableCell>
                <TableCell>
                  <Chip
                    label={guerrero.tipo}
                    color={guerrero.tipo === 'Orco' ? 'error' : 'secondary'}
                    size="small"
                  />
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => onEliminar(guerrero.id)}
                  >
                    Asesinado por la aparición
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TablaEjercito
