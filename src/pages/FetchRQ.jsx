import { useQuery } from "@tanstack/react-query";
import { fetchposts } from "../API/api";

export const FetchRQ = () => {
  const { data } = useQuery({
    queryKey: ["posts"], // useState
    queryFn: fetchposts, // useEffect
  });

  return (
    <div>
      <ul className="section-accordion">
        {data?.map((curElem) => {
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
