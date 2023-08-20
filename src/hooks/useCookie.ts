function getCookie(name: string) {
  interface Cookie {
    [key: string]: string;
  }

  let cookie: Cookie = {};

  document.cookie.split(";").forEach((el) => {
    let [key, value] = el.split("=");

    cookie[key.trim()] = value;
  });

  return cookie[name];
}

export { getCookie };
