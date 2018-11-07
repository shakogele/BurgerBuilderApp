import React, { PureComponent } from "react";
import sts from "./App.css";

import Layout from "../components/Layout/Layout";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";

export const AuthContext = React.createContext(false);

class App extends PureComponent {

  render() {
    return (
      <div className={sts.App}>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
