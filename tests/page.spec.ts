import { expect, test } from '@playwright/test';

import { work } from '../src/content/cv';

test.describe('CV page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('renders the profile and every section', async ({ page }) => {
        await expect(page).toHaveTitle(/Pablo Grillo/);
        await expect(page.getByRole('heading', { name: 'pablo grillo', level: 1 })).toBeVisible();

        for (const id of ['about', 'work', 'education', 'courses', 'skills', 'contact']) {
            await expect(page.locator(`#${id}`)).toBeAttached();
        }
    });

    test('gives every work entry a unique anchor', async ({ page }) => {
        // El chat cita estas anclas en sus respuestas: si una desaparece o se
        // duplica, sus enlaces dejan de llevar a ninguna parte.
        const ids = await page.locator('#work dl > div[id]').evaluateAll(
            (entries) => entries.map((entry) => entry.id),
        );

        expect(ids).toHaveLength(work.items.length);
        expect(new Set(ids).size).toBe(ids.length);
        expect(ids).toEqual(work.items.map((item) => item.id));
    });

    test('shows the current role', async ({ page }) => {
        const current = work.items[0];
        const entry = page.locator(`#${current.id}`);

        await expect(entry).toContainText(current.company);
        await expect(entry).toContainText(current.role);
        await expect(entry).toContainText(String(current.year));
    });
});
