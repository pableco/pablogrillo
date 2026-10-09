import { anthropic } from '@ai-sdk/anthropic';
import { convertToModelMessages, streamText, type UIMessage } from 'ai';

import { toLocale } from '../../../content/i18n';
import { buildSystemPrompt } from '../../../lib/systemPrompt';

export const runtime = 'nodejs';
export const maxDuration = 30;

const MAX_MESSAGES = 30;

export async function POST(req: Request): Promise<Response> {
    let body: unknown;
    try {
        body = await req.json();
    } catch {
        return new Response('Invalid JSON body', { status: 400 });
    }

    const messages = (body as { messages?: unknown })?.messages;
    // Idioma de la página desde la que se pregunta. Cualquier valor que no
    // sea un idioma conocido cae al inglés en vez de rechazar la petición.
    const locale = toLocale((body as { locale?: unknown })?.locale);

    if (!Array.isArray(messages) || messages.length === 0 || messages.length > MAX_MESSAGES) {
        return new Response('Invalid or too many messages', { status: 400 });
    }

    const result = streamText({
        model: anthropic('claude-haiku-5-5'),
        system: buildSystemPrompt(locale),
        messages: await convertToModelMessages(messages as UIMessage[]),
        maxOutputTokens: 600,
    });

    return result.toUIMessageStreamResponse();
}
