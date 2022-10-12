import { Link as RouterLink } from 'react-router-dom';
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from '../layout';

export const RegisterPage = () => {
    return (
        <AuthLayout title='Register'>
            <form>
                <Grid container>
                    <Grid item xs={ 12 } sx={{ mt:2 }}>
                        <TextField
                            label="Nombre completo"
                            type="text"
                            placeholder="Your name"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={ 12 } sx={{ mt:2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="example@mail.com"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={ 12 } sx={{ mt:2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="some password"
                            fullWidth
                        />
                    </Grid>
                    <Grid container spacing={ 2 } sx={{ mb:2, mt:1 }}>
                        <Grid item xs={ 12 }>
                            <Button variant="contained" fullWidth>
                                Create
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Typography sx={{ mr:1 }} >¿Ya tienes cuenta?</Typography>
                        <Link component={ RouterLink } color="inherit" to="/auth/login">
                            Iniciar sesión
                        </Link>
                    </Grid>

                </Grid>
            </form>
        </AuthLayout>
    )
}
