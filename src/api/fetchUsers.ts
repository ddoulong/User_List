export interface Response {
  data: User[];
  status: 200 | 500;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
}

// true if the api should fail
const API_FAILS = false;

const users: User[] = [
  { id: 1, firstName: "Test", lastName: "User" },
  { id: 2, firstName: "John", lastName: "Smith" },
  { id: 3, firstName: "Sally", lastName: "Jones" }
];

async function fetchUsers(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (API_FAILS) {
        resolve({ status: 500, data: [] });
      }

      resolve({ status: 200, data: users });
    }, 1000);
  });
}

export { fetchUsers };
