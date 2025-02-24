"use server";
import controleBD from "../controles/controleBD";

export default async function obterUsuariosPorId(id: string) {
  return controleBD.obterUsuariosPorId(id);
}
