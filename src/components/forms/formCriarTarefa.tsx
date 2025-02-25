"use client";
import Image from "next/image";
import Link from "next/link";
import { modelTarefas } from "@/core/model/modelTarefas";
import ComandosBD from "@/backend/comandos";
import { useState } from "react";
import { useEffect } from "react";

export default function FormCriarTarefa() {
  // const [tasks, setTasks] = useState<modelTarefas[]>([])
  const [task, setTask] = useState<modelTarefas>();

  useEffect(() => {
    // ComandosBD.comandosTarefas.ObterTodasTarefas().then(setTasks);
    salvar();
  }, []);

  async function salvar() {
    if (!task) {
      console.log("não salvou");
      return;
    }
    await ComandosBD.comandosTarefas.SalvarTarefas(task);
    console.log("entrou comando salvar");
    // const tasks = await ComandosBD.comandosTarefas.ObterTodasTarefas();
  }

  return (
    <div className="h-auto lg:h-full bg-basic-white flex justify-center items-center">
      <div className="md:mx-auto md:w-full md:h-auto">
        <main className="bg-slate-100 drop-shadow-xl p-10 flex flex-col justify-center items-center rounded-lg">
          <div className="mt-7 mb-20 lg:mb-12 flex flex-col justify-center items-center gap-7 lg:w-44">
            {/* <p className="text-gray-700 md:text-lg lg:text-xl">Cadastre-se</p> */}
            <h2 className="font-semibold text-xl lg:text-3xl lg:w-52">
              Criar Tarefa
            </h2>
          </div>
          <form
            // action={salvar()}
            className="flex flex-col gap-5 lg:gap-7 mb-16 lg:mb-7 items-center md:gap-7"
          >
            <div className="flex flex-col gap-2 h-8 items-center">
              <input
                type="text"
                // name="nome"
                id="titulo"
                placeholder="Título da Tarefa"
                className="rounded-lg px-5 border lg:text-lg lg:py-4 lg:h-10 lg:w-72"
              />
            </div>

            <div className="flex flex-col gap-2 h-8 items-center">
              <input
                type="text"
                // name="email"
                id="descricao"
                {...setTask}
                placeholder="Descrição"
                className="rounded-lg px-5 border lg:text-lg lg:py-4 lg:h-10 lg:w-72"
              />
            </div>

            <div className="flex flex-col gap-2 h-8 items-center">
              <input
                type="text"
                // name="senhaCadastro"
                readOnly
                defaultValue="Criada"
                id="status"
                placeholder="status"
                className="hidden rounded-lg px-5 border lg:text-lg lg:py-4 lg:h-10 lg:w-72"
              />
            </div>

            <div className="flex gap-5 items-center justify-center mt-10 lg:mt-5">
              <button
                className="bg-primary-blue text-white w-32 p-2 rounded-lg hover:bg-dark-blue transition-all duration-200 lg:w-40 lg:text-lg"
                type="submit"
                onClick={() => {
                  setTask(task);
                  //   salvar();
                  //   console.log(task);
                }}
              >
                Criar
              </button>
              <Link href="/principal">
                <button className="bg-primary-blue text-white w-32 p-2 rounded-lg hover:bg-dark-blue transition-all duration-200 lg:w-40 lg:text-lg">
                  Voltar
                </button>
              </Link>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
