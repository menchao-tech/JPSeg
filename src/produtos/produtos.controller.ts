import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateProdutosDto } from './dtos/create-produtos.dto';
import { Produtos } from './produtos.entity';
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private produtosService: ProdutosService) {}

  @Get('/:id')
  getProdutosById(@Param('id', ParseIntPipe) id: number): Promise<Produtos> {
    return this.produtosService.getProdutosById(id);
  }
  @Post()
  createProdutos(
    @Body() createProdutosDto: CreateProdutosDto,
  ): Promise<Produtos> {
    return this.produtosService.createProdutos(createProdutosDto);
  }
}
