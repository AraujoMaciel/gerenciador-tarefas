import { DetalhaTarefa } from "@/components/tarefas/detalheTarefa";
import { PaginaSimples } from "@/components/template/paginaSimples";

export default function InfoTarefas() {
  return (
    <div>
      <PaginaSimples>
        <DetalhaTarefa />
      </PaginaSimples>
    </div>
  );
}
