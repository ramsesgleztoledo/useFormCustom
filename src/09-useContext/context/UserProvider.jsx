import { UserContext } from "./UserContext";

const user = {
  id: 123,
  name: "Link",
  email: "link@nintendo.com",
};

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hello: "world", user }}>
      {children}
    </UserContext.Provider>
  );
};
