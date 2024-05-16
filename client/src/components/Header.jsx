import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import EmailLogo from "../assets/email-logo.png";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="bg-slate-900 text-green-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-1">
        <Link to="/" className="flex items-center gap-2">
          <h1 className="font-semibold text-2xl">Email Hub</h1>
          <img src={EmailLogo} className="w-14 h-14 pb-2" alt="Email Logo" />
        </Link>
        <ul className="flex gap-4 text-lg">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.profilePicture}
                alt="profile"
                className="h-7 w-7 rounded-full object-cover"
              />
            ) : (
              <li>Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
}
