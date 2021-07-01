import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  concat,
  HttpLink,
  InMemoryCache,
  split,
} from "@apollo/client"
import { WebSocketLink } from "@apollo/client/link/ws"
import { getMainDefinition } from "@apollo/client/utilities"
import { App } from "components/App"
import { GlobalStyle } from "GlobalStyles"
import React from "react"
import ReactDOM from "react-dom"

// import reportWebVitals from "./reportWebVitals"
const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_WSS_URL,
  options: {
    reconnect: true,
  },
})
const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GQL_SERVER,
  credentials: "include",
})

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    )
  },
  wsLink as ApolloLink,
  httpLink,
)

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      authorization: localStorage.getItem("token") || null,
    },
  })

  return forward(operation)
})

const client = new ApolloClient({
  link: concat(authMiddleware, link),
  uri: process.env.REACT_APP_GQL_SERVER,
  credentials: "include",

  cache: new InMemoryCache(),
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyle />
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log)
