/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import * as Cohere from "../../../api";
import * as core from "../../../core";

export const GenerateRequest: core.serialization.Schema<serializers.GenerateRequest.Raw, Cohere.GenerateRequest> =
    core.serialization.object({
        prompt: core.serialization.string(),
        model: core.serialization.string().optional(),
        numGenerations: core.serialization.property("num_generations", core.serialization.number().optional()),
        maxTokens: core.serialization.property("max_tokens", core.serialization.number().optional()),
        truncate: core.serialization.lazy(async () => (await import("../..")).GenerateRequestTruncate).optional(),
        temperature: core.serialization.number().optional(),
        preset: core.serialization.string().optional(),
        endSequences: core.serialization.property(
            "end_sequences",
            core.serialization.list(core.serialization.string()).optional()
        ),
        stopSequences: core.serialization.property(
            "stop_sequences",
            core.serialization.list(core.serialization.string()).optional()
        ),
        k: core.serialization.number().optional(),
        p: core.serialization.number().optional(),
        frequencyPenalty: core.serialization.property("frequency_penalty", core.serialization.number().optional()),
        presencePenalty: core.serialization.property("presence_penalty", core.serialization.number().optional()),
        returnLikelihoods: core.serialization.property(
            "return_likelihoods",
            core.serialization.lazy(async () => (await import("../..")).GenerateRequestReturnLikelihoods).optional()
        ),
        logitBias: core.serialization.property(
            "logit_bias",
            core.serialization.record(core.serialization.string(), core.serialization.number()).optional()
        ),
    });

export declare namespace GenerateRequest {
    interface Raw {
        prompt: string;
        model?: string | null;
        num_generations?: number | null;
        max_tokens?: number | null;
        truncate?: serializers.GenerateRequestTruncate.Raw | null;
        temperature?: number | null;
        preset?: string | null;
        end_sequences?: string[] | null;
        stop_sequences?: string[] | null;
        k?: number | null;
        p?: number | null;
        frequency_penalty?: number | null;
        presence_penalty?: number | null;
        return_likelihoods?: serializers.GenerateRequestReturnLikelihoods.Raw | null;
        logit_bias?: Record<string, number> | null;
    }
}
