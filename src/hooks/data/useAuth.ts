import { useState } from "react";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [foo, setFoo] = useState("foo");

  interface CreateUserForm {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
  }

  async function createUser(data: CreateUserForm) {
    return new Promise<any>((resolve, reject) => {
      fetch(process.env.REACT_APP_BASE_URL + "/sanctum/csrf-cookie", {
        credentials: "include",
        method: "GET",
      }).then(() => {
        fetch(process.env.REACT_APP_BASE_API + "/user/register", {
          credentials: "include",
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },

          body: JSON.stringify(data),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    });
  }

  return {
    foo,
    createUser,
    isLoggedIn,
    setIsLoggedIn,
  };
};
