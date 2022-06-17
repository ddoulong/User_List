import sortBy from "lodash/sortBy";
import { useFetchUsers } from "hooks/useFetchUsers";
import { useState, useEffect } from "react";

function Users() {
  const { users, loading } = useFetchUsers();

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    function setUsers() {
      setUserList(users);
    }
    setUsers();
  }, [users]);

  const sortByFirst = () => {
    const usersByFirst = sortBy(users, [
      function (u) {
        return u.firstName;
      }
    ]);
    setUserList(usersByFirst);
  };

  const sortByLast = () => {
    const usersByLast = sortBy(users, [
      function (u) {
        return u.lastName;
      }
    ]);
    setUserList(usersByLast);
  };

  /**
   * TODO: Render each user in a list displaying their
   * id, first name, and last name
   */

  /**
   * TODO: Add Loading state
   */

  /**
   * TODO: Alphabetize the users by first name and last name
   */

  return (
    <div>
      Users List
      <br />
      <button onClick={sortByFirst}>Sort by First Name</button>
      <button onClick={sortByLast}>Sort by Last Name</button>
      {loading ? <div>Loading...</div> : null}
      {userList
        ? userList.map((user) => (
            <div key={user.id.toString()}>
              <ul>
                <li>
                  ID: {user.id}, Firstname: {user.firstName}, Lastname:{" "}
                  {user.lastName}
                </li>
              </ul>
            </div>
          ))
        : users.map((user) => (
            <div key={user.id.toString()}>
              <ul>
                <li>
                  ID: {user.id}, Firstname: {user.firstName}, Lastname:{" "}
                  {user.lastName}
                </li>
              </ul>
            </div>
          ))}
    </div>
  );
}

export default Users;
