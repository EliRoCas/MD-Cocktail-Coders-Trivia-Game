import { useSelector } from "react-redux";

const useLoadingStatus = () => {
  return useSelector((state) => state.cocktail.loading);
};

export default useLoadingStatus;