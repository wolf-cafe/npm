import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YipComponent } from './yip/yip.component';

@NgModule({
  imports: [CommonModule],
  declarations: [YipComponent],
  exports: [YipComponent]
})
export class YipModule {}
