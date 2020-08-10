import {ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector} from '@angular/core';
import {ModalComponent} from '../components/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modalComponent: ComponentRef<ModalComponent>;

  constructor(
    private cmpFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private inject: Injector
  ) { }

  openModal(title: string, deleteText: string, id: string): ModalComponent {
    const cmpFactory = this.cmpFactoryResolver.resolveComponentFactory(ModalComponent);
    this.modalComponent = cmpFactory.create(this.inject);
    this.modalComponent.instance.id = id;
    this.modalComponent.instance.deleteText = deleteText;
    this.modalComponent.instance.title = title;

    this.appRef.attachView(this.modalComponent.hostView);

    const domElem = (this.modalComponent.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    return this.modalComponent.instance;
  }

  closeModal(): void {
    this.appRef.detachView(this.modalComponent.hostView);
  }
}
