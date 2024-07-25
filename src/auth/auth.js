
const isAuth = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuth(true);
    } else if (token === null) {
      setAuth(false);
    }
  };
