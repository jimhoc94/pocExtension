import { z } from 'zod';

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

// Zod schema for z/OS dataset segment
const zosSegmentSchema = z
  .string()
  .min(1, 'Segment cannot be empty')
  .max(8, 'Segment cannot exceed 8 characters')
  .refine(
    (val) => /^[A-Za-z#@$][A-Za-z0-9#@$-]*$/.test(val),
    (val) => ({
      message: `Invalid segment "${val}". Must start with letter or #,@,$ and contain only letters, numbers, #,@,$, and hyphens`
    })
  );

// Zod schema for PDS member name
const pdsMemberSchema = z
  .string()
  .min(1, 'Member name cannot be empty')
  .max(8, 'PDS member name cannot exceed 8 characters')
  .refine(
    (val) => /^[A-Za-z#@$][A-Za-z0-9#@$]*$/.test(val),
    (val) => ({
      message: `Invalid member "${val}". Must start with letter or #,@,$ and contain only letters, numbers, #,@,$ (no hyphens)`
    })
  );

// Zod schema for z/OS dataset name
const zosDatasetSchema = z
  .string()
  .max(44, 'Data set name cannot exceed 44 characters')
  .refine(
    (val) => !val.includes('..'),
    'Data set name cannot contain consecutive periods'
  )
  .refine(
    (val) => !val.endsWith('.'),
    'Data set name cannot end with a period'
  )
  .refine(
    (val) => val.length > 0 && val.split('.').length >= 2,
    'Data set name must have at least two segments separated by periods (e.g., HLQ.DATASET)'
  )
  .refine(
    (val) => {
      if (!val || val.length === 0) return false;
      const segments = val.split('.');
      return segments.length > 0 && segments.every(segment => segment.length > 0 && zosSegmentSchema.safeParse(segment).success);
    },
    (val) => {
      const segments = val.split('.');
      for (const segment of segments) {
        const result = zosSegmentSchema.safeParse(segment);
        if (!result.success) {
          const errorMsg = result.error.issues && result.error.issues.length > 0 
            ? result.error.issues[0].message 
            : `Invalid segment "${segment}"`;
          return { message: errorMsg };
        }
      }
      return { message: 'Invalid segment found' };
    }
  );

// Zod schema for PDS format (DATASET(MEMBER))
const pdsFormatSchema = z
  .string()
  .refine(
    (val) => /^(.+)\(([^)]+)\)$/.test(val),
    'Invalid PDS member syntax. Use format DATASET.NAME(MEMBER)'
  )
  .refine(
    (val) => {
      const match = val.match(/^(.+)\(([^)]+)\)$/);
      if (!match) return false;
      const [, datasetPart, memberPart] = match;
      
      const datasetResult = zosDatasetSchema.safeParse(datasetPart);
      const memberResult = pdsMemberSchema.safeParse(memberPart);
      
      return datasetResult.success && memberResult.success;
    },
    (val) => {
      const match = val.match(/^(.+)\(([^)]+)\)$/);
      if (!match) return { message: 'Invalid PDS format' };
      const [, datasetPart, memberPart] = match;
      
      const datasetResult = zosDatasetSchema.safeParse(datasetPart);
      if (!datasetResult.success) {
        const errorMsg = datasetResult.error.issues && datasetResult.error.issues.length > 0 
          ? datasetResult.error.issues[0].message 
          : `Invalid dataset part: ${datasetPart}`;
        return { message: errorMsg };
      }
      
      const memberResult = pdsMemberSchema.safeParse(memberPart);
      if (!memberResult.success) {
        const errorMsg = memberResult.error.issues && memberResult.error.issues.length > 0 
          ? memberResult.error.issues[0].message 
          : `Invalid member part: ${memberPart}`;
        return { message: errorMsg };
      }
      
      return { message: 'Unknown validation error' };
    }
  );

// Zod schema for comm area name (dataset or PDS format)
const commAreaNameSchema = z.union([
  zosDatasetSchema,
  pdsFormatSchema
]);

// Helper function to convert Zod result to ValidationResult
function zodResultToValidationResult<T>(result: z.SafeParseReturnType<string, T>): ValidationResult {
  if (result.success) {
    return { isValid: true };
  }
  
  // Extract the first error message from Zod issues array
  let errorMessage = 'Validation error';
  
  if (result.error.issues && Array.isArray(result.error.issues) && result.error.issues.length > 0) {
    errorMessage = result.error.issues[0].message;
  }
    
  return {
    isValid: false,
    error: errorMessage
  };
}

// Export validation functions with Zod
export function validateZosDatasetName(datasetName: string): ValidationResult {
  if (!datasetName || datasetName.trim() === '') {
    return { isValid: true };
  }

  const result = zosDatasetSchema.safeParse(datasetName.trim());
  return zodResultToValidationResult(result);
}

export function validatePdsMemberName(memberName: string): ValidationResult {
  if (!memberName || memberName.trim() === '') {
    return { isValid: true };
  }

  const result = pdsMemberSchema.safeParse(memberName.trim());
  return zodResultToValidationResult(result);
}

export function validateCommAreaName(commAreaName: string): ValidationResult {
  if (!commAreaName || commAreaName.trim() === '') {
    return { isValid: true };
  }

  const trimmed = commAreaName.trim();
  
  // Check if it's PDS format first
  if (trimmed.includes('(') && trimmed.includes(')')) {
    const result = pdsFormatSchema.safeParse(trimmed);
    return zodResultToValidationResult(result);
  } else {
    const result = zosDatasetSchema.safeParse(trimmed);
    return zodResultToValidationResult(result);
  }
}