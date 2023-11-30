import { Event } from "./event";
import { Participant } from "./participant";

export class Participation {
    constructor(
        public _id:string,
        public id: string,
        public date:Date,
        public nbPrs:number,
        public participant: Participant,
        public evenement: Event
    ){}
}
