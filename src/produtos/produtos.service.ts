import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProdutosDto } from './dtos/create-produtos.dto';
import { Produtos } from './produtos.entity';
import { UnDEnum } from './produtos.enum';
import { ProdutosRepository } from './produtos.repository';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(ProdutosRepository)
    private produtosRepository: ProdutosRepository,
  ) {}

  async getProdutosById(id: number): Promise<Produtos> {
    const found = await this.produtosRepository.findOne(id);

    if (!found) {
      throw new NotFoundException({
        message: `Produto com o ID "${id}" não encontrado!`,
      });
    }

    return found;
  }
  async createProdutos(
    createProdutosDto: CreateProdutosDto,
  ): Promise<Produtos> {
    const { descricao, estoque, item, quantidade, total, und, valor_unitario } =
      createProdutosDto;

    const produtos = new Produtos();
    produtos.descricao = descricao;
    produtos.estoque = estoque;
    produtos.item = item;
    produtos.quantidade = quantidade;
    produtos.total = total;
    produtos.und = und;
    produtos.valor_unitario = valor_unitario;
    await produtos.save();

    return produtos;
  }
}
