import {NgModule, NgModuleRef} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";


import {DynamicModule} from 'ng-dynamic-component';

import {ComponentListMagicService, MagicModule, ExitMagicService} from "@magic-xpa/angular";
import {magicGenComponents, magicGenCmpsHash, title, LazyLoadModulesMap} from './component-list.g';
import {MagicAngularMaterialModule} from "@magic-xpa/angular-material-core";
import {NgxCurrencyDirective, NgxCurrencyInputMode, provideEnvironmentNgxCurrency} from "ngx-currency";
import { NgxMaskModule, IConfig } from "ngx-mask";

@NgModule({
  declarations: [
    ...magicGenComponents
  ],
  exports: [
    ...magicGenComponents,
    MagicModule
  ],
  imports: [
    // Angular Modules
    CommonModule,
    ReactiveFormsModule,
    RouterModule,


    // Magic Modules
    MagicModule,
    DynamicModule,
    NgxCurrencyDirective,
    NgxMaskModule.forRoot(),

    // Material Modules
    MagicAngularMaterialModule,

  ],
  providers: [
     ExitMagicService ,
    provideEnvironmentNgxCurrency({
      align: "right",
      allowNegative: true,
      allowZero: true,
      decimal: ".",
      precision: 2,
      prefix: "",
      suffix: "",
      thousands: ",",
      nullable: true,
      min: undefined,
      max: undefined,
      inputMode: NgxCurrencyInputMode.Financial
    }),
  ],
})
export class MagicGenLibModule {
  constructor(componentList: ComponentListMagicService, private moduleRef: NgModuleRef<any>) {
    componentList.addComponents(magicGenCmpsHash, moduleRef);
    componentList.title = title;
    componentList.lazyLoadModulesMap = LazyLoadModulesMap;
  }
}
