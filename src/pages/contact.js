import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <Layout>
        <Head title="Contact" />
            <h1>Contact Me</h1>
            <p>The best way to contact me is <a href='https://www.twitter.com/yrmaiya' target='_blank'>@yrmaiya</a> on twitter.</p>
        </Layout>
    )
}

export default ContactPage