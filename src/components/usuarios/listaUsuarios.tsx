import { listaUsuarios } from "@/data/constants/usuarios";
import { modelUsuarios } from "@/core/model/modelUsuarios";
import { Usuarios } from "./usuarios";

export function ListarUsuarios() {
  return (
    <div>
      {listaUsuarios.map((usuario: modelUsuarios) => {
        return <Usuarios key={usuario.id} usuario={usuario} />;
      })}
    </div>
  );
}
