import { Pagina } from "@/components/template/pagina";
import { ListarTarefas } from "@/components/tarefas/listaTarefas";

export default function Detalhes() {
  return (
    <div>
      <Pagina>
        <ListarTarefas />
      </Pagina>
    </div>
  );
}
