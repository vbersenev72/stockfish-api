import { Controller } from '@nestjs/common';
import { StockfishService } from './stockfish.service';

@Controller('stockfish')
export class StockfishController {

    constructor(private stockfishService: StockfishService) {
        this.stockfishService = new StockfishService()
    }
}
