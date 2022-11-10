import React from 'react'
import { useParams } from 'react-router-dom'
import { characters } from '../api/characters';
import { TypeCharacter } from '../api/interface/character.interface';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Typography, Container, Link, Box, Grid } from '@mui/material'




const Characters: React.FC<{}> = () => {
  const { id } = useParams();

  const [loading, setLoading] = React.useState<boolean>(true)
  const [character, setCharacter] = React.useState<TypeCharacter | null>(null)
  const [episode, setEpisode] = React.useState<TypeCharacter | null>(null)


  React.useEffect(() => {
    characters.getById({ id })
      .then((r) => {
        setCharacter(r.data)
        setLoading(false)
      })
      .catch((e) => {
        console.error(e)
      })
  }, [])

  React.useEffect(() => {
    characters.getByEpisode({ id })
      .then((r) => {
        console.log(r.data)
        setLoading(false)
      })
      .catch((e) => {
        console.error(e)
      })
  }, [])

  return (
    <div>
      <Box sx={{ width: "100%", marginTop: 10 }}>
        <Container maxWidth='xl'>
          {
            loading ? (
              ""
            ) : (
              <Grid container>
                <Grid item xs={6} >
                  <Link href='/' ><ArrowBackIcon /><Typography variant="body2" color="initial">GO BACK</Typography>
                  </Link>
                </Grid>
                <Grid item xs={3}>
                  <img src={character!.image} style={{ width: "100%", borderRadius: "50%" }} />
                  <Typography variant="h5" color="initial">{character!.name}</Typography>

                </Grid>
              </Grid>
            )
          }
        </Container>
        { loading ? (
              ""
            ) : (
        <Container maxWidth="xs">
          <Grid container>
            <Grid item xs={8}>
              <Box color='grey'
                fontSize={25}
              >
                <Typography variant="subtitle1" fontSize={18} >Informations</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" color="initial">Gender</Typography>
                <Typography variant="body1" color="initial">{character!.gender}</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" color="initial">Status</Typography>
                <Typography variant="body1" color="initial">{character!.status}</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" color="initial">Specie</Typography>
                <Typography variant="body1" color="initial">{character!.species}</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" color="initial">Origin</Typography>
                <Typography variant="body1" color="initial">{character!.origin.name}</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" color="initial">Location</Typography>
                <Typography variant="body1" color="initial">{character!.location.name}</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" color="initial">Type</Typography>
                <Typography variant="body1" color="initial"> {character!.type=== "" ?"unknow":character!.type} </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
            <Box color='grey'
                fontSize={25}
              >
                <Typography variant="subtitle1" fontSize={18}>Episodes</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" color="initial">Episodes</Typography>
                <Typography variant="body1" color="initial"></Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
          )}
      </Box>
    </div>
  )
}

export default Characters