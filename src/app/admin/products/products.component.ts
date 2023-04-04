import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { AddUpdateProductsComponent } from '../add-update-products/add-update-products.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SnackbarService } from 'src/app/snackbar.service';
import { AddUpdateCategoriesComponent } from '../add-update-categories/add-update-categories.component';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  data:any[]=[]

  displayedColumns: string[] = ['id','imgurl','name' ,'quantity','discount','price','active','action'];
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource!: MatTableDataSource<any>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private cdr:ChangeDetectorRef,
    private _snack:SnackbarService, private _dialog:MatDialog,private _service:AdminService){
  
  }
  
  
  ngOnInit() {
    this.getProduct()
   
  }
  getProduct(){
    this._service.getProducts().subscribe((res:any)=>{
      console.log(res)
      this.data=res
      this.dataSource = new MatTableDataSource(this.data);
      this.cdr.detectChanges()
      this.dataSource.paginator = this.paginator;
    })
  }
  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(AddUpdateProductsComponent);
    dialogRef.afterClosed().subscribe({
      next: (val:any) => {
        if (val) {
          this.getProduct();
        }
      },
    });
  }
  openEditForm(data: any) {
    const dialogRef = this._dialog.open(AddUpdateProductsComponent, {
      data,
    });
  
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getProduct();
        }
      },
    });
  }
  filter(value:string){
    if(value=='')
    {
      this.getProduct()
      return;
  
    }
  this.dataSource.filter=value.trim().toLowerCase()
  }
  deleteCategory(id: number) {
   this._service.deleteProduct(id).subscribe((res:any)=>{
    console.log(res)
    this.getProduct()
    this._snack.openSnackBar('Product Deleted','done')
   })
  }
}
