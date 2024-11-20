module.exports = { meat };
function sleep(ms) {
  return new Promise(req => setTimeout(req, ms));
}
async function meat(page) {
  await page.goto("http://127.0.0.1:4000");
  await sleep(100);
  await page.getByText("Kött").click();
  //console.log(await page.getByText("Högrev").hover());


}