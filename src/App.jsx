import BlurText from "./components/BlurText";
import MagnetLines from "./components/MagnetLines";

function App() {
  return (
    <div style={{ padding: "40px", fontSize: "24px" }}>
      {/* Task A */}
      <h2>Blur Text Demo</h2>

      <p>
        Hover to reveal:
        <br />
        <BlurText text="This text becomes clear on hover" />
      </p>

      <p>
        Always revealed:
        <br />
        <BlurText text="This text is always sharp" reveal />
      </p>

      <hr style={{ margin: "40px 0" }} />

      {/* Task B */}
      <h2>Magnet Lines Demo</h2>

      <MagnetLines lines={7} />
    </div>
  );
}

export default App;
