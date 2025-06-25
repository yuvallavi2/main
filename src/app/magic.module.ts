import { NgModule } from '@angular/core';

// import Magic XPA mosules
import { MagicModule, MagicLazyLoaderService, EngineMagicService } from '@magic-xpa/angular';
import { MagicAngularMaterialModule } from '@magic-xpa/angular-material-core';


@NgModule({
  declarations: [],
  exports: [MagicModule,
    MagicAngularMaterialModule,
  ],
  providers: [
    { provide: MagicLazyLoaderService, useClass: MagicLazyLoaderService },
    { provide: EngineMagicService, useClass: EngineMagicService },
  ],
})
export class MagicXPAModule {}
