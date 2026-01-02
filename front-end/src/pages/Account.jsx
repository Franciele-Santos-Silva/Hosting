import React from "react";

const Account = () => {
  return (
    <section className="p-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4">
        <div className="flex gap-4">
          <button className="hover:bg-primary-400 cursor-pointer rounded-full px-4 py-2 transition hover:text-white">
            Perfil
          </button>
          <button>Reservas</button>
          <button>Lugares</button>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p>Logado como Franciele (fran@gmail.com) </p>
        </div>

        <button>Logout</button>
      </div>
    </section>
  );
};

export default Account;
