import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class DashboardService {
    disableNextButton = new Subject<boolean>();
}