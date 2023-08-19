import { SportBranch } from "./enums/SportBranch";

export class SportInfoRequest {
    branch: SportBranch;
    team: String;
    position: String;
    sportAge: Number;
    weeklyTrainingHours: Number;
}