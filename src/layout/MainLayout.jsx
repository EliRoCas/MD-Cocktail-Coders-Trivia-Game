import PropTypes from "prop-types";
import useIsMobile from "../hooks/useIsMobile";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "./mainLayout.scss";

const MainLayout = ({ children }) => {
  const isMobile = useIsMobile();

  return (
    <div className={`layout ${isMobile ? "mobile" : "desktop"}`}>
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
