/**
 * Appends REQUEST async action type
 */
export const PENDING_KEY = "PENDING";
export const REQUEST = (actionType: any) => `${actionType}_PENDING`;

/**
 * Appends SUCCESS async action type
 */
export const FULFILLED_KEY = "FULFILLED";
export const SUCCESS = (actionType: any) => `${actionType}_FULFILLED`;

/**
 * Appends FAILURE async action type
 */
export const REJECTED_KEY = "REJECTED";
export const FAILURE = (actionType: any) => `${actionType}_REJECTED`;
