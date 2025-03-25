import React from "react";

const Divider: React.FC = () => {
  return (
    <div className="flex w-full justify-center max-md:max-w-full">
      <div className="min-w-60 w-[1280px] px-8 max-md:px-5">
        <div className="bg-[rgba(233,234,235,1)] flex min-h-px w-full max-md:max-w-full" />
      </div>
    </div>
  );
};

export default Divider;
