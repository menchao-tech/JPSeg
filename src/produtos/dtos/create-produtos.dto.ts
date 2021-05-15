import { UnDEnum } from '../produtos.enum';

export class CreateProdutosDto {
  id?: number;

  item: number;

  descricao: string;

  und: UnDEnum;

  quantidade: number;

  valor_unitario: number;

  total: number;

  estoque: number;
}
