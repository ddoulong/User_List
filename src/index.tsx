import { render } from "react-dom";
import UsersList from "components/UsersList";

/**
 * Welcome Daniel
 *
 * This application represents an API call to fetch and
 * display users in a list. An API is specified that
 * returns an array of users, containing an id, first name,
 * and last name.
 *
 * Implement React code to render the users in a simple
 * table or list
 *
 * Once the users list has been implemented, add additional
 * logic to sort the list by first name or last name
 * when the buttons are clicked.
 *
 * Extra Considerations:
 *
 * - API Failure
 * - UI Loading State
 *
 * Good luck!
 */

const rootElement = document.getElementById("root");
render(<UsersList />, rootElement);
