import { test, expect } from '@playwright/test';

// Esta es la estructura para iniciar siempre un test test('tes curso youtube', async ({ page }) => { });
       
test('tes buscar en mercado libre', async ({ page }) => {
    //el metodo .goto funcion para buscar la url
    await page.goto('https://www.mercadolibre.com.ar')

    //el metodo .locator es para que busque un slector en este caso es el id del imput - el metodo .file funciona para escribir 
    await page.locator('input[id=\'cb1-edit\']') .fill('escritorio para computadora')

    // el metodo .keyboard indica que use el teclado seguido usamos el metodod .press osea precionar y dentro de comillas le pasamos el comando a usar en este caso Enter 
    await page.keyboard.press("Enter")   

     // con el metodo expect espera hasta que la pagina encuentre el .locator que a su vez contiene el Xpaht 
    await expect(page.locator('//ol[contains(@class, \'ui-search-layout\')]')).toBeVisible()
    

});







//input[id='cb1-edit'] css selector con esta sintaxis buscamos atributos en una web con el selector css