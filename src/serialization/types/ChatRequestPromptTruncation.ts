/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Cohere from "../../api";
import * as core from "../../core";

export const ChatRequestPromptTruncation: core.serialization.Schema<
    serializers.ChatRequestPromptTruncation.Raw,
    Cohere.ChatRequestPromptTruncation
> = core.serialization.enum_(["OFF", "AUTO"]);

export declare namespace ChatRequestPromptTruncation {
    type Raw = "OFF" | "AUTO";
}
