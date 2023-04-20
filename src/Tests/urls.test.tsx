/**
 * @jest-environment jsdom
 */

import urls from "../Data/urls";

/* Unit Tests - checks validity of urls for live demo/git etc by sending fetch */

/* accepted addresses */

const accepted = [
  "https://grouptaskapp-4eccd.web.app/",
  "https://github.com/dnlstronge/groupTask/",
  "https://uccalc-11c98.web.app/",
  "https://github.com/dnlstronge/benefitscalc2/",
];

const urlsToCheck = urls;
test("checks if url arrays/data is valid", () => {
  let isValid = false;
  urls.map((url) => {
    if (accepted.includes(url)) {
      return isValid = true;
    }
  });
  expect(isValid).toEqual(true)
});
