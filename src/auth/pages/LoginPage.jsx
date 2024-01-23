import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigator = useNavigate();

  const onLogin = () => {
    navigator("/marvel", {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>LoginPage</h1>
      <hr />

      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};