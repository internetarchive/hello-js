import { serve } from 'https://deno.land/std/http/server.ts'

serve(() => new Response('hello js'), { port: 5000 })
