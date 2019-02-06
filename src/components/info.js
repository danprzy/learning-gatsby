import React from "react";

import { StaticQuery, graphql } from "gatsby";

export default function info() {
  return (
    <StaticQuery
      query={graphql`
        {
          info: site {
            siteMetadata {
              title
              description
              author
            }
          }
        }
      `}
      render={data => {
        const siteData = data.info.siteMetadata;
        const { title, info, description, author } = siteData;
        return (
          <div>
            <h4>1 title: {title}</h4>
            <h4>2 info: {info}</h4>
            <p>3 description: {description}</p>
            <h4>4 author: {author}</h4>
          </div>
        );
      }}
    />
  );
}
