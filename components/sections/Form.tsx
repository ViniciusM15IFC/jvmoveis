"use client";

import { useState } from "react";
import { Send } from "lucide-react";

interface FormState {
  nome: string;
  telefone: string;
  ambiente: string;
  mensagem: string;
}

const ambientes = [
  "Dormitórios",
  "Cozinhas",
  "Salas",
  "Escritórios",
  "Áreas de Serviço",
  "E Muito Mais!",
];

export function Form() {
  const [form, setForm] = useState<FormState>({
    nome: "",
    telefone: "",
    ambiente: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement |
      HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const texto =
      `Olá! Meu nome é ${form.nome}.%0A` +
      `Ambiente de interesse: ${form.ambiente}.%0A` +
      `Telefone: ${form.telefone}.%0A` +
      `Mensagem: ${form.mensagem}`;

    window.open(
      `https://wa.me/5548991077606?text=${texto}`,
      "_blank"
    );
  };

  return (
    <section
      id="orcamento"
      className="scroll-mt-24 px-8 md:px-16 py-20 bg-white text-black"
    >
      <div className="max-w-xl mx-auto">

        <h2 className="font-display text-3xl mb-2 text-center">
          PEÇA SEU
        </h2>

        <h2 className="font-display text-3xl text-orange-500 mb-8 text-center">
          ORÇAMENTO
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >

          <input
            type="text"
            name="nome"
            required
            placeholder="Seu nome"
            value={form.nome}
            onChange={handleChange}
            className="border-2 border-black px-4 py-3 font-body text-sm focus:outline-none focus:border-orange-500"
          />

          <input
            type="tel"
            name="telefone"
            required
            placeholder="Seu telefone"
            value={form.telefone}
            onChange={handleChange}
            className="border-2 border-black px-4 py-3 font-body text-sm focus:outline-none focus:border-orange-500"
          />

          <select
            name="ambiente"
            required
            value={form.ambiente}
            onChange={handleChange}
            className="border-2 border-black px-4 py-3 font-body text-sm focus:outline-none focus:border-orange-500 bg-white"
          >
            <option value="">
              Ambiente de interesse
            </option>

            {ambientes.map((ambiente) => (
              <option
                key={ambiente}
                value={ambiente}
              >
                {ambiente}
              </option>
            ))}
          </select>

          <textarea
            name="mensagem"
            rows={4}
            placeholder="Conte um pouco sobre o seu projeto"
            value={form.mensagem}
            onChange={handleChange}
            className="border-2 border-black px-4 py-3 font-body text-sm focus:outline-none focus:border-orange-500 resize-none"
          />

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-orange-500 text-black font-display text-sm px-8 py-4 hover:bg-orange-400 transition-colors"
          >
            <Send size={18} />

            ENVIAR PELO WHATSAPP
          </button>

        </form>
      </div>
    </section>
  );
}