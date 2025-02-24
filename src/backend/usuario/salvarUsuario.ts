"use server";

import { modelUsuarios } from "@/core/model/modelUsuarios";
import Id from "@/core/utils/id";
import controleBD from "../controles/controleBD";

export default async function SalvarUsuario(usuario: modelUsuarios) {
  const novoUsuario = {
    ...usuario,
    id: usuario.id ?? Id.novoId,
  };
  return controleBD.atualizarUsuarios(novoUsuario);
}
