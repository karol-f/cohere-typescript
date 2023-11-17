/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import * as Cohere from "../../../api";
import * as core from "../../../core";

export const ChatStreamRequest: core.serialization.Schema<serializers.ChatStreamRequest.Raw, Cohere.ChatStreamRequest> =
    core.serialization.object({
        message: core.serialization.string(),
        model: core.serialization.string().optional(),
        preambleOverride: core.serialization.property("preamble_override", core.serialization.string().optional()),
        chatHistory: core.serialization.property(
            "chat_history",
            core.serialization
                .list(core.serialization.lazyObject(async () => (await import("../..")).ChatMessage))
                .optional()
        ),
        conversationId: core.serialization.property("conversation_id", core.serialization.string().optional()),
        promptTruncation: core.serialization.property(
            "prompt_truncation",
            core.serialization.lazy(async () => (await import("../..")).ChatStreamRequestPromptTruncation).optional()
        ),
        connectors: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../..")).ChatConnector))
            .optional(),
        searchQueriesOnly: core.serialization.property("search_queries_only", core.serialization.boolean().optional()),
        documents: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../..")).ChatDocument))
            .optional(),
        citationQuality: core.serialization.property(
            "citation_quality",
            core.serialization.lazy(async () => (await import("../..")).ChatStreamRequestCitationQuality).optional()
        ),
        temperature: core.serialization.number().optional(),
    });

export declare namespace ChatStreamRequest {
    interface Raw {
        message: string;
        model?: string | null;
        preamble_override?: string | null;
        chat_history?: serializers.ChatMessage.Raw[] | null;
        conversation_id?: string | null;
        prompt_truncation?: serializers.ChatStreamRequestPromptTruncation.Raw | null;
        connectors?: serializers.ChatConnector.Raw[] | null;
        search_queries_only?: boolean | null;
        documents?: serializers.ChatDocument.Raw[] | null;
        citation_quality?: serializers.ChatStreamRequestCitationQuality.Raw | null;
        temperature?: number | null;
    }
}