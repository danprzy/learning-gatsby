import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

export default function blog() {
  return (
    <Layout>
      <h1>hello from blog</h1>
      <Link to="/">Go to home</Link>
      <br />
    </Layout>
  );
}
