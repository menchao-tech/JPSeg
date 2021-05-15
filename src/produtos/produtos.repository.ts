import { EntityRepository, Repository } from 'typeorm';
import { Produtos } from './produtos.entity';

@EntityRepository(Produtos)
export class ProdutosRepository extends Repository<Produtos> {}
