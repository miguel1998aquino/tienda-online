import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/core/models/product.interface';
import { ProductService } from 'src/app/core/services/product.service';
import { DetalleProductComponent } from '../detalle-product/detalle-product.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productos: Product[] = [];

  constructor(
    public dialog: MatDialog,
    private productService: ProductService) {}

  ngOnInit(): void {
    this.traerProductos();
  }

  traerProductos() {
    this.productService.verProducts().subscribe((res) => {
      res.forEach((element: any) => {
        // this.productService.categorias()
        this.productos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        });
      });

      this.productos.forEach((product)=>{
          this.productService.categorias(product.categoria).subscribe((categori)=>{
          product.categoria=categori.payload.data().nombre;
        })
    });
    })
  }

  detalle(id:any){
    const dialogRef = this.dialog.open(DetalleProductComponent, {
      height: '530px',width:'400px',
          data: id,
        });

        dialogRef.afterClosed().subscribe((result) => {
          console.log(`Dialog result: ${result}`);
        });
      }

}
