import{ test, Browser, Page } from '@playwright/test';
import { run } from 'node:test';

(async () => {
 let browser: Browser;
 let page: Page;


 test.describe('Navegacion en www.freerangetesters.com', () => {
    test('los link principales redirigen correctamnete', async ({ page}) =>{
        await test.step('estando yo en la web principal www.freerangetesters.com', async() => {
            page.goto('https://www.freerangetesters.com');
        })


        await test.step('cuando hago click en "Cursos"', async() => {
            page.locator('#page_header').getByRole('link', { name: 'Cursos', exact: true}).click();
            await page.waitForURL('**/cursos');
        })

        await test.step('soy redirigido a la seccion de titulo "Cursos"', async() =>{

        })



    })

 })

})();