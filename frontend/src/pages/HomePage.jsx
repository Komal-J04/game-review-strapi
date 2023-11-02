import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const reviewsQuery = gql`
  query getReviews {
    reviews {
      data {
        id
        attributes {
          title
          rating
          body
        }
      }
    }
  }
`;

export default function Homepage() {
  const { loading, error, data } = useQuery(reviewsQuery);

  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!!</p>;

  console.log(data);

  return (
    <div>
      {data.reviews.data.map((review) => (
        <div key={review.id} className="review-card">
          <div className="rating">{review.attributes.rating}</div>
          <h2>{review.attributes.title}</h2>

          <small>console list</small>

          <p>{review.attributes.body.substring(0, 200)}...</p>
          <Link to={`/details/${review.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
}
