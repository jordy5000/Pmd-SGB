import { AppService } from '../app.service';
export declare class ProductsService {
    private readonly AppService;
    constructor(AppService: AppService);
    getProducts(): string;
    getAllProducts(): string[];
    saveProduct(product: {}): {
        id: string;
    };
}
