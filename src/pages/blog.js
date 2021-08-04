import { useStaticQuery, graphql, Link } from 'gatsby';
import React from 'react'


import Layout from '../components/layout'
import Head from '../components/head'

import * as blogStyles from './blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query blogQuery{
      allContentfulBlogPost(
        sort:{
          fields:date,
          order:DESC
        }
      ){
        edges{
          node{
            title
            slug
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
    `)

    return (
        <Layout>
        <Head title="Blogs" />
            <h1>Welcome to my blog!</h1>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map((edge) => 
                    <li className={blogStyles.post}>
                        <Link to={`/blog/${edge.node.slug}`}>
                          <h2>{edge.node.title}</h2>
                          <p>{edge.node.date}</p>
                        </Link>
                    </li>
                )}
            </ol>
        </Layout>
    )
};

export default BlogPage