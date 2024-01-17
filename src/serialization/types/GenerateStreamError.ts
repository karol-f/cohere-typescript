/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Cohere from "../../api";
import * as core from "../../core";

export const GenerateStreamError: core.serialization.ObjectSchema<
    serializers.GenerateStreamError.Raw,
    Cohere.GenerateStreamError
> = core.serialization
    .object({
        index: core.serialization.number().optional(),
        isFinished: core.serialization.property("is_finished", core.serialization.boolean()),
        finishReason: core.serialization.property(
            "finish_reason",
            core.serialization.lazy(async () => (await import("..")).FinishReason)
        ),
        err: core.serialization.string(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("..")).GenerateStreamEvent));

export declare namespace GenerateStreamError {
    interface Raw extends serializers.GenerateStreamEvent.Raw {
        index?: number | null;
        is_finished: boolean;
        finish_reason: serializers.FinishReason.Raw;
        err: string;
    }
}
