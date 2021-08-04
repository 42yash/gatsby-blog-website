import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
        <Head title="About" />
            <h1>About Me</h1>
            <p>Hey, I am Yash and I am learning Gatsby.</p>
            <p>Need a Developer! <Link to='/contact'>Contact Me.</Link></p>
        </Layout>
    )
}

export default AboutPage