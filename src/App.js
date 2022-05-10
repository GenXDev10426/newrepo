import { Container } from "@material-ui/core";
import "./App.css";
import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router} from "react-router-dom";
import Results from "./components/Results";

const App = () => {
  return (
    <Router>
      <Header />
      <Container
        style={{
          backgroundColor: "rgba(67, 98, 133, 0.37)",
          padding: "1vmax",
          margin: "10px",
          display: "flex",
          width:"98%",
          alignSelf: "center",
        }}
      >
        <Results/>
      </Container>
      
    </Router>
    
  );
};

export default App;
