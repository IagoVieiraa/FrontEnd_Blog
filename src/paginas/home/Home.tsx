import React from 'react';
import './Home.css';
import { Typography, Box, Grid, Button } from '@material-ui/core'

function Home() {
  return (
    <>
      <Grid className='back' container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: 'white' }}>
        <Grid className='top' alignItems="center" item xs={6}>
          <Box paddingX={20} >
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
            </Box>
            <Button variant="outlined" style={{ borderColor: "black", backgroundColor: "#FEEAC2", color: "D90429" }}>Ver Postagens</Button>
          </Box>
        </Grid>
        <Grid item xs={6} style={{ marginTop: 30, paddingLeft: 130 }}>
          <img className='img' src="https://i.imgur.com/OjpYMCc.jpg" alt="" width="500px" height="550px" />
        </Grid>
        <Grid xs={12} style={{ backgroundColor: "white" }}>
        </Grid>
        <br />
        <br />
      </Grid>
    </>
  );
}

export default Home;

