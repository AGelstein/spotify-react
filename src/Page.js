import { useEffect, useState } from "react";
import Header from "./Header";
import Content from "./Content";

const Page = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    let newToken = window.localStorage.getItem("token");

    console.log("i fire");

    if (!newToken && hash) {
      newToken = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", newToken);
    }

    setToken(newToken);
    return () => {
      localStorage.removeItem("token");
      console.log("clearing localStorage");
    };
  }, []);

  return (
    <div token={token}>
      <Header token={token} setToken={setToken} />
      <Content token={token} />
    </div>
  );
};

export default Page;
