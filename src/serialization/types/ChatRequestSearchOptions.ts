/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Cohere from "../../api";
import * as core from "../../core";

export const ChatRequestSearchOptions: core.serialization.ObjectSchema<
    serializers.ChatRequestSearchOptions.Raw,
    Cohere.ChatRequestSearchOptions
> = core.serialization.object({
    model: core.serialization.unknown().optional(),
    temperature: core.serialization.unknown().optional(),
    maxTokens: core.serialization.property("max_tokens", core.serialization.unknown().optional()),
    preamble: core.serialization.unknown().optional(),
});

export declare namespace ChatRequestSearchOptions {
    interface Raw {
        model?: unknown | null;
        temperature?: unknown | null;
        max_tokens?: unknown | null;
        preamble?: unknown | null;
    }
}
