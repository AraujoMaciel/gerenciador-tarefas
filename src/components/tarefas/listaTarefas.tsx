import { listaTarefas } from "@/data/constants/tarefas";
import { modelTarefas } from "@/core/model/modelTarefas";
import { Tarefas } from "./tarefas";

interface propsTarefas {
  tarefas?: modelTarefas[];
}

export function ListarTarefas({ tarefas }: propsTarefas) {
  return (
    <div className=" p-4 mx-4 my-10">
      <div className="">
        {listaTarefas.map((tarefa: modelTarefas) => {
          return <Tarefas key={tarefa.id} tarefa={tarefa} />;
        })}
      </div>
    </div>
  );
}
