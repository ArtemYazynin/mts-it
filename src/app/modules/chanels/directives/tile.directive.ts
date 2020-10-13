import { Directive, ElementRef, HostBinding, Input, OnDestroy, OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { ChanelDetails } from '../models/chanel.model';

@Directive({
    selector: "[tile]"
})
export class TileDirective implements OnInit, OnDestroy {
    private _details: ChanelDetails;
    @Input("tile") set details(details: ChanelDetails) {
        this._details = details;
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.setSrc();
    }
    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef,
        private _elRef: ElementRef, private _renderer: Renderer2) {

    }

    ngOnInit(): void {

    }

    private setSrc() {
        const src = this._details.picture.backgrounds[0];
        this._renderer.setAttribute(this._elRef.nativeElement.nextElementSibling, 'src', src);
    }

    ngOnDestroy(): void {

    }
}