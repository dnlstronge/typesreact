/**
 * @jest-environment jsdom
 */

import projectData from "../Data/projectData";

/* Tests urls for live demo is valid by sending fetch */
test("checks if urls are valid", () => {
  let NoError: boolean = false;
  projectData.map((proj) => {
    let testArray: string[] = [];
    testArray.push(proj.url);
    testArray.map(async (url) => {
      try {
        const response = await fetch(url);
        if (response?.ok) {
          NoError = true;
        } else {
          NoError = false;
        }
      } catch (error) {
        NoError = true;
      }
    })
    expect(NoError).toEqual(true)  ;
  });
});
