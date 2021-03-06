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
          <Route path="ReactPortfolio-RMurphy/" exact component={AboutMePage}>
            <AboutMePage />
          </Route>
          <Route path="ReactPortfolio-RMurphy/contact" component={ContactPage}>
            <ContactPage />
          </Route>
          <Route path="ReactPortfolio-RMurphy/projects" component={AllProjectsPage}>
            <AllProjectsPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
