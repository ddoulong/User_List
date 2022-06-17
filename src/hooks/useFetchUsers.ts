import { useEffect, useState } from "react";
import { fetchUsers, User } from "api/fetchUsers";

/**
 * useFetchUsers
 *
 * Returns an array of users retrieved from the API
 */
function useFetchUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  /**
   * TODO: Loading and error handling
   */

  // call the API on first render only
  useEffect(() => {
    async function callApi() {
      setLoading(true);
      try {
        const { status, data } = await fetchUsers();
        if (status === 500) {
          throw new Error("Thrown from useFetchUsers(), API failed");
        }
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }

    callApi();
  }, []);

  return {
    users,
    loading
  };
}

export { useFetchUsers };
