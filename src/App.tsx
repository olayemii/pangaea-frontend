import { ApolloProvider } from "@apollo/client";
import React from "react";
import CartContextProvider from "./contexts/CartContext";
import ConfigContextProvider from "./contexts/ConfigContext";
import ProductContextProvider from "./contexts/ProductContext";
import { client } from "./gql";
import Home from "./pages/home/Home";

function App() {
  return (
    <ApolloProvider client={client}>
      <ProductContextProvider>
        <CartContextProvider>
          <ConfigContextProvider>
            <Home />
          </ConfigContextProvider>
        </CartContextProvider>
      </ProductContextProvider>
    </ApolloProvider>
  );
}

export default App;
