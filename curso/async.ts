/* Uso Básico de async:

Al marcar una función con async, automáticamente la convertimos en una función que retorna una promesa.

Por ejemplo, async function obtenerDatos() { ... }.

Implementando await:

Dentro de una función async, podemos usar await para esperar el resultado de una promesa sin bloquear la ejecución del resto del programa.

Por ejemplo, let resultado = await algunaPromesa();.

Demostración con Playwright:

Veamos cómo esto se aplica en Playwright. Al realizar pruebas de navegación, frecuentemente esperamos a que las páginas carguen o a que los elementos estén disponibles. Aquí es donde async y await se vuelven indispensables.

Ejemplo en Código:

import { chromium } from 'playwright';
 

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://ejemplo.com');
  // Más operaciones asíncronas...
  await browser.close();
})();

*/