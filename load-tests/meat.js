import { page, test } from "playwright";

export default async function meat(page, context) {
  await page.goTo(context.vars.target);
  await page.getByText("Kött").click();
}