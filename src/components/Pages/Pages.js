import React from "react";
import Pokemon from "../Pages/pokemon/Pokemon";
import { Layout } from "antd";
import "./pages.css"

const Pages = () => {
  return (
    <Layout className="pages"
      style={{
        
      }}>
      <Pokemon />
   
    </Layout>
  );
};

export default Pages;
