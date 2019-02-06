import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import styled from "styled-components";
import { FaApple } from "react-icons/fa";
import Info from "../components/info";
// import img from "../images/amsterdam.jpg";
import Foto from "../components/foto";

// import Section from "../components/section/section";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Link to="/products/">Go to product</Link>
    <Info />
    <Foto />
    <Link to="/images/">go to images</Link>
    <h1 style={{ color: "red" }}>Hi Danuta</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <FaApple className="icon" />
    <Button>submit</Button>
    <br />
    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <Link to="/blog/">Go to blog</Link>
    {/* <Section /> */}
    {/* <img src={img} alt="amsterdam" /> */}
  </Layout>
);

const Button = styled.button`
  color: red;
  background: black;
  font-size: 1.5rem;
`;

export default IndexPage;
