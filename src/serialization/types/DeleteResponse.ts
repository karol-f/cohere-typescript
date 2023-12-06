/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Cohere from "../../api";
import * as core from "../../core";

export const DeleteResponse: core.serialization.Schema<serializers.DeleteResponse.Raw, Cohere.DeleteResponse> =
    core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace DeleteResponse {
    type Raw = Record<string, unknown>;
}