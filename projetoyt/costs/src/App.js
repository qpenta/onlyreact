import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Project from './components/pages/Project';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'


function App() {
    return (
        <Router>
            <Navbar />
            <Container customClass="min-height">
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/contact' element={<Company />} />
                    <Route exact path='/company' element={<Contact />} />
                    <Route exact path='/newproject' element={<NewProject />} />
                    <Route exact path='/newproject' element={<NewProject />} />
                    <Route exact path='/project' element={<Project />} />


                </Routes>
            </Container>
            <Footer />
        </Router>
    )
}

export default App