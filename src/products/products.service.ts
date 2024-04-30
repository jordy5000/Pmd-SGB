import { Injectable } from '@nestjs/common';
import { AppService } from '../app.service';

@Injectable()
export class ProductsService {
    constructor(private readonly AppService: AppService){}

    getProducts(): string {
        return this.AppService.getHello() + 'cars, bide'

    }

    getAllProducts(): string[] {
        return ['cars', 'bikes']
    }


    saveProduct(product: {}) {
            //save product to data base
            console.log('product saved')
                const productSaved = {
                    id: '1',
                    ...product
                }
                return productSaved
        }
    }
