import { expect, test } from '@playwright/test';

import { work } from '../src/content/cv';
import { HIGHLIGHT_ATTR, openChat, stubChatReply } from './support/chat';

// Dos etapas en la misma empresa: el caso que obliga a que las anclas sean
// por entrada y no por sección.
const CURRENT = work.items.find((item) => item.company === 'Roiback' && item.year === 2023)!;
const EARLIER = work.items.find((item) => item.company === 'Roiback' && item.year === 2016)!;

const ANSWER = `Pablo lidera el equipo en [Roiback](#${CURRENT.id}) desde ${CURRENT.year}.`;

test.describe('following a link from an answer', () => {
    test.beforeEach(async ({ page }) => {
        await stubChatReply(page, ANSWER);
        await page.goto('/');
        await openChat(page);
        await page.getByPlaceholder('Ask a question…').fill('experiencia en roiback?');
        await page.keyboard.press('Enter');
        await expect(page.getByRole('link', { name: 'Roiback' })).toBeVisible();
    });

    test('points at the entry, not the whole section', async ({ page }) => {
        await expect(page.getByRole('link', { name: 'Roiback' }))
            .toHaveAttribute('href', `#${CURRENT.id}`);
    });

    test('scrolls the entry into view and highlights only that one', async ({ page }) => {
        await page.getByRole('link', { name: 'Roiback' }).click();

        const target = page.locator(`#${CURRENT.id}`);
        await expect(target).toHaveAttribute(HIGHLIGHT_ATTR, '');
        await expect(target).toBeInViewport();

        // La otra etapa en Roiback queda justo debajo: no debe teñirse.
        await expect(page.locator(`#${EARLIER.id}`)).not.toHaveAttribute(HIGHLIGHT_ATTR, '');
    });

    test('clears the highlight so the same link works twice', async ({ page, isMobile }) => {
        const link = page.getByRole('link', { name: 'Roiback' });
        const target = page.locator(`#${CURRENT.id}`);

        await link.click();
        await expect(target).toHaveAttribute(HIGHLIGHT_ATTR, '');
        // La animación se apaga sola y retira la marca.
        await expect(target).not.toHaveAttribute(HIGHLIGHT_ATTR, '', { timeout: 10_000 });

        // En móvil seguir el enlace cierra el panel; la conversación sigue
        // ahí, así que basta con volver a abrirlo para repetir el clic.
        if (isMobile) await openChat(page);

        await link.click();
        await expect(target).toHaveAttribute(HIGHLIGHT_ATTR, '');
    });

    test('gets the panel out of the way only when it covers the page', async ({ page, isMobile }) => {
        await page.getByRole('link', { name: 'Roiback' }).click();

        if (isMobile) {
            // A pantalla completa el panel taparía justo lo que acaba de señalar.
            await expect(page.getByRole('button', { name: 'Ask about Pablo' })).toBeVisible();
        } else {
            // Flotando en una esquina puede quedarse abierto para seguir preguntando.
            await expect(page.getByPlaceholder('Ask a question…')).toBeVisible();
        }
    });
});

test('a section link still highlights the whole section', async ({ page }) => {
    await stubChatReply(page, 'Lo tienes en [Work](#work).');
    await page.goto('/');
    await openChat(page);
    await page.getByPlaceholder('Ask a question…').fill('donde miro su experiencia?');
    await page.keyboard.press('Enter');

    await page.getByRole('link', { name: 'Work' }).click();

    await expect(page.locator('#work')).toHaveAttribute(HIGHLIGHT_ATTR, '');
});
