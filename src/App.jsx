import React from 'react'
import { Navbar, Header, Brands, WhatGPT3, Features, Possibility, Banner, Blogs, Footer } from './components/export';

const App = () => {
    return (
        <div className='App'>
            <Navbar />
            <Header />
            <Brands />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <Banner />
            <Blogs />
            <Footer />
        </div>
    )
}

export default App;