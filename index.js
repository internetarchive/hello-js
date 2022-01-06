import { serve } from 'https://deno.land/std/http/server.ts'

serve(() => new Response('hai'), { port: 5000 })
