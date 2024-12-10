import PropTypes from "prop-types"; // Import PropTypes
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
import styles from "./CountryList.module.css";
import { useCities } from "../contexts/CitiesContext";
function CountryList() {
  const { isLoading, cities } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on a map" />
    );
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={countries.id} />
      ))}
    </ul>
  );
}

// Add prop validation for isLoading and cities
CountryList.propTypes = {
  isLoading: PropTypes.bool.isRequired, // Require isLoading to be a boolean
  cities: PropTypes.arrayOf(PropTypes.object).isRequired, // Require cities to be an array of objects
};

export default CountryList;
