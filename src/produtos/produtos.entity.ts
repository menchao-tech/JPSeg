import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UnDEnum } from './produtos.enum';

@Entity()
export class Produtos extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  item: number;

  @Column()
  descricao: string;

  @Column()
  und: UnDEnum;

  @Column()
  quantidade: number;

  @Column()
  valor_unitario: number;

  @Column()
  total: number;

  @Column()
  estoque: number;
}
