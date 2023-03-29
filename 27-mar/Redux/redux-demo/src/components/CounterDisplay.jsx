import { useSelector } from "react-redux";

export function CouterDisplay() {
  const count = useSelector((state) => state?.counter?.count);
  return <h1>Count : {count}</h1>;
}
