import { useState } from "react";
import { Button } from "@ds/storybook";
import "@ds/scss/lib/Button.css";
import "./Button.css"


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header>
        <p>
          <strong>☺Playgrounds:</strong>
          <span> Atomic Design | Storybook | React</span>
        </p>
        <p>
          <Button
            label={`count is`}
            onClick={() => setCount((count) => count + 1)}
          >
            {count}
          </Button>
        </p>
      </header>
    </div>
  );
}

export default App;
