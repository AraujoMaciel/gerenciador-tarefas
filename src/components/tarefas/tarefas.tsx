import { modelTarefas } from "@/core/model/modelTarefas";
import Image from "next/image";
import Link from "next/link";

interface propsTarefas {
  tarefa: modelTarefas;
}

export function Tarefas(props: propsTarefas) {
  return (
    <div className="flex justify-between px-7 py-4 rounded-lg  bg-slate-200 my-7">
      <div className="flex flex-col gap-2">
        <p className="font-medium">{props.tarefa.titulo}</p>
        <p className="text-gray-600">{props.tarefa.status}</p>
        {/* <p>{props.tarefa.descricao}</p> */}
      </div>
      <div className="flex gap-2 items-center">
        <Link
          href="/infoTarefa"
          className="w-10 h-10 lg:w-12 lg:h-12 flex justify-center items-center cursor-pointer"
        >
          <Image
            src="/icons/preview.png"
            alt="icone editar"
            width={40}
            height={40}
          />
        </Link>
        <div className="w-10 h-10 lg:w-12 lg:h-12 flex justify-center items-center cursor-pointer">
          <Image
            src="/icons/delete.png"
            alt="icone deletar"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
}
