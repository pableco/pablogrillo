import { expect, test } from '@playwright/test';

/*
 * La validación de /api/chat responde antes de llamar a Anthropic, así que
 * se puede comprobar de verdad — sin clave y sin gastar tokens. El camino
 * feliz necesita ANTHROPIC_API_KEY y se cubre con el stub del cliente, ver
 * tests/support/chat.ts.
 */
test.describe('/api/chat request validation', () => {
    test('rejects a body that is not JSON', async ({ request }) => {
        const response = await request.post('/api/chat', {
            headers: { 'content-type': 'application/json' },
            data: 'not json at all',
        });

        expect(response.status()).toBe(400);
    });

    for (const [name, payload] of [
        ['no messages', {}],
        ['messages is not an array', { messages: 'hola' }],
        ['no messages to answer', { messages: [] }],
    ] as const) {
        test(`rejects ${name}`, async ({ request }) => {
            const response = await request.post('/api/chat', { data: payload });

            expect(response.status()).toBe(400);
        });
    }

    test('rejects a conversation that is too long', async ({ request }) => {
        // El límite existe para que nadie pueda inflar el coste por petición.
        const messages = Array.from({ length: 31 }, (_, index) => ({
            id: String(index),
            role: 'user',
            parts: [{ type: 'text', text: 'hola' }],
        }));

        const response = await request.post('/api/chat', { data: { messages } });

        expect(response.status()).toBe(400);
    });
});
