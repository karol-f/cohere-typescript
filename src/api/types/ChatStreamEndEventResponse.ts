/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Cohere from "..";

/**
 * The consolidated response from the model. Contains the generated reply and all the other information streamed back in the previous events.
 *
 */
export type ChatStreamEndEventResponse = Cohere.NonStreamedChatResponse | Cohere.SearchQueriesOnlyResponse;
