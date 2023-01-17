import Fastyfy from 'fastify';
import { PrismaClient } from '@prisma/client'
import cors from '@fastify/cors'

const app = Fastyfy();
const prisma = new PrismaClient()

/**
 * Get: buscar informação
 * Post: Rota que vai criar algo
 * Put: Rota que vai atualizar algum recurso
 * Patch: Atualizar um recurso especifico
 * Delete: Excluir um recurso
 */

app.register(cors)

app.get('/hello', async () => {
    const habits = await prisma.habit.findMany({
        where: {
            title: {
                startsWith: 'Bebe'
            }
        }
    })
    return habits
})

app.listen({
    port: 3333,
}).then(()=>{
    console.log('Server rodando')
})