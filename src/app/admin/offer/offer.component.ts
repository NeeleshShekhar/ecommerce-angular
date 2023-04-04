import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddUpdateOfferComponent } from '../add-update-offer/add-update-offer.component';
import { AdminService } from '../admin.service';
import { SnackbarService } from 'src/app/snackbar.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent {
 data:any[]=[]

displayedColumns: string[] = ['id', 'name', 'desc', 'amount','active','action'];
//dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
dataSource!: MatTableDataSource<any>;

@ViewChild(MatPaginator) paginator!: MatPaginator;
constructor(private cdr:ChangeDetectorRef,private _dialog:MatDialog,
  private _service:AdminService,private _snack:SnackbarService){

}
ngOnInit() {
  this.getOffer()
}
getOffer(){
  this._service.getOffer().subscribe((res:any)=>{
    console.log(res)
    this.dataSource = new MatTableDataSource(res);
    this.cdr.detectChanges()
    this.dataSource.paginator = this.paginator;
  })
 
}
openAddEditEmpForm() {
  const dialogRef = this._dialog.open(AddUpdateOfferComponent);
  dialogRef.afterClosed().subscribe({
    next: (val:any) => {
      if (val) {
        // this.getEmployeeList();
        this.getOffer()
      }
    },
  });
}
filter(value:string){
  if(value=='')
  {
    this.getOffer()
    return;

  }
this.dataSource.filter=value.trim().toLowerCase()
}
deleteCategory(id: number) {
  this._service.deleteOffer(id).subscribe((res:any)=>{
   console.log(res)
   this.getOffer()
   this._snack.openSnackBar('Category Deleted','done')
  })
 }
 openEditForm(data: any) {
  const dialogRef = this._dialog.open(AddUpdateOfferComponent, {
    data,
  });

  dialogRef.afterClosed().subscribe({
    next: (val) => {
      if (val) {
        this.getOffer();
      }
    },
  });
}
}
