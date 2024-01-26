import { useNavigate } from "react-router-dom";

export default function LoginNavigate() {
  const navigate = useNavigate();
  navigate("/home");
}
