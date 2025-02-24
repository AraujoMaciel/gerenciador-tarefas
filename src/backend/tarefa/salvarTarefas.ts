"use server";

import { modelTarefas } from "@/core/model/modelTarefas";
import Id from "@/core/utils/id";
import controleBD from "../controles/controleBD";

export default async function SalvarTarefas(tarefa: modelTarefas) {
  const novaTarefa = {
    ...tarefa,
    id: tarefa.id ?? Id.novoId,
  };
  return controleBD.atualizarTarefas(novaTarefa);
}
