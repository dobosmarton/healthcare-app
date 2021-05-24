import { Resolver, Query, Arg, Ctx, FieldResolver, Root, Int, InputType, Field } from 'type-graphql';
import { Context } from '../context';
import { Doctor } from '../Doctor';
import { Appointment } from '../Appointment';

@Resolver(() => Doctor)
export class DoctorResolver {
  @FieldResolver(() => [Appointment])
  appointments(
    @Root() doctor: Doctor,
    @Arg('name', { nullable: true }) name: string,
    @Ctx() ctx: Context
  ): Promise<Appointment[]> {
    return ctx.prisma.doctor
      .findUnique({
        where: {
          id: doctor.id,
        },
      })
      .appointments({ where: { name } });
  }

  @Query(() => [Doctor])
  async doctors(@Arg('name', { nullable: true }) name: string, @Ctx() ctx: Context): Promise<Doctor[]> {
    return ctx.prisma.doctor.findMany({ where: { name } });
  }
}
