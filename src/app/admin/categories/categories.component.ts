import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddUpdateCategoriesComponent } from '../add-update-categories/add-update-categories.component';
import { AdminService } from '../admin.service';
import { SnackbarService } from 'src/app/snackbar.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  data:any[]=[]

displayedColumns: string[] = ['id','name', 'imgurl','active','action'];
//dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
dataSource!: MatTableDataSource<any>;

@ViewChild(MatPaginator) paginator!: MatPaginator;
constructor(private cdr:ChangeDetectorRef,
  private _snack:SnackbarService, private _dialog:MatDialog,private _service:AdminService){

}


ngOnInit() {
  this.getCategory()
 
}
getCategory(){
  this._service.getCategory().subscribe((res:any)=>{
    console.log(res)
    this.data=res
    this.dataSource = new MatTableDataSource(this.data);
    this.cdr.detectChanges()
    this.dataSource.paginator = this.paginator;
  })
}
openAddEditEmpForm() {
  const dialogRef = this._dialog.open(AddUpdateCategoriesComponent);
  dialogRef.afterClosed().subscribe({
    next: (val:any) => {
      if (val) {
        this.getCategory();
      }
    },
  });
}
openEditForm(data: any) {
  const dialogRef = this._dialog.open(AddUpdateCategoriesComponent, {
    data,
  });

  dialogRef.afterClosed().subscribe({
    next: (val) => {
      if (val) {
        this.getCategory();
      }
    },
  });
}
filter(value:string){
  if(value=='')
  {
    this.getCategory()
    return;

  }
this.dataSource.filter=value.trim().toLowerCase()
}
deleteCategory(id: number) {
 this._service.deleteCategory(id).subscribe((res:any)=>{
  console.log(res)
  this.getCategory()
  this._snack.openSnackBar('Category Deleted','done')
 })
}
}
