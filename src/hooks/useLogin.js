import { useState } from "react";
import axios from "axios";

let baseurl = "https://app-oqundvwgva-uc.a.run.app";

const useLogin = () => {
  const [loginInfo, setLoginInfo] = useState();

  const callLogin = (data) => {
    axios
      .post(`${baseurl}/login`, data)
      .then((res) => {
        if (res?.data) setLoginInfo(res.data);
      })
      .catch((error) => console.log("Error: ", error));
  };

  return { callLogin, loginInfo };
};

export default useLogin;
