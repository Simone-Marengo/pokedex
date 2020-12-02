export class Pokemon {
    id: number;
    name: string;
    is_main_series: boolean;
    generation: {
        name: string,
        url: string
    };
    names: {
        name: string,
        lenguage: {
            name: string,
            url: string
        }
    }[];
    effect_entries: {
        effect: string;
        short_effect: string;
        lenguage: {
            name: string,
            url: string
        }
    }[];
    effect_changes: {
        version_group: {
            name: string,
            url: string
        },
        effect_entries: {
            effect: string,
            language: {
                name: string,
                url: string
            }
        }[]
    }[];
    flavor_text_emtries: {
        flavor_text: string,
        language: {
            name: string,
            url: string
        },
        version_group: {
            name: string,
            url: string
        }
    }[];
    pokemon: {
        is_hidden: boolean,
        slot: number,
        pokemon: {
            name: string,
            url: string
        }
    }[];
}
