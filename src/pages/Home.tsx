import React from 'react'
import { characters } from '../api/characters'
import { TypeCharacter } from '../api/interface/character.interface'
import Cards from '../components/Cards'
import Filters from '../components/Filters'
import { Link, Box, Grid, ImageList, ImageListItem, Typography } from '@mui/material'
import loading from '../assets/rick-and-morty-rick.gif'
import Button from '@mui/material/Button'
import logo from '../assets/logogral.jpg'
import { display } from '@mui/system'


const Home: React.FC<{}> = () => {

  const [allCharacters, setAllCharacters] = React.useState<TypeCharacter[] | null>([])
  const [visible, setVisible] = React.useState<any>([8])

  /* For each one
    React.useEffect(() => {
      characters.getById({ id: 1 }).then((r) => {
        console.log(r.data)
      }).catch((e) => {
        console.error(e)
      })
    }, [])*/

  /* for all */
  React.useEffect(() => {
    characters.getAll({ page: 1 }).then((r) => {
      setAllCharacters(r.data.results)
    }).catch((e) => {
      console.error(e)
    })
  }, [])


  const adding = [4]
  const showMoreItems = () => {
    setVisible((prevValue: any) => prevValue + adding)
  }

  return (
    <div>
      <Box
        /*{sx={{
          marginY: 1,
          width: '50%',
          height: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}*/
      > <Link href='/' >
        <ImageList cols={1}>
          <ImageListItem>
            <img
              src={logo}
              alt='Loading Components...'
            />
          </ImageListItem>
        </ImageList>
        </Link>
      </Box>
      <Filters />
      <div>
        {
          allCharacters?.length !== 0 ? (
            <Grid container spacing={2} direction="row">
              {allCharacters!.slice(0, visible).map((character) => (
                <Grid item xs={3}>
                  <Cards
                    key={character.id}
                    image={character.image}
                    name={character.name}
                    species={character.species}
                    status={character.status}
                    id={character.id}
                  />
                </Grid>
              ))
              }

            </Grid>
          ) : <div>
            <Box>
              <ImageList sx={{
                display: 'flexbox',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 200
              }} cols={1} >
                <ImageListItem>
                  <img
                    src={loading}
                    alt='Loading Components...'
                  />
                </ImageListItem>
              </ImageList>
            </Box>
            <Typography variant="subtitle1" color="initial"> Loading Components...
            </Typography>
          </div>
        }
      </div>
      <Button variant="outlined" color="primary" sx={{ mt: 2.5 }} onClick={showMoreItems}>
        Load More
      </Button>
    </div>
  )
}

export default Home