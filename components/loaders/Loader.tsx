import { ColorRing } from "react-loader-spinner";

export const GreenLoader = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors = {["#B22222", "#FF6347", "#B22222", "#FF6347", "#B22222"]}
    />
  );
};

export const ButtonGreenLoader = () => {
  return (
    <ColorRing
      visible={true}
      height="30"
      width="40"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors = {["#B22222", "#FF6347", "#B22222", "#FF6347", "#B22222"]}
    />
  );
};
