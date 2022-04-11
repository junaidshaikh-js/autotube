import { Router } from "./Router";
import { Header, Navigation, Toast } from "./component";
import "./styles.scss";
import { useToast } from "./context";

function App() {
  const {
    toastMessage: { type, message },
  } = useToast();

  return (
    <div>
      <Header />
      <Navigation />
      <Router />
      <Toast type={type} message={message} />
    </div>
  );
}

export default App;
