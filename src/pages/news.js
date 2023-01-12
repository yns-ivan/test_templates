// pages/news.js
import React from "react"
import { graphql　} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NewsPage = ({ data }) => (
 <Layout>
   <SEO title="ニュース" />

   {data.allMicrocmsNews.edges.map(edge => {
     const news = edge.node

       return (
        <React.Fragment key={news.id}>
         <div>
             <h2>{news.title}</h2>
         </div>
         <div>
            {news.body}
         </div>
        <hr />
       </React.Fragment>
       )
   })}
 </Layout>
)

export const query = graphql`
 {
    allMicrocmsNews(
     sort: { fields: [id], order: DESC }
   ) {
     edges {
       node {
         id
         title
         body
       }
     }
   }
 }
`

export default NewsPage