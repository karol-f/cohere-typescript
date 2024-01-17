/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Cohere from "../../api";
import * as core from "../../core";

export const GenerateStreamText: core.serialization.ObjectSchema<
    serializers.GenerateStreamText.Raw,
    Cohere.GenerateStreamText
> = core.serialization
    .object({
        text: core.serialization.string(),
        index: core.serialization.number().optional(),
        isFinished: core.serialization.property("is_finished", core.serialization.boolean()),
    })
    .extend(core.serialization.lazyObject(async () => (await import("..")).GenerateStreamEvent));

export declare namespace GenerateStreamText {
    interface Raw extends serializers.GenerateStreamEvent.Raw {
        text: string;
        index?: number | null;
        is_finished: boolean;
    }
}
