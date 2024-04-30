import { ProductsService } from './products.service';
import { Response } from 'express';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getAllProducts(): string[];
    getProducts(request: Request, response: Response, body: []): string;
}
