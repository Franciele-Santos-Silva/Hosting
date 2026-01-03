import { useState } from "react";

const NewPlace = () => {
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");

  return (
    <div className="flex w-full flex-col gap-6 px-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Título</h2>
        <input
          type="text"
          placeholder="Digite o título do seu anúncio"
          className="rounded-full border border-gray-300 px-4 py-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Cidade e País</h2>
        <input
          type="text"
          placeholder="Digite o título do seu anúncio"
          className="rounded-full border border-gray-300 px-4 py-2"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Fotos</h2>

        <div>
          <input
            type="text"
            placeholder="Digite o título do seu anúncio"
            className="rounded-full border border-gray-300 px-4 py-2"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button className="rounded-full border border-gray-300 px-4 py-2">Enviar foto</button>
        </div>
      </div>
    </div>
  );
};

export default NewPlace;
