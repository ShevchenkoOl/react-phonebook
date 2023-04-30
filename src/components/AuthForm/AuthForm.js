import { Link } from './AuthForm.styled';

function AuthForm() {
  return (
    <nav>
      <Link to="/register" exact="true">
        Sign up
      </Link>
      <Link to="/login" exact="true">
        Log in
      </Link>
    </nav>
  );
}
export default AuthForm;
