import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactPage from "./pages/ContactForm";
import AboutMePage from "./pages/AboutMePage";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AboutMePage />
          </Route>
          <Route path="/Contact">
            <ContactPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
