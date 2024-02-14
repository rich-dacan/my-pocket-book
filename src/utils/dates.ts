export function dateFormatBRString(data: string): string {
  const dataTratada = new Date(data);
  return dataTratada.toLocaleDateString("pt-BR");
}
