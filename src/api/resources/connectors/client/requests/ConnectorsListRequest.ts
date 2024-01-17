/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface ConnectorsListRequest {
    /**
     * Maximum number of connectors to return [0, 100].
     */
    limit?: number;
    /**
     * Number of connectors to skip before returning results [0, inf].
     */
    offset?: number;
}