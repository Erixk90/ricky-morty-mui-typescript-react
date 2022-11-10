import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RouterLayout from './components/RouterLayout'
import CharacterPage from './pages/CharacterPage'
import Home from './pages/Home'

const Router: React.FC<{}> = () => {
    return (
        <Routes>
            <Route path='/' element={< RouterLayout />}>
                <Route path='/' element={< Home />} />
                <Route path='/Character/:id' element={< CharacterPage />} />
            </Route>
        </Routes>
    )
}

export default Router