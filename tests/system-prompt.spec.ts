import { expect, test } from '@playwright/test';

import { courses, education, moreAnchor, work } from '../src/content/cv';
import { buildSystemPrompt } from '../src/lib/systemPrompt';

// Lo plegado solo sirve si el chat lo conoce y sabe con qué ancla
// desplegarlo: si se cae del prompt, la página lo guarda y nadie lo ve.
test('gives the chat every folded detail with the anchor that unfolds it', () => {
    const prompt = buildSystemPrompt();
    const withDetails = [...work.items, ...education.items].filter((item) => item.details);

    expect(withDetails.length).toBeGreaterThan(0);
    for (const item of withDetails) {
        expect(prompt).toContain(`#${moreAnchor(item.id)}`);
        for (const text of item.details!) expect(prompt).toContain(text);
    }
});

test('tells the chat which courses are folded', () => {
    const prompt = buildSystemPrompt();
    const folded = courses.items.filter((item) => item.folded);

    expect(folded.length).toBeGreaterThan(0);
    for (const item of folded) {
        expect(prompt).toContain(`${item.title}`);
        expect(prompt).toContain(`#${item.id}, plegado en la página`);
    }
});
