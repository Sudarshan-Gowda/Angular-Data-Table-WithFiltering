import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatInputModule, MatTableModule, MatPaginatorModule],
  exports: [CommonModule, MatToolbarModule, MatInputModule, MatTableModule, MatPaginatorModule],
})
export class MaterialModule { }
