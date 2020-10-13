import { ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class LazyTab {
    name: string;
    isLoaded$ = new BehaviorSubject<boolean>(false);
    component$ = new BehaviorSubject<any>(undefined);
    getComponentInstance: (viewContainer: ViewContainerRef) => any;
}