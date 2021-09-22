import { Link } from "react-router-dom";
import { LocationCard } from "./LocationCard";

function LocationList({ apiDataLocation }) {
  return (
    <ul>
      {apiDataLocation.map((locationdata) => (
        <li key={locationdata.id}>
          <Link>
            <LocationCard locationdata={locationdata} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
export { LocationList };
