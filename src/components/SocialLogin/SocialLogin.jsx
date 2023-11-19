import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          navigate(from, { replace: true });
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="btn w-full flex items-center">
        <FcGoogle className="text-2xl" />
        Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
