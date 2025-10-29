import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "./UserContext";

export default function Header() {
  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:7878/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:7878/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">Personal Blog</Link>
      <nav>
        {username && (
          <>
            <Link to="/create">اضافه کردن مقاله جدید</Link>
            <a onClick={logout}>خروج ({username})</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">ورود</Link>
            <Link to="/register">ثبت نام</Link>
          </>
        )}
      </nav>
    </header>
  );
}
