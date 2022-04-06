import axios from "axios";
import React from "react";
import { useEffect } from "react";

function Home() {
  var data = "";
  async function getDataFromBackend(token) {
    //  here we don't use post method because we don't send any data we just
    // update the http header
    data = await axios.get("http://localhost:8000/login/data", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    console.log(data);
  }
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
    } else {
      console.log("yes");
      getDataFromBackend(token); // to get the data for particular token
    }
  }, []);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
