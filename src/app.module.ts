import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { StockfishController } from './stockfish/stockfish.controller';
import { StockfishService } from './stockfish/stockfish.service';
import { StockfishModule } from './stockfish/stockfish.module';

@Module({
  imports: [AuthModule, StockfishModule, ],
  controllers: [AuthController, StockfishController, ],
  providers: [AuthService, StockfishService, ],
})
export class AppModule {}
