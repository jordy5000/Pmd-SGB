import { Get, Query, Header, Controller, Post, Body, Res,Req, HttpStatus, Param, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Response } from 'express';


@Controller('products')
export class ProductsController {


    constructor(private readonly productsService: ProductsService) {}

    @Get ('/allproducts')
    getAllProducts(): string [] {
        return this.productsService.getAllProducts()
    }


    @Post()
    getProducts(@Req() request: Request, @Res() response:Response, @Body() body: []): string {
        console.log(body)
        if ( body['pName'] && body['pType']) {
            const productSaved= this.productsService.saveProduct(body)
            response.status(HttpStatus.OK).send(JSON.stringify(productSaved))
        } else {
            response.status(HttpStatus.BAD_REQUEST).send("This is a Bad request");
        }
        return this.productsService.getProducts()
    }
}