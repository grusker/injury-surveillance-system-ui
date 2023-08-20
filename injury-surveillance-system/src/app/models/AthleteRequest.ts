import { BodyInfoRequest } from "./BodyInfoRequest";
import { SportInfoRequest } from "./SportInfoRequest";

export class AthleteRequest {
    name: String;
    surname: String;
    email: String;
    mobile: String;
    age: Number;
    gender: String;
    physioId: Number;
    sportInfo: SportInfoRequest;
    bodyInfo: BodyInfoRequest;
}