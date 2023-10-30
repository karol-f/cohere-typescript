/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Cohere from "..";

export interface Generation {
    id: string;
    /** Prompt used for generations. */
    prompt?: string;
    /** List of generated results */
    generations: Cohere.SingleGeneration[];
    meta?: Cohere.ApiMeta;
}
