import { useQuery } from "@apollo/client";
import React from "react";
import { GET_MY_PROFILE } from "../gqloperations/queries";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_MY_PROFILE);

  if (!localStorage.getItem("token")) {
    navigate("/login");
    return <h2>unauthorized </h2>;
  }

  if (loading) return <h2>prfile is Loading...</h2>;

  if (error) {
    console.log(error);
  }
  return (
    <div className="container my-container">
      <div className="center-align">
        <img
          className="circle"
          style={{ border: "2px solid", marginTop: "10px" }}
          src={`https://robohash.org/${data.user.firstName}.png`}
          alt="Profile pic"
        />
        <h5>
          {data.user.firstName} {data.user.lastName}
        </h5>
        <h6>Email-{data.user.email}</h6>
      </div>
      <h3>Your quotes</h3>
      {data.user.quotes.map((quote, index) => {
        return (
          <blockquote key={index}>
            <h6>{quote.name}</h6>
          </blockquote>
        );
      })}
    </div>
  );
}
