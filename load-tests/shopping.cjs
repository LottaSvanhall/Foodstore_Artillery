const { expect } = require("playwright/test");

module.exports = { meat, fruit, deepFrozen, cake, pacifier };
function sleep(ms) {
  return new Promise(req => setTimeout(req, ms));
}
async function meat(page) {
  await page.goto("http://127.0.0.1:4000");
  await sleep(100);
  await page.getByText("Kött").click();
  await page.getByText("Högrev").click();
  expect(await page.getByRole('h2')).toBeVisible
}
async function fruit(page){
  await page.goto("http://127.0.0.1:4000");
  await sleep(100);
  await page.getByText("Frukt").click();
  await page.getByText("Apelsin").click();
  expect(await page.getByRole('h2')).toBeVisible
}
async function deepFrozen(page){
  await page.goto("http://127.0.0.1:4000");
  await sleep(100);
  await page.getByText("fryst").click();
  await page.getByText("frukt & bär").click();
  await page.getByText("Jordgubbar Ekologiska Frysta").click();
  expect(await page.getByRole('h2')).toBeVisible
}
async function cake(page){
  await page.goto("http://127.0.0.1:4000");
  await sleep(100);
  await page.getByText("bröd & kakor").click();
  await page.getByText("kondis & fika").click();
  await page.getByText("konditori").click();
  await page.getByText("Budapeststubbe").click();
  expect(await page.getByRole('h2')).toBeVisible
}
async function pacifier(page){
  await page.goto("http://127.0.0.1:4000");
  await sleep(100);
  await page.getByText("barn").click();
  await page.getByText("nappar & nappflaskor").click();
  await page.getByText("Air Silikon Napp 6-16 Månader").click();
  expect(await page.getByRole('h2')).toBeVisible
}