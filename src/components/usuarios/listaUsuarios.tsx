import { listaUsuarios } from "@/data/constants/usuarios";
import { modelUsuarios } from "@/core/model/modelUsuarios";
import { Usuarios } from "./usuarios";

export function ListarUsuarios() {
  return (
    <div className=" p-4 mx-4 my-10">
      <div>
        {listaUsuarios.map((usuario: modelUsuarios) => {
          return <Usuarios key={usuario.id} usuario={usuario} />;
        })}
      </div>
    </div>
  );
}
