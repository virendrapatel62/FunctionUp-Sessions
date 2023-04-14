import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/auth/login">Login</Link>
      </div>
      <div>
        <Link to="/auth/register">Register</Link>
      </div>
      <div>
        <Link to="/admin/dashboard">Dasbhboard</Link>
      </div>
    </header>
  );
}
