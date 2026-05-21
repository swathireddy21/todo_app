import Login from "./Login";
import Todo from "./Todo";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {loggedIn ? <Todo /> : <Login onLogin={() => setLoggedIn(true)} />}
    </div>
  );
}

export default App;
