import { BodyInfoRequest } from "./BodyInfoRequest";
import { SportInfoRequest } from "./SportInfoRequest";

export class AthleteRequest {
    name: String;
    surname: String;
    email: String;
    mobile: String;
    height: Number;
    weight: Number;
    age: Number;
    gender: String;
    dominantSide: String;
    physioId: Number;
    sportInfo: SportInfoRequest;
    bodyInfo: BodyInfoRequest;
}