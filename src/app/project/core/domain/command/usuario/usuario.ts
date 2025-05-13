export interface CreateUsuarioCommand extends LoginCommand {
    id?: number
}

export interface LoginCommand {
    nome?: string,
    senha?: string
}