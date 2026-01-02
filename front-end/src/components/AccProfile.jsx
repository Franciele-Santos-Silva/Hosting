import React from "react";

const AccProfile = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <p>Logado como Franciele (fran@gmail.com) </p>

      <button className="bg-primary-400 min-w-44 cursor-pointer rounded-full px-4 py-2 text-white transition">
        Logout
      </button>
    </div>
  );
};

export default AccProfile;
