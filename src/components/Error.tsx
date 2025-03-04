import React from "react";

const Error = ({ error }: { error: string }) => {
  return (
    <div className="m-5 p-4 text-red-700 border border-red-300 bg-red-50 rounded-md text-center">
      {error}
    </div>
  );
};

export default Error;
