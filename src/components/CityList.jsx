import PropTypes from "prop-types"; // Import PropTypes
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import styles from "./CityList.module.css";
import { useCities } from "../contexts/CitiesContext";
function CityList() {
  const { isLoading, cities } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on a map" />
    );
  return (
    <ul className={styles.CityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

// Add prop validation for isLoading and cities
CityList.propTypes = {
  isLoading: PropTypes.bool.isRequired, // Require isLoading to be a boolean
  cities: PropTypes.arrayOf(PropTypes.object).isRequired, // Require cities to be an array of objects
};

export default CityList;
