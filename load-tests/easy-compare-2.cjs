const { expect } = require("playwright/test");

module.exports = { pharmacy, soil };
function sleep(ms) {
  return new Promise(req => setTimeout(req, ms));
}
async function pharmacy(page) {
  await page.goto("http://127.0.0.1:4000");
  await sleep(100);
  await page.getByText("apotek").click();
  await page.getByText("receptfria läkemedel").click();
  await page.getByText("allergi").click();
  await page.getByText("Livostin 50 Mikrogram/dos Nässpray").click();
  expect(await page.getByRole('h2')).toBeVisible
}

async function soil(page) {
  await page.goto("http://127.0.0.1:4000");
  await sleep(100);
  await page.getByText("blommor & trädgård").click();
  await page.getByText("jord").first().click();
  await page.getByText("Blomjord").first().click();
  expect(await page.getByRole('h2')).toBeVisible
}