import { useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "utils/constants";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(ROUTES.PRODUCTS);
  }, [navigate]);

  return <Fragment />;
};

export default Home;
