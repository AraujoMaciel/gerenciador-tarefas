"use server";

import controleBD from "../controles/controleBD";

export default async function ObterTodosUsuarios() {
  return controleBD.obterTodosUsuarios();
}
