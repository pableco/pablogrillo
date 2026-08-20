import { defineConfig, devices } from '@playwright/test';

const PORT = Number(process.env.PORT ?? 3000);
const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? `http://127.0.0.1:${PORT}`;
const isCI = Boolean(process.env.CI);

export default defineConfig({
    testDir: './tests',
    // Estas pruebas tocan el scroll y el resaltado de la propia página, que
    // es estado global del navegador: dentro de un fichero van en serie, y
    // el paralelismo se saca ejecutando ficheros a la vez.
    fullyParallel: false,
    forbidOnly: isCI,
    retries: isCI ? 1 : 0,
    reporter: isCI ? [['github'], ['html', { open: 'never' }]] : [['list']],

    use: {
        baseURL,
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
    },

    projects: [
        { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
        { name: 'mobile', use: { ...devices['Pixel 7'] } },
    ],

    /*
     * Se prueba el build de producción, no `next dev`: es lo que acaba
     * desplegado, y el dev server tiene su propio comportamiento (overlays
     * de error, recompilación) que no queremos medir. Si ya hay algo
     * escuchando en el puerto, lo reutiliza en local en vez de fallar.
     */
    webServer: process.env.PLAYWRIGHT_BASE_URL
        ? undefined
        : {
            command: `npm run build && npm run start -- --port ${PORT}`,
            url: baseURL,
            reuseExistingServer: !isCI,
            timeout: 180_000,
        },
});
