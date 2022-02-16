import React from 'react';
import './Home.css';
import {Typography, Box, Grid, Button} from '@material-ui/core'

function Home(){
    return(
        <>
        <Grid container direction="column" justifyContent="center" alignItems="center" style={{ backgroundColor: "white" }}>
          <Grid alignItems="center" item xs={6}>
            <Box paddingX={20} >
              <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "black", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
              <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "black", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
            </Box>
            <Box display="flex" justifyContent="center">
              <Box marginRight={1}>
              </Box>
              <Button variant="outlined" style={{ borderColor: "black", backgroundColor: "#FEEAC2", color: "D90429" }}>Ver Postagens</Button>
            </Box>
          </Grid>
          <Grid item xs={6} >
            <img src="https://i.imgur.com/Dd9K3e6.jpg" alt="" width="682px" height="393px" />
          </Grid>
          <Grid xs={12} style={{ backgroundColor: "white" }}>
          </Grid>
        </Grid>
        </>
    );
}

export default Home;

