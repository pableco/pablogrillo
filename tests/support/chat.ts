import type { Page } from '@playwright/test';

/**
 * Respuesta falsa de /api/chat.
 *
 * Las pruebas funcionales miden la web, no al modelo: llamar a Anthropic de
 * verdad las haría lentas, no deterministas, dependientes de un secreto que
 * las PRs desde un fork no tienen, y encima costaría dinero por ejecución.
 * Servimos el mismo stream que produce `toUIMessageStreamResponse()` para
 * que el cliente del AI SDK no note la diferencia.
 */
export async function stubChatReply(page: Page, answer: string): Promise<void> {
    const chunks = [
        { type: 'start' },
        { type: 'text-start', id: 'stub' },
        { type: 'text-delta', id: 'stub', delta: answer },
        { type: 'text-end', id: 'stub' },
        { type: 'finish' },
    ];

    await page.route('**/api/chat', (route) => route.fulfill({
        status: 200,
        headers: {
            'content-type': 'text/event-stream',
            'x-vercel-ai-ui-message-stream': 'v1',
        },
        body: `${chunks.map((chunk) => `data: ${JSON.stringify(chunk)}\n\n`).join('')}data: [DONE]\n\n`,
    }));
}

/** Abre el panel pulsando la barra, que es un único botón. */
export async function openChat(page: Page): Promise<void> {
    await page.getByRole('button', { name: 'Ask about Pablo' }).click();
    await page.getByPlaceholder('Ask a question…').waitFor();
}

/** Atributo que marca el destino resaltado — ver src/lib/highlight.ts. */
export const HIGHLIGHT_ATTR = 'data-chat-highlight';
