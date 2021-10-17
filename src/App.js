import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Homepage'
import About from './pages/Aboutpage'
import Contact from './pages/Contactpage'
import Products from './pages/Productspage'
import Error from './pages/ErrorPage'

const App = () => {
    return (
        <>
            <Switch>
                <Route exact path="/">{Home}</Route>
                <Route path="/about">{About}</Route>
                <Route path="/products">{Products}</Route>
                <Route path="/contact">{Contact}</Route>
                <Route>{Error}</Route>
            </Switch>
        </>
    )
}

export default App
