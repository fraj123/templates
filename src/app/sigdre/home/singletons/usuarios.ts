export interface Usuario{
    id?: number;
    paterno?: string;
    materno?: string;
    nombres?: string;
    username?: string;
    email?: string;
    id_cargo?: number;
    id_estado?: number;
    updated_at?: string;
    created_at?: string;
    cargos?: {
        id?: number;
        name?: string;
        created_at?: string;
        updated_at?: string;
    };
    estados?:{
        id?: number;
        name?: string;
    };
}