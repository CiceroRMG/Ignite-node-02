import { config } from 'dotenv'
import { z } from 'zod'

// o zod é uma biblioteca de validações que é bem integravel com typescript
// dessa forma podemos fazer validações das variaveis env antes da aplicação rodar

if (process.env.NODE_ENV === 'test') {
  config({ path: '.env.test' })
} else {
  config()
}

const envSchema = z.object({
  DATABASE_URL: z.string(),
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  PORT: z.preprocess((val) => Number(val), z.number().default(3333)),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('Invalid environment variables!', _env.error.format())

  throw new Error('Invalid environment variables.')
}

export const env = _env.data
