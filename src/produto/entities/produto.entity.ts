import { IsNotEmpty, IsNumber } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Categoria } from "../../categoria/entities/categoria.entity";


@Entity({name: "tb_produtos"})
export class Produto {

    @PrimaryGeneratedColumn()
    id: number 

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    nome: string

    @Column({ length: 5, nullable: false})
    tamanho: string

    @IsNumber({maxDecimalPlaces: 2})
    @IsNotEmpty() 
    @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
    preco: number;

    @Column()
    foto: string;
    
    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"

    })
    categoria: Categoria


    
}