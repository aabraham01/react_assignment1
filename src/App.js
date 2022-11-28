import React from "react";
import "./App.css";

function App() {
  return (
    <article class="recipe">
      <h2>Chicken Vindaloo</h2>
      <p>
        “Vindaloo” is a popular Indian{" "}
        <a className="main" href="https://www.indianhealthyrecipes.com/chicken-vindaloo/">
          Curry Dish
        </a>{" "}
        that calls for meat to be marinated in a highly flavorful spicy mixture
        with vinegar, then quickly cooked up when you’re ready to eat.
      </p>
      <p>
        While this dish has a long list of spices, most are quite common in the
        average spice rack. If you find you're missing one, it's not a deal
        breaker. You will still have a lovely, fragrant curry.
      </p>
      <aside className="pinkbox">
        <p>
          Quick warning:{" "}
          <strong>
            this recipe is <em>spicy</em>
          </strong>
          .{" "}
          <a className="linkaside" href="https://kitchendreaming.com/chicken-vindaloo/">Click here</a>{" "}
          for an alternative recipe with less heat.
        </p>
      </aside>
    </article>
  );
}

export default App;
