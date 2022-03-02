import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css';
import useLocalStorage from 'react-use-localstorage';

function Navbar() {
    
    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();
    //função para limpar o token quando se deslogar
    function goLogout() {
        setToken('')
        alert("Usuário deslogado")
        history.push('/login')
    }
        return (
            <>
                <AppBar position="static">
                    <Toolbar variant="dense" style={{ backgroundColor: "#224a17" }}>
                        <Link to='/home' className='text-decorator-none'>
                            <Box className='cursor'>
                                <Typography variant="h5" color="inherit">
                                    BlogPessoal
                                </Typography>
                            </Box>
                        </Link>

                        <Box display="flex" justifyContent="start">
                            <Link to='/home' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit">
                                        home
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to='/postagens' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit">
                                        postagens
                                    </Typography>
                                </Box>
                            </Link>

                            <Link to='/temas' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit">
                                        temas
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to='/formularioTema' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit">
                                        cadastrar tema
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to='/login' className='text-decorator-none'>
                                {/*onClick - vai chamar a função goLogout */}
                                <Box mx={1} className='cursor' onClick={goLogout}>
                                    <Typography variant="h6" color="inherit">
                                        Logout
                                    </Typography>
                                </Box>
                            </Link>
                        
                        </Box>

                    </Toolbar>
                </AppBar>
            </>
        )
    }

export default Navbar;