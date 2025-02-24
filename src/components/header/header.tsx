import Image from "next/image";
import { modelUsuarios } from "@/core/model/modelUsuarios";

interface propsHeader {
  usuarioHeader?: modelUsuarios;
}

export function Header(props: propsHeader) {
  return (
    <div className="w-screen lg:w-full bg-basic-white flex justify-between px-7 py-4 items-center shadow-md mb-4">
      <div className="text-xs flex flex-col gap-2">
        <h2>
          Que bom ver você, <div className="font-semibold">user</div>
        </h2>
        <h3 className="font-semibold text-base">Título da Seção</h3>
      </div>
      <div className="w-10 cursor-pointer">
        <Image
          src="/icons/userPerfil.png"
          alt="Perfil do usuario"
          width={80}
          height={80}
        />
      </div>
    </div>
  );
}
