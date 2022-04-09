import { Router } from "./Router";
import { Header, Navigation } from "./component";
import "./styles.scss";

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Router />
    </div>
  );
}

export default App;
