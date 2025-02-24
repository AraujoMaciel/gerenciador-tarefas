"use server";
import controleBD from "../controles/controleBD";

export default async function ObterTarefasPorId(id: string) {
  return controleBD.obterTarefasPorId(id);
}
