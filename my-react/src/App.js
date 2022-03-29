import logo from "./logo.svg";
import { Login } from "./component/pages/login";
import { BrowserRouter } from "react-router-dom";
import { Firstroutes } from "./component/router/router";
import { LogincontextProvider } from "./component/context/logincontext";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <LogincontextProvider>
        <Firstroutes />
      </LogincontextProvider>
    </BrowserRouter>
  );
}

export default App;
