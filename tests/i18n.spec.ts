import { expect, test } from '@playwright/test';

import { work as workEn } from '../src/content/cv';
import { es } from '../src/content/cv.es';
import { getCV, getStrings } from '../src/content/i18n';
import { buildSystemPrompt } from '../src/lib/systemPrompt';
import { stubChatReply } from './support/chat';

const cvEs = getCV('es');
const stringsEs = getStrings('es');

test.describe('Spanish page', () => {
    test('is served at /es with its own language, title and labels', async ({ page }) => {
        await page.goto('/es');

        await expect(page.locator('html')).toHaveAttribute('lang', 'es');
        await expect(page).toHaveTitle(stringsEs.siteTitle);
        await expect(page.locator('#work h3')).toHaveText(cvEs.work.label);
        await expect(page.locator(`#${cvEs.work.items[0].id}`)).toContainText(cvEs.work.items[0].description);
    });

    test('keeps the same anchors as the English page', async ({ page }) => {
        // El chat cita estas anclas: tienen que llevar a la misma entrada
        // en los dos idiomas, o un enlace compartido en /es no iría a
        // ninguna parte.
        await page.goto('/es');
        const ids = await page.locator('#work dl > div[id]').evaluateAll(
            (entries) => entries.map((entry) => entry.id),
        );

        expect(ids).toEqual(workEn.items.map((item) => item.id));
    });

    test('declares both languages to search engines', async ({ page }) => {
        for (const path of ['/', '/es']) {
            await page.goto(path);
            await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute('href', 'https://pablogrillo.com');
            await expect(page.locator('link[rel="alternate"][hreflang="es"]')).toHaveAttribute('href', 'https://pablogrillo.com/es');
            await expect(page.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveAttribute('href', 'https://pablogrillo.com');
        }
    });
});

test.describe('language switcher', () => {
    test('goes to Spanish and back from the header', async ({ page }) => {
        await page.goto('/');
        const nav = page.getByRole('navigation', { name: 'Language' });

        await expect(nav.locator('[aria-current="page"]')).toHaveText('en');
        await nav.getByRole('link', { name: 'Español' }).click();

        await expect(page).toHaveURL(/\/es$/);
        await expect(page.locator('html')).toHaveAttribute('lang', 'es');

        const navEs = page.getByRole('navigation', { name: stringsEs.languageNav });
        await expect(navEs.locator('[aria-current="page"]')).toHaveText('es');
        await navEs.getByRole('link', { name: 'English' }).click();

        await expect(page).toHaveURL(/\/$/);
        await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    });
});

test.describe('chat on the Spanish page', () => {
    test('speaks Spanish and tells the server which page it is on', async ({ page }) => {
        await stubChatReply(page, 'Trabaja en [Roiback](#work-roiback-2023).');
        await page.goto('/es');

        await page.getByRole('button', { name: stringsEs.chat.open }).click();
        const request = page.waitForRequest('**/api/chat');
        await page.getByRole('button', { name: stringsEs.chat.suggestions[0] }).click();

        expect((await request).postDataJSON()).toMatchObject({ locale: 'es' });
        await expect(page.getByRole('link', { name: 'Roiback' })).toBeVisible();
    });
});

test.describe('Spanish translation', () => {
    // Un nombre propio puede quedarse en inglés; la prosa no. Si añades una
    // entrada en cv.ts, estas pruebas te recuerdan traducirla en cv.es.ts.
    test('translates the prose of every work and education entry', () => {
        for (const item of getCV('en').work.items) {
            expect(es.work[item.id], `work "${item.id}" sin traducir`).toBeDefined();
            expect(es.work[item.id].details?.length ?? 0).toBe(item.details?.length ?? 0);
        }
        for (const item of getCV('en').education.items) {
            expect(es.education[item.id], `education "${item.id}" sin traducir`).toBeDefined();
            expect(es.education[item.id].details?.length ?? 0).toBe(item.details?.length ?? 0);
        }
    });

    test('names every section', () => {
        for (const section of getCV('en').sections) {
            expect(es.labels[section.id], `sección "${section.id}" sin nombre`).toBeDefined();
        }
    });

    test('gives the chat the Spanish CV with the same anchors', () => {
        const prompt = buildSystemPrompt('es');

        expect(prompt).toContain(`## ${cvEs.work.label} (#work)`);
        for (const item of cvEs.work.items) {
            expect(prompt).toContain(`#${item.id}`);
            expect(prompt).toContain(item.description);
        }
    });
});
