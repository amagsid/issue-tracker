import { z } from 'zod';

export const schema = z.object({
  id: z.number().min(1),
  name: z.string().min(3),
  price: z.number().min(1),
});

export default schema;
