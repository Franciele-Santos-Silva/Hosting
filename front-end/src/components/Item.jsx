import React from "react";

const Item = () => {
  return (
    <a href="/" className="flex flex-col gap-2">
      <img
        src="https://i.pinimg.com/1200x/f1/f8/2f/f1f82f8e688644b908bf9a00ac452eae.jpg"
        alt="Acomodação"
        className="aspect-square rounded-2xl object-cover"
      />

      <div>
        <h3 className="text-1xl font-semibold">Rio de Janeiro, RJ</h3>
        <p className="truncate text-gray-600">
          Desperte todos os dias com a vista deslumbrante da Praia de Copacabana
          neste quarto aconchegante e totalmente equipado. O ambiente oferece
          uma cama de casal queen size com roupa de cama macia e travesseiros
          extras, armário espaçoso para suas roupas, uma escrivaninha funcional
          para trabalho ou estudo, além de uma poltrona confortável para
          momentos de leitura ou descanso. O quarto conta ainda com
          ar-condicionado, ventilador de teto, Wi-Fi de alta velocidade, TV de
          tela plana com canais a cabo e banheiro privativo com amenidades
          básicas, toalhas macias e secador de cabelo. A grande janela
          proporciona uma vista panorâmica para o mar, permitindo que você
          aproveite o nascer do sol, a brisa fresca e o movimento da praia
          diretamente do conforto do quarto. Com decoração moderna e detalhes
          acolhedores, o espaço cria uma atmosfera relaxante e agradável,
          perfeita para descansar após um dia explorando a cidade. A localização
          é privilegiada, a poucos passos da areia, próximo a restaurantes,
          cafés e lojas, com fácil acesso aos principais pontos turísticos do
          Rio.
        </p>
      </div>

      <p>
        <span className="font-semibold"> R$ 550</span> por noite
      </p>
    </a>
  );
};

export default Item;
