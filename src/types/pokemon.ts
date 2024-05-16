
export interface Pokemon {
    id:         string;
    created_at: Date;
    updated_at: Date;
    name:       string;
    pokemon_id: number;
    types:      string[];
    abilities:  string[];
    base_stats: BaseStats;
    height:     number;
    weight:     number;
    sprite_url: string;
}

export interface BaseStats {
    hp:                number;
    attack:            number;
    defense:           number;
    'special-attack':  number;
    'special-defense': number;
    speed:             number;
}
