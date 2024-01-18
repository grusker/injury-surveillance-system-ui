import { SportBranch } from "./enums/SportBranch";

export class SportInfoRequest {
    branch: SportBranch;
    teamId: Number;
    position: String;
    sportAge: Number;
    weeklyTrainingHours: Number;
}