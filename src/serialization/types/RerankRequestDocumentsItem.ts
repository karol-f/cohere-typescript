/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Cohere from "../../api";
import * as core from "../../core";

export const RerankRequestDocumentsItem: core.serialization.ObjectSchema<
    serializers.RerankRequestDocumentsItem.Raw,
    Cohere.RerankRequestDocumentsItem
> = core.serialization.object({
    text: core.serialization.string(),
});

export declare namespace RerankRequestDocumentsItem {
    interface Raw {
        text: string;
    }
}