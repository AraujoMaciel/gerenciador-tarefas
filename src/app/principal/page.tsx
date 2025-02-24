import { Pagina } from "@/components/template/pagina";
import { ListarTarefas } from "@/components/tarefas/listaTarefas";
// import { ListarUsuarios } from "@/components/usuarios/listaUsuarios";

export default function Principal() {
  return (
    <div>
      <Pagina>
        {/* <ListarUsuarios /> */}
        <ListarTarefas />
      </Pagina>
    </div>
  );
}
