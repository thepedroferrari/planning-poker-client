import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { WebSocketLink } from "@apollo/client/link/ws"
import { Welcome } from "components/Welcome"
import { GlobalStyle } from "GlobalStyles"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { App } from "./components/App"

// import reportWebVitals from "./reportWebVitals"
const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_WSS_URL,
  options: {
    reconnect: true,
  },
})

const client = new ApolloClient({
  link: wsLink,
  uri: process.env.REACT_APP_GQL_SERVER,
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/room/:name" component={App} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log)
