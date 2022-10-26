import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./styles/loginScreen.css";

const LoginScreen = () => {
  const { handleSubmit, register, reset } = useForm();
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  const submit = (data) => {
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/users/login";
    axios
      .post(URL, data)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.data.token);
        setIsLogged(true);
        setTimeout(() => {
          navigate("/");
        }, 5000);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogged(false);
  };

  if (localStorage.getItem("token")) {
    return (
      <div className="login__mensage">
        <p>
          "you have logged successfully, wait 5 seconds you will be redirected
          automatically"
        </p>
        <button className="btn-logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <section className="login">
      <form className="login__form" onSubmit={handleSubmit(submit)}>
        <h2 className="form__title">Login</h2>
        <div className="form__camps">
          <label className="login__label" htmlFor="email">
            Email:
          </label>
          <input
            className="login__input"
            type="text"
            id="email"
            {...register("email")}
          />
        </div>
        <div className="form__camps">
          <label className="login__label" htmlFor="password">
            Password:
          </label>
          <input
            className="login__input"
            type="password"
            id="password"
            {...register("password")}
          />
        </div>
        <button className="btn__login">Login</button>
        <p>
          You don't have account? <Link to="/signup">Sign-Up Here! </Link>
        </p>
        <p></p>
      </form>
    </section>
  );
};

export default LoginScreen;
