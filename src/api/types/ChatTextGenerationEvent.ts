/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Cohere from "..";

export interface ChatTextGenerationEvent extends Cohere.ChatStreamEvent {
    /**
     * The next batch of text generated by the model.
     *
     */
    text: string;
}
