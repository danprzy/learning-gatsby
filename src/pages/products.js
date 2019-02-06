import React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

export default function products({ data }) {
  return (
    <Layout>
      <h1>our product</h1>
      {data.products.edges.map(({ node: product }) => {
        return (
          <div key={product.id}>
            <Img fixed={product.image.fixed} />
            <h3>
              {product.title} <span>${product.price}</span>
            </h3>
            <p>{product.description.description}</p>
            <Link to={`/products/${product.title}`}>Details</Link>
          </div>
        );
      })}
    </Layout>
  );
}

export const query = graphql`
  {
    products: allContentfulProduct {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          image {
            fixed(width: 150) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`;
