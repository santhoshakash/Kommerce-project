import React, { useState } from "react";
import { signInAPI } from "./../context/Api";
import { signUpAPI } from "./../context/Api";
import { useNavigate } from "react-router-dom";
import "../css/style.css";
export const Usercontext = React.createContext({});

export const LogincontextProvider = (props) => {
  //   console.log(props.data);
  const [data, setdata] = useState();
  const [data2, setdata2] = useState();
  const [notauth, setNotauth] = useState();
  //   const [error, seterror] = useState();
  const navigate = useNavigate();

  const logindata = async (email, password) => {
    console.log(email, password);
    const data = await signInAPI(email, password);
    console.log(data.message);
    if (data.status === 400) {
      setNotauth(true);
      // console.log("iviybln");
    }
    if (data.role) {
      console.log(data);
      setdata(data);
      navigate("/nextpage");
    } else {
      console.log("wrong password");
    }
  };
  const signUpdata = async (email, password, confirmpassword) => {
    console.log(email, password, confirmpassword);
    const data2 = await signUpAPI(email, password, confirmpassword);
    console.log(data2);
    if (data2) {
      console.log(data2);
      setdata2(data2);
      navigate("/nextpage");
    } else {
      console.log("wrong password");
    }
  };

  return (
    <Usercontext.Provider
      value={{
        values: data,
        logindata,
        signUpdata,
        // error: error,
      }}
    >
      {notauth && <h1 class="ip">Invalid Password</h1>}
      {props.children}
    </Usercontext.Provider>
  );
};
