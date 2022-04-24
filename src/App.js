import React from "react";

import { TodoRows } from "./components/TodoRows";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="todo-app">
      <TodoRows />
    </div>
  );
}

export default App;
