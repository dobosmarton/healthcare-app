import { Profession, Doctor as PrismaDoctor } from '@prisma/client';
import { ObjectType, Field } from 'type-graphql';
import { User } from './User';

@ObjectType()
export abstract class Doctor extends User implements PrismaDoctor {
  @Field(() => String, { nullable: true })
  email: string | null;

  @Field(() => Profession)
  profession: Profession;
}
