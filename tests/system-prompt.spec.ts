import { expect, test } from '@playwright/test';

import { moreAnchor, work } from '../src/content/cv';
import { buildSystemPrompt } from '../src/lib/systemPrompt';

// El detalle plegado solo sirve si el chat lo conoce y sabe con qué ancla
// desplegarlo: si se cae del prompt, la página lo guarda y nadie lo ve.
test('gives the chat every folded detail with the anchor that unfolds it', () => {
    const prompt = buildSystemPrompt();
    const folded = work.items.filter((item) => item.details);

    expect(folded.length).toBeGreaterThan(0);
    for (const item of folded) {
        expect(prompt).toContain(`#${moreAnchor(item.id)}`);
        for (const text of item.details!) expect(prompt).toContain(text);
    }
});
