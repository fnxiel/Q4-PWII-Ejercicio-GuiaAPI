export interface IListadoPokemon{
    count: number
    next: string
    previous: string | null
    results: IPokemonResumen[]
}

export interface IPokemonResumen{
    name: string
    url: string
}