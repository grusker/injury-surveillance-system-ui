import { BodySide } from "./enums/BodySide";

export class BodyInfoRequest {
    height: Number;
    weight: Number;
    dominantSide: BodySide;
    lowerExtremityDominantSide: BodySide;
    upperExtremityDominantSide: BodySide;
    lowerExtremityLength: Number;
    upperExtremityLength: Number;
}