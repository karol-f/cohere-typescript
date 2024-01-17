/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Cohere from "../../../../api";
import * as core from "../../../../core";

export const DatasetsListResponse: core.serialization.ObjectSchema<
    serializers.DatasetsListResponse.Raw,
    Cohere.DatasetsListResponse
> = core.serialization.object({
    datasets: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).Dataset))
        .optional(),
});

export declare namespace DatasetsListResponse {
    interface Raw {
        datasets?: serializers.Dataset.Raw[] | null;
    }
}
