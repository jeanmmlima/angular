export class Usuario {

  constructor(
    public id: number,
    public nome: string,
    public descricao: string,
    public email: string,
    public contato: string,
    public estacao_trabalho: string,
    public link_lattes: string
  ){}
}
