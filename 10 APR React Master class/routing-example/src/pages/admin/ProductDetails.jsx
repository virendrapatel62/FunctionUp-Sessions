import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetails() {
  const params = useParams();
  const input = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Fetch Prodyc for", params.productId);
  }, [params.productId]);

  function showDetails() {
    const id = input.current.value;

    if (params.productId)
      return navigate("../" + id, {
        relative: "path",
      });

    navigate(id);
  }

  return (
    <div>
      <h1>Product Details Page</h1>
      <input ref={input} type="number" name="" placeholder="typeId" id="" />
      <button onClick={() => showDetails()}>Show details</button>

      <h1>Showing details for the us : {params.productId}</h1>
    </div>
  );
}
