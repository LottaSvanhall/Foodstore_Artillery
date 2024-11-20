module.exports = { meat };

async function meat(page) {
  await page.goto("http://127.0.0.1:4000");
  await page.getByText("Kött").click();
  console.log(await page.getByText("Högrev").hover());

}