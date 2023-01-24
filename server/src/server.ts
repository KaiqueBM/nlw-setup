import Fastyfy from 'fastify';
import cors from '@fastify/cors'
import { appRoutes } from './routes';

const app = Fastyfy();

/**
 * Get: buscar informação
 * Post: Rota que vai criar algo
 * Put: Rota que vai atualizar algum recurso
 * Patch: Atualizar um recurso especifico
 * Delete: Excluir um recurso
 */

app.register(cors)
app.register(appRoutes)



app.listen({
    port: 3333,
}).then(()=>{
    console.log('Server rodando')
})