import { ObjectType, Field, ID } from 'type-graphql';

/**
 * Basic User class model
 * More complex models can extend this
 */

@ObjectType()
export abstract class User {
  @Field((_) => ID)
  id: string;

  @Field((_) => Date)
  createdAt: Date;

  @Field((_) => String)
  name: string;
}
