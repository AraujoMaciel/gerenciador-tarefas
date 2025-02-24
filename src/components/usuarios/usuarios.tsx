import { modelUsuarios } from "@/core/model/modelUsuarios";
import Image from "next/image";

interface propsUsuarios {
  usuario: modelUsuarios;
}

export function Usuarios(props: propsUsuarios) {
  return (
    <div>
      <Image
        src={props.usuario.imageUrl}
        alt="Imagem usuario"
        width={80}
        height={80}
      />
      <div>{props.usuario.nome}</div>
      <div>{props.usuario.email}</div>
    </div>
  );
}
