import { services } from '../../data/services';
import { Grid } from '../layout/Grid';
import { Card } from '../ui/Card';
import { Reveal } from '../animations/Reveal';

export function Services() {
  return (
    <section className="py-fluid-sm">
      <Reveal>
        <h2 className="mb-10 text-title-sm font-black tracking-[-.055em]">Strategic Services</h2>
      </Reveal>
      <Grid>
        {services.map((service) => (
          <Reveal key={service.title}>
            <Card className="h-full min-h-[23rem] p-8 transition hover:-translate-y-2 hover:border-mint/70">
              <service.icon className="mb-12 text-4xl text-mint" />
              <h3 className="text-2xl font-extrabold">{service.title}</h3>
              <p className="mt-6 leading-8 text-muted">{service.description}</p>
            </Card>
          </Reveal>
        ))}
      </Grid>
    </section>
  );
}

