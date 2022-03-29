const url = "http://localhost:3005/user";

export const signInAPI = async (email, password) => {
  console.log(email, password);
  const fetchData = await fetch(`${url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  const data = await fetchData.json();
  console.log(data);
  return data;
};

export const signUpAPI = async (email, password, confirmpassword) => {
  console.log(email, password, confirmpassword);
  const fetchData = await fetch(`${url}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
      confirmpassword: confirmpassword,
    }),
  });
  console.log(fetchData);
  const data2 = await fetchData.json();
  console.log(data2);
  return data2;
};
