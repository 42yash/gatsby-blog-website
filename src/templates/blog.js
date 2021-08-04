import { graphql } from 'gatsby'
import React from 'react'
import { renderRichText } from "gatsby-source-contentful/rich-text"

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
    query templateQuery($slug: String!) {
        contentfulBlogPost(slug: {eq:$slug}){
            title
            date(formatString: "MMMM Do, YYYY")
            body{
                raw
                references {
                    ... on ContentfulAsset {
                      contentful_id
                      __typename
                      title
                      file {
                        url
                      }
                    }
                  }
            }
        }
    }
`

const Blog = (props) => {

    const options = {renderNode: {
        "embedded-asset-block" : node => {
            return (
                <img
                    src={node.data.target.file.url}
                    alt={node.data.target.title}
                />
            )
        }
    }}

    return (
        <Layout>
        <Head title={props.data.contentfulBlogPost.title} />
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.date}</p>
            {renderRichText(props.data.contentfulBlogPost.body, options)}
        </Layout>
    )
}

export default Blog