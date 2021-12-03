import {instanceToPlain } from "class-transformer";
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BaseEntity} from "typeorm";

@Entity("visitors")
export default class Visitor extends BaseEntity {

    constructor(visitor: Partial<Visitor>) {
        super()
        Object.assign(this, visitor)
    }


    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nickname!: string;

    @Column({nullable: true})
    male!: number;

    @Column({nullable: true})
    female!: number;

    @Column()
    height!: number;

    @Column()
    weight!: number;

    @Column()
    skeetrCount!: number;

    @Column()
    @CreateDateColumn()
    createdAt!: Date;

    


    toJSON() {
        return instanceToPlain(this);
    }
}
