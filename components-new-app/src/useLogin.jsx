import { useState } from "react";

export function useLogin() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData({
      [name]: value,
    });
  };

  return {
    username: data.username,
    password: data.password,
    handleInput: handleInput,
  };
}
