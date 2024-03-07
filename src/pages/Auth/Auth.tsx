import { useState } from 'react';
import { UserDataAuth } from '../../entities';

const Auth = () => {
  const [userData, setUserData] = useState<UserDataAuth>();

  const logIn = (User: UserDataAuth) => {
    if (User && User.email === 'qwe@bk.ru' && User.password === 'qwe') {
      console.log('Successfully logged');
    } else {
      console.log('Incorrect login or password');
    }
  };

  return (
    <div className="form">
      <form>
        <p>Авторизация:</p>
        <input
          type="text"
          placeholder="Логин"
          onChange={(e) => {
            setUserData({ ...userData, email: e.target.value });
          }}
        />
        <input
          type="password"
          placeholder="Пароль"
          onChange={(e) => {
            setUserData({ ...userData, password: e.target.value });
          }}
        />
        <button
          type="button"
          onClick={() => {
            if (userData) logIn(userData);
          }}
        >
          Войти
        </button>
      </form>
    </div>
  );
};

export default Auth;
