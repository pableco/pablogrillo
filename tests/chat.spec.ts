import { expect, test } from '@playwright/test';

import { openChat, stubChatReply } from './support/chat';

test.describe('chat panel', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('opens from anywhere on the bar, not just the icon', async ({ page }) => {
        // La barra entera es el botón: pulsar la etiqueta tiene que valer.
        await page.getByText('Ask about Pablo', { exact: true }).click();

        await expect(page.getByPlaceholder('Ask a question…')).toBeVisible();
        await expect(page.getByRole('button', { name: 'Close' })).toBeVisible();
    });

    test('closes again from the same bar', async ({ page }) => {
        await openChat(page);
        await page.getByRole('button', { name: 'Close' }).click();

        await expect(page.getByRole('button', { name: 'Ask about Pablo' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Close' })).toBeHidden();

        // El panel no se desmonta, se repliega: lo que se comprueba es que
        // vuelve a medir lo que la pastilla, no que el contenido desaparezca.
        // Con poll, porque replegarse lleva su animación.
        const panel = page.getByRole('region', { name: 'Chat about Pablo Grillo' });
        await expect
            .poll(async () => (await panel.boundingBox())?.height ?? 0)
            .toBeLessThan(100);
    });

    test('closes with Escape', async ({ page }) => {
        await openChat(page);
        await page.keyboard.press('Escape');

        await expect(page.getByRole('button', { name: 'Ask about Pablo' })).toBeVisible();
    });

    test('keeps the input readable on the smallest screens', async ({ page }) => {
        // Por debajo de 16px Safari en iOS amplía la página al enfocar, y ese
        // zoom descoloca el panel — ver src/components/Chat/Chat.styles.ts.
        await openChat(page);
        const fontSize = await page.getByPlaceholder('Ask a question…')
            .evaluate((el) => parseFloat(getComputedStyle(el).fontSize));

        expect(fontSize).toBeGreaterThanOrEqual(16);
    });

    test('will not send an empty message', async ({ page }) => {
        await openChat(page);

        await expect(page.getByRole('button', { name: 'Send' })).toBeDisabled();
        await page.getByPlaceholder('Ask a question…').fill('  ');
        await expect(page.getByRole('button', { name: 'Send' })).toBeDisabled();
    });

    test('answers a typed question', async ({ page }) => {
        await stubChatReply(page, 'Pablo is a Design Engineer.');
        await openChat(page);

        await page.getByPlaceholder('Ask a question…').fill('what does he do?');
        await page.keyboard.press('Enter');

        await expect(page.getByText('what does he do?')).toBeVisible();
        await expect(page.getByText('Pablo is a Design Engineer.')).toBeVisible();
        // La caja se vacía al enviar, lista para la siguiente pregunta.
        await expect(page.getByPlaceholder('Ask a question…')).toHaveValue('');
    });

    test('answers a suggested question', async ({ page }) => {
        await stubChatReply(page, 'He works at Roiback.');
        await openChat(page);

        await page.getByRole('button', { name: 'Where does Pablo work right now?' }).click();

        await expect(page.getByText('He works at Roiback.')).toBeVisible();
    });

    test('offers a retry when the request fails', async ({ page }) => {
        await page.route('**/api/chat', (route) => route.fulfill({ status: 500, body: 'boom' }));
        await openChat(page);

        await page.getByPlaceholder('Ask a question…').fill('hola');
        await page.keyboard.press('Enter');

        await expect(page.getByRole('alert')).toBeVisible();
        await expect(page.getByRole('button', { name: 'Retry' })).toBeVisible();
    });
});
