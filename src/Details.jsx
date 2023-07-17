import { useParams } from "react-router-dom";
const Details = (props) => {
  const { id } = useParams();
  return (
    <div>
      <h1>{id}</h1>
      <p>Details Page</p>
    </div>
  );
};
export default Details;
