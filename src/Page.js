import { useEffect, useState } from "react";
import Header from "./Header";
import Content from "./Content";

const Page = () => {
  const [token, setToken] = useState("");
  console.log("page + token", { token });

  useEffect(() => {
    console.log("useEffect");
    const hash = window.location.hash;
    let newToken = window.localStorage.getItem("token");

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
  }, []);

  return (
    <div token={token}>
      <Header token={token} setToken={setToken} />
      <Content token={token} />
    </div>
  );
};

export default Page;
