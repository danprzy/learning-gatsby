import React from "react";
import Img from "gatsby-image";
// import foto from "../images/amsterdam.jpg";
import { StaticQuery, graphql } from "gatsby";

const getFoto = graphql`
  {
    file(relativePath: { eq: "amsterdam.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default function foto() {
  return (
    <StaticQuery
      query={getFoto}
      render={data => {
        console.log(data);
        return (
          <div><Img fluid={data.file.childImageSharp.fluid} /></div>
        );
      }}
    />
  );
}
