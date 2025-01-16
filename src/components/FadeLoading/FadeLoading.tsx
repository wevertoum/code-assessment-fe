import React from "react";

interface Props {
  loading: boolean;
}

const FadeLoading: React.FC<Props> = ({ loading }) => {
  return (
    loading && (
      <div
        data-testid="fade-loading-overlay"
        className="z-50 absolute top-0 left-0 w-full h-full bg-black/35 bg-opacity-50 flex justify-center items-center"
      >
        <div className="loader-custom"></div>
      </div>
    )
  );
};

export default FadeLoading;
