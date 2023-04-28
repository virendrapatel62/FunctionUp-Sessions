import React from "react";
import { useSetRecoilState } from "recoil";
import { authAtom } from "../recoil/users";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const setAuth = useSetRecoilState(authAtom);

  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          setAuth((auth) => {
            return {
              isLoggedIn: true,
              user: {
                name: "John Doe",
                email: "upchh@example.com",
              },
            };
          });

          navigate("/");
        }}
        className="btn btn-success"
      >
        Login
      </button>
    </div>
  );
}
