export interface Sheet {
    _id?: string;
    name: string;
    archetype: string;
    appearance: string;
    skills: {
        fighting: number;
        movement: number;
        social: number;
        learning: number;
        tech: number;
    };
}
