import { modelUsuarios } from "@/core/model/modelUsuarios";
import Image from "next/image";

interface propsUsuarios {
  usuario: modelUsuarios;
}

export function Usuarios(props: propsUsuarios) {
  return (
    <div className="flex items-center gap-4 px-7 py-4 rounded-lg bg-slate-100 my-7">
      <div className="w-10 h-10 lg:w-12 lg:h-12 flex justify-center items-center cursor-pointer">
        <Image
          src={props.usuario.imageUrl}
          alt="Imagem usuario"
          width={80}
          height={80}
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="font-medium">{props.usuario.nome}</div>
        <div className="text-gray-600">{props.usuario.email}</div>
      </div>
    </div>
  );
}
