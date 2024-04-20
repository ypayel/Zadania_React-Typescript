import { useEffect, useState } from "react";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  phone: string;
};

export const ProfileList = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/users");

      if (!res.ok) {
        throw new Error("Something went wrong!");
      }

      const { users } = await res.json();
      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // funkcja fetchData pobiera nam dane na początku przy pierwszym renderze komponentu
    fetchData();
  }, []);

  return (
    <div>
      <h2>Lista uzytkowników</h2>
      {users.length > 0 && (
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.firstName}</li>
          ))}
        </ul>
      )}
    </div>
  );
};