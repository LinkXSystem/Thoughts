import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ComponentFactoryResolver,
  AfterViewInit,
  OnChanges,
  SimpleChange,
} from '@angular/core';
import { ItemPropType } from './item-proptypes';
import { ListDirective } from './list.directive';
import { ItemComponent } from './item-interface.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() list: ItemPropType[];

  @ViewChild(ListDirective) container: ListDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    // this.build();
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    this.container.viewContainerRef.clear();

    let list = changes.list.currentValue;

    if (!list) {
      list = [];
    }

    this.build(list);
  }

  ngAfterViewInit() {
    // this.build();
  }

  build(list) {
    list.forEach(element => {
      const factory = this.componentFactoryResolver.resolveComponentFactory(
        element.component,
      );
      const viewContainerRef = this.container.viewContainerRef;
      const componentRef = viewContainerRef.createComponent(factory);
      (<ItemComponent>componentRef.instance).data = element.data;
    });
  }
}
