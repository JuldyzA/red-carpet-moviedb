import { getYear } from "../utilities/utilities";

const Footer = () => (
  <footer>
    <p>&copy; {getYear()} Movie DB </p>
  </footer>
);

export default Footer;