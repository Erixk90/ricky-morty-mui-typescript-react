import React from 'react'
import { Card, CardMedia, CardContent, Typography, Button,  Link } from '@mui/material'
import { useNavigate } from 'react-router-dom'

type CardProps = {
  image: string
  name: string
  status: string
  species: string
  id: number

}
const Cards: React.FC<CardProps> = ({ id, image, name, status, species}) => {
  const navigate = useNavigate()

  return (
    <Card >
      <CardMedia 
        component="img"
        height={194}
        title="Image"
        image={image}
        />
        <CardContent sx={{maxWidth: 345}}>
          <Button color='inherit' style={{cursor:'pointer'}} onClick={()=> navigate(`/character/${id}`)} >{name}</Button>
          <Typography variant="body1" sx={{mt:1.5}} color="initial">{species}</Typography>

        </CardContent>

    </Card>

  )
}

export default Cards