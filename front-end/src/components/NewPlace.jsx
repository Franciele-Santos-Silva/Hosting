import { useState } from "react";
import Perks from "./Perks";

const NewPlace = () => {
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [photos, setPhotos] = useState("");
  const [description, setDescription] = useState("");
 

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-6 px-8">
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="text-2xl font-bold">
          Título
        </label>
        <input
          type="text"
          placeholder="Digite o título do seu anúncio"
          className="rounded-full border border-gray-300 px-4 py-2"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="city" className="text-2xl font-bold">
          Cidade e País
        </label>
        <input
          type="text"
          placeholder="Digite a cidade e país do seu anúncio"
          className="rounded-full border border-gray-300 px-4 py-2"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="photos" className="ml-2 text-2xl font-bold">
          Fotos
        </label>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Adicione uma foto via link"
            className="grow rounded-full border border-gray-300 px-4 py-2"
            id="photos"
            value={photos}
            onChange={(e) => setPhotos(e.target.value)}
          />
          <button className="cursor-pointer rounded-full border border-gray-300 bg-gray-100 px-4 py-2 transition hover:bg-gray-200">
            Enviar foto
          </button>
        </div>

        <div className="mt-2 grid grid-cols-5 gap-4">
          <label
            htmlFor="file"
            className="flex aspect-square cursor-pointer items-center justify-center gap-2 rounded-2xl border border-gray-300 hover:bg-gray-100"
          >
            <input type="file" id="file" className="hidden" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>
            Upload
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="description" className="text-2xl font-bold">
          Descrição
        </label>
        <textarea
          placeholder="Digite a descrição do seu anúncio"
          className="h-56 resize-none rounded-2xl border border-gray-300 px-4 py-2"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="perks" className="ml-2 text-2xl font-bold">
          Comodidades
        </label>

        <Perks />
      </div>
    </form>
  );
};

export default NewPlace;
