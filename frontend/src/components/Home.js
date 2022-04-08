import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import AfterLogin from "./AfterLogin";
import BeforeLogin from "./BeforeLogin";

function Home() {
  const [data, setdata] = useState({
    city: "",
    email: "",
    name: "",
    pin: "",
    status: "",
  });
  async function getDataFromBackend(token) {
    //  here we don't use post method because we don't send any data we just
    // update the http header
    var tempdata = await axios.get("http://localhost:8000/login/data", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    tempdata = tempdata.data;
    console.log(tempdata);
    await setdata({
      email: tempdata.email,
      status: tempdata.status,
      name: tempdata.name,
      city: tempdata.city,
      pin: tempdata.pin,
    });
    console.log(data);
  }
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
    } else {
      getDataFromBackend(token); // to get the data for particular token
    }
  }, []);
  return localStorage.getItem("token") ? (
    <AfterLogin {...data} />
  ) : (
    <BeforeLogin />
  );
}

export default Home;
