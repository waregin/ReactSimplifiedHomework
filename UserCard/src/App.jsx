import "./user.css";
import user from "./user.json";
import { UserCard } from "./UserCard";

function App() {
  return (
    <UserCard
      name={user.name}
      age={user.age}
      phoneNumber={user.phoneNumber}
      address={user.address}
    />
  );
}

export default App;
