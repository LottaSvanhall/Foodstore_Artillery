const { expect } = require("playwright/test");

module.exports = { greensForTzatziki, mincedMeatForGroundBeef, greekYogurtForTzatziki, pantryForTzatziki, bulgur, beer};
function sleep(ms) {
  return new Promise(req => setTimeout(req, ms));
}

async function greensForTzatziki(page){
  await page.goto("http://127.0.0.1:4000");
  await sleep(100);
  await page.getByText("skafferi").click();
  await page.getByText("frukt & grönt").first().click();
  await page.getByText("kryddor & smaksättare").first().click();
  await page.getByText("kryddor & örter").click();
  await page.getByText("Oregano Klass 1").click();

  await sleep(100);
  await page.getByText("potatis & rotsaker").click();
  await page.getByText("lök").first().click();
  await page.getByText("vitlök klass 1").first().click();
  
  await sleep(100);
  await page.getByText("grönsaker").first().click();
  await page.getByText("gurka").first().click();
  await page.getByText("Gurka Eko klass 1").first().click();
  expect(await page.getByRole('h2')).toBeVisible
}

async function mincedMeatForGroundBeef(page){
  await page.goto("http://127.0.0.1:4000");
  await sleep(100);
  await page.getByText("kött, chark & fågel").click();
  await page.getByText("Blandfärs 20% Sverige").first().click()
  expect(await page.getByRole('h2')).toBeVisible
}
async function greekYogurtForTzatziki(page){
  await page.goto("http://127.0.0.1:4000");
  await sleep(100);
  await page.getByText("Mejeri, ost & ägg").first().click();
  await page.getByText("Filmjölk & yoghurt").click();
  await page.getByText("naturell yoghurt").first().click();
  await page.getByText("naturell grekisk yoghurt 0%").first().click();
  expect(await page.getByRole('h2')).toBeVisible
}

async function pantryForTzatziki(page){
  await page.goto("http://127.0.0.1:4000");
  await sleep(100);
  await page.getByText("skafferi").first().click();
  await page.getByText("olja & vinäger").first().click();
  await page.getByText("Olivolja classico extra virgin").last().click();
  
  await sleep(100);
  await page.getByText("kryddor & smaksättare").last().click();
  await page.getByText("salt").first().click();
  await page.getByText("Kvarnsalt").last().click();
  expect(await page.getByRole('h2')).toBeVisible
}
async function bulgur(page){
  await page.goto("http://127.0.0.1:4000");
  await sleep(100);
  await page.getByText("skafferi").last().click();
  await page.getByText("pasta, ris & matgryn").click();
  await page.getByText("couscous & bulgur").click();
  await page.getByText("bulgur").last().click();
}
async function beer(page){
  await page.goto("http://127.0.0.1:4000");
  await sleep(100);
  await page.getByText("dryck").last().click();
  await page.getByText("Öl & cider").click();
  await page.getByText("Mariestads Alkoholfri 0,5% Glas").first().click();
}




