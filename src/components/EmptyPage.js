import { Link } from "react-router-dom";

export default function EmptyPage() {
  return (
    <>
      <h2>404 - Page Not Found.</h2>
      <Link to="/">Go to homepage</Link>
    </>
  );
}
