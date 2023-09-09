import React,{ useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

import './App.css'





function App() {
  
  const [users, setUsers] = useState([])
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const getUsers = async () => {
    const response = await fetch('http://localhost:5000/api/users')
    const data = await response.json()
    setUsers(data)
    console.log(data)
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {



    getUsers()
  }
  , [])

  const handleSubmit = async (e)=> {
    e.preventDefault();
    const res = fetch('http://localhost:5000/api/users',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json', // Especifica el tipo de contenido (puede variar según tu API)
        // Otras cabeceras si es necesario (por ejemplo, autenticación)
      },
      body: JSON.stringify({
        "name": e.target.name.value,
        "email": e.target.email.value,
      })
    });
    getUsers()
  }



  return (
    <>
      <h1>Users</h1>
      <Button sx={{marginBottom:"5px"}} onClick={handleOpen} variant="contained" color="success">Create</Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right">{user.name}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">
                <Button variant="contained">Edit</Button>
<Button onClick={async ()=>{
  const res = await fetch(`http://localhost:5000/api/users/${user._id}`,{
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json', // Especifica el tipo de contenido (puede variar según tu API)
      // Otras cabeceras si es necesario (por ejemplo, autenticación)
    },
  })
  getUsers();
}} variant="outlined" color="error">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>




      <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <form onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column"
      }}
    >
      <TextField id="name" label="Name" variant="standard" />
      <TextField id="email" label="Email" variant="standard" type="email" />
      <Button type='submit' variant="contained" color='success'>Create</Button>


    </form>
        </Box>
      </Modal>
    </div>
    </>
  )
}

export default App
