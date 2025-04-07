export const loginUser = async (email: string, password: string) => {
    const res = await fetch("http://localhost:8000/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    return res.json();
  };
  
  export const registerUser = async (email: string, password: string) => {
    const res = await fetch("http://localhost:8000/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    return res.json();
  };
  
  export const fetchEnergyData = async (token: string, queryParams = "") => {
    const url = `http://localhost:8000/energy/${queryParams ? `?${queryParams}` : ""}`;
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.json();
  };
  