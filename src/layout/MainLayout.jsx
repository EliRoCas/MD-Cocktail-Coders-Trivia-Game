import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "./MainLayout.scss";

const MainLayout = ({children}) => {
  return (
    <div className="layout">
      <Header className="header" />
      <main> {children}</main>
      <Footer className="footer" />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
