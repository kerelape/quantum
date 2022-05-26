
export type JsonObject = { [key: string]: JsonValue | null } 

export type JsonValue = string | number | boolean | JsonValue[] | JsonObject
