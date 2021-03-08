import React from "react";
import { Header } from "../Header";
import { Product } from "../Product";
import { Footer } from "../Footer";

export const ProductPage = () => (
  <main>
    <Header />
    <Product productId={1}/>
    <Footer />
  </main>
);
