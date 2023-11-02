import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams, Link } from "react-router-dom";

const categoryQuery = gql`
  query GetCategory($id: ID) {
    category(id: $id) {
      data {
        id
        attributes {
          name
          reviews {
            data {
              id
              attributes {
                title
                body
                rating
                categories {
                  data {
                    id
                    attributes {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Category = () => {
  const { id } = useParams();

  const { data, loading, error } = useQuery(categoryQuery, {
    variables: { id: id },
  });

  // console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!!</p>;

  return (
    <div>
      <h2>{data.category.data.attributes.name}</h2>
      {data.category.data.attributes.reviews.data.map((cat) => (
        <div key={cat.id} className="review-card">
          <div className="rating">{cat.attributes.rating}</div>
          <h2>{cat.attributes.title}</h2>

          {cat.attributes.categories.data.map((c) => (
            <small key={c.id}>{c.attributes.name}</small>
          ))}

          <p>{cat.attributes.body.substring(0, 200)}...</p>
          <Link to={`/details/${cat.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
};

export default Category;
