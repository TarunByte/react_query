import { useEffect, useState } from "react";
import { fetchposts } from "../API/api";

export const FetchOld = () => {
  const [posts, setPosts] = useState([]);
  // const [isLoading, setIsLoading] = useState([]);
  // const [isError, setIsError] = useState([]);

  const getPostsData = async () => {
    try {
      const res = await fetchposts();
      // console.log(res);
      res.status === 200 ? setPosts(res.data) : [];
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  useEffect(() => {
    getPostsData();
  }, []);

  return (
    <div>
      <ul className="section-accordion">
        {posts?.map((curElem) => {
          const { id, title, body } = curElem;
          return (
            <li key={id}>
              <p>{id}</p>
              <p>{title}</p>
              <p>{body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
