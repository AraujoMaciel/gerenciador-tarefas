"use server";
import controleBD from "../controles/controleBD";

export default async function ObterTodasTarefas() {
  return controleBD.obterTodasTarefas();
}
