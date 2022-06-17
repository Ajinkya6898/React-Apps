import Card from "./components/Card";
import "./App.css";
import contacts from "./components/data";

// console.log(contacts);

function userDetails(e) {
  return (
    <Card
      key={e.id}
      name={e.name}
      img={e.imgURL}
      number={e.phone}
      email={e.email}
    />
  );
}

export default function App() {
  return (
    <div>
      <h1 className="heading">My Contacts Created with React Props</h1>
      {contacts.map(userDetails)}
    </div>
  );
}
