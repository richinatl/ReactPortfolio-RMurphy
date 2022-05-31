import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactPage from "./pages/ContactForm";
import AboutMePage from "./pages/AboutMePage";
import Layout from "./components/layout/Layout";
import AllProjectsPage from "./pages/AllProjects";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact component={AboutMePage}>
            <AboutMePage />
          </Route>
          <Route path="/contact" component={ContactPage}>
            <ContactPage />
          </Route>
          <Route path="/projects" component={AllProjectsPage}>
            <AllProjectsPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
