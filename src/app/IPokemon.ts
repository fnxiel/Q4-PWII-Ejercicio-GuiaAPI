export interface IPokemon{
    id: number //The identifier for this resource.
    name: string //The name for this resource.
    moves: IPokemonMove[] //A list of moves along with learn methods and level details pertaining to specific version groups.
    sprites: IPokemonSprite
}
export interface IPokemonMove{
    move: IDetalleMove
}
export interface IDetalleMove{
    id: number
    name: string
}
export interface IPokemonSprite{
    front_default: string
}