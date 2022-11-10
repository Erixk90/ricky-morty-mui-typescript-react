import { Box, Link, AppBar, Toolbar, Typography, Container, Grid, Avatar } from "@mui/material"
import logo from '../assets/logomini.png'
const Navbar: React.FC<{}> = () => {
    return (
        <Box>
            <AppBar position="fixed" color="transparent">
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            align-items="center" >
                            <Grid item>
                            <Link href="/">
                                <Avatar alt="Logo blanco y negro" src={logo}/>
                                </Link>
                            </Grid>
                        </Grid>
                    </Container>

                </Toolbar>
            </AppBar>

        </Box>
    )
}

export default Navbar