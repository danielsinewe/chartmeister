import { Ajv, type ErrorObject } from "ajv";
import schema from "../chartmeister-schema.json" with { type: "json" };

export type ChartmeisterSchema = typeof schema;

export const schemaVersion: number = (schema as { version?: number }).version ?? -1;

export interface ValidationResult {
  valid: boolean;
  errors?: ErrorObject[];
}

export { schema };

export function validate(file: unknown): ValidationResult {
  const ajv = new Ajv({ allErrors: true, strict: false });
  const validateFn = ajv.compile(schema);
  const valid = validateFn(file);
  return { valid: Boolean(valid), errors: validateFn.errors ?? undefined };
}

export function migrate<T>(file: T): T {
  return file;
}

