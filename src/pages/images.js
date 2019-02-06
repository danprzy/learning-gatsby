import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export default function images({ data }) {
  const images = data.allFile.edges;
  return (
    <Layout>
      {/* <h1>Hello from inages page</h1>
      <h6>{data.allFile.edges[1].node.relativePath}</h6> */}
      <h1>all images:</h1>
      {images.map((item, index) => {
        return <h3 key={index}>{item.node.relativePath}</h3>;
      })}
    </Layout>
  );
}

export const query = graphql`
  {
    allFile {
      edges {
        node {
          relativePath
        }
      }
    }
  }
`;
