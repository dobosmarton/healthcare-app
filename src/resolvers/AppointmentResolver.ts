import { Resolver, Ctx, FieldResolver, Root, Int, InputType, Field, Mutation, Arg } from 'type-graphql';
import { Context } from '../context';
import { Appointment, AppointmentCreateInput } from '../Appointment';
import { Patient } from '../Patient';

@Resolver(() => Appointment)
export class AppointmentResolver {
  @FieldResolver(() => [Appointment], { nullable: true })
  patient(@Root() appointment: Appointment, @Ctx() ctx: Context): Promise<Patient | null> {
    return ctx.prisma.appointment
      .findUnique({
        where: {
          id: appointment.id,
        },
      })
      .patient();
  }

  @Mutation(() => Appointment)
  createAppointment(
    @Arg('data') data: AppointmentCreateInput,
    @Arg('doctorId') doctorId: string,
    @Arg('patientId') patientId: string,

    @Ctx() ctx: Context
  ): Promise<Appointment> {
    return ctx.prisma.appointment.create({ data: { name: data.name, date: new Date(data.date), doctorId, patientId } });
  }
}
