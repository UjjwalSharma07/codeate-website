import { ColorRing } from "react-loader-spinner";

const Loading = ({ visible, color }) => {
  return (
    <div className="flex items-center justify-center">
      <ColorRing
        visible={visible}
        height={100}
        width={100}
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={[color, color, color, color, color]}
      />
    </div>
  );
};

export default Loading;
