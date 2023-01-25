const puppeteer = require("puppeteer"); // v13.0.0 or later

// =============================================================================
// PUPPETEER CODE IMPORTED FROM CHROME DEVTOOLS RECORDER
// =============================================================================

// -----------------------------------------------------------------------------
// NAVIGATE TO STUDENT TIMETABLE
// -----------------------------------------------------------------------------

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"',
    ],
    executablePath:
      "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  });
  const page = await browser.newPage();
  const timeout = 50000;
  page.setDefaultTimeout(timeout);
  // await page.evaluateOnNewDocument(() => {
  //   Object.defineProperty(navigator, "platform", { get: () => "Win32" });
  //   Object.defineProperty(navigator, "productSub", { get: () => "Win32" });
  //   Object.defineProperty(navigator, "platform", { get: () => "Win32" });
  //   Object.defineProperty(navigator, "platform", { get: () => "Win32" });
  // });

  {
    const targetPage = page;
    await targetPage.setViewport({ width: 1920, height: 399 });
  }
  {
    const targetPage = page;
    const promises = [];
    promises.push(targetPage.waitForNavigation());
    await targetPage.goto(
      "https://cufed.carleton.ca/adfs/ls/?wa=wsignin1.0&wtrealm=urn:cas:cas5prod"
    );
    await Promise.all(promises);
  }
  {
    await delay(3000);
    const targetPage = page;
    await scrollIntoViewIfNeeded(
      [["#userNameInput"], ['xpath///*[@id="userNameInput"]']],
      targetPage,
      timeout
    );
    const element = await waitForSelectors(
      [["#userNameInput"], ['xpath///*[@id="userNameInput"]']],
      targetPage,
      { timeout, visible: true }
    );
    const type = await element.evaluate((el) => el.type);
    if (["select-one"].includes(type)) {
      await element.select("CUNET\\alecjeffery");
    } else if (
      [
        "textarea",
        "text",
        "url",
        "tel",
        "search",
        "password",
        "number",
        "email",
      ].includes(type)
    ) {
      await element.type("CUNET\\alecjeffery");
    } else {
      await element.focus();
      await element.evaluate((el, value) => {
        el.value = value;
        el.dispatchEvent(new Event("input", { bubbles: true }));
        el.dispatchEvent(new Event("change", { bubbles: true }));
      }, "CUNET\\alecjeffery");
    }
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded(
      [
        ["#userNameInput"],
        ['xpath///*[@id="userNameInput"]'],
        ["text/CUNET\\alecjeffery"],
      ],
      targetPage,
      timeout
    );
    const element = await waitForSelectors(
      [
        ["#userNameInput"],
        ['xpath///*[@id="userNameInput"]'],
        ["text/CUNET\\alecjeffery"],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await element.click({
      delay: 427.70000000018626,
      offset: {
        x: 22,
        y: 287,
      },
    });
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded(
      [["#userNameInput"], ['xpath///*[@id="userNameInput"]']],
      targetPage,
      timeout
    );
    const element = await waitForSelectors(
      [["#userNameInput"], ['xpath///*[@id="userNameInput"]']],
      targetPage,
      { timeout, visible: true }
    );
    const type = await element.evaluate((el) => el.type);
    if (["select-one"].includes(type)) {
      await element.select("alecjeffery");
    } else if (
      [
        "textarea",
        "text",
        "url",
        "tel",
        "search",
        "password",
        "number",
        "email",
      ].includes(type)
    ) {
      await element.type("alecjeffery");
    } else {
      await element.focus();
      await element.evaluate((el, value) => {
        el.value = value;
        el.dispatchEvent(new Event("input", { bubbles: true }));
        el.dispatchEvent(new Event("change", { bubbles: true }));
      }, "alecjeffery");
    }
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded(
      [
        ["#passwordInput"],
        ['xpath///*[@id="passwordInput"]'],
        ["text/VFR44rfv"],
      ],
      targetPage,
      timeout
    );
    const element = await waitForSelectors(
      [
        ["#passwordInput"],
        ['xpath///*[@id="passwordInput"]'],
        ["text/VFR44rfv"],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await element.click({
      offset: {
        x: 88,
        y: 20.9375,
      },
    });
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded(
      [
        ["#passwordInput"],
        ['xpath///*[@id="passwordInput"]'],
        ["text/VFR44rfv"],
      ],
      targetPage,
      timeout
    );
    const element = await waitForSelectors(
      [
        ["#passwordInput"],
        ['xpath///*[@id="passwordInput"]'],
        ["text/VFR44rfv"],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await element.click({
      clickCount: 2,
      offset: {
        x: 71,
        y: 19.9375,
      },
    });
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded(
      [
        ["#passwordInput"],
        ['xpath///*[@id="passwordInput"]'],
        ["text/VFR44rfv"],
      ],
      targetPage,
      timeout
    );
    const element = await waitForSelectors(
      [
        ["#passwordInput"],
        ['xpath///*[@id="passwordInput"]'],
        ["text/VFR44rfv"],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await element.click({
      offset: {
        x: 71,
        y: 19.9375,
      },
    });
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded(
      [
        ["#passwordInput"],
        ['xpath///*[@id="passwordInput"]'],
        ["text/VFR44rfv"],
      ],
      targetPage,
      timeout
    );
    const element = await waitForSelectors(
      [
        ["#passwordInput"],
        ['xpath///*[@id="passwordInput"]'],
        ["text/VFR44rfv"],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await element.click({
      delay: 422.70000000018626,
      offset: {
        x: 15,
        y: 316,
      },
    });
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded(
      [
        ["#passwordInput"],
        ['xpath///*[@id="passwordInput"]'],
        ["text/VFR44rfv"],
      ],
      targetPage,
      timeout
    );
    const element = await waitForSelectors(
      [
        ["#passwordInput"],
        ['xpath///*[@id="passwordInput"]'],
        ["text/VFR44rfv"],
      ],
      targetPage,
      { timeout, visible: true }
    );
    const type = await element.evaluate((el) => el.type);
    if (["select-one"].includes(type)) {
      await element.select("VFR44rfv");
    } else if (
      [
        "textarea",
        "text",
        "url",
        "tel",
        "search",
        "password",
        "number",
        "email",
      ].includes(type)
    ) {
      await element.type("VFR44rfv");
    } else {
      await element.focus();
      await element.evaluate((el, value) => {
        el.value = value;
        el.dispatchEvent(new Event("input", { bubbles: true }));
        el.dispatchEvent(new Event("change", { bubbles: true }));
      }, "VFR44rfv");
    }
  }
  {
    const targetPage = page;
    const promises = [];
    promises.push(targetPage.waitForNavigation());
    await scrollIntoViewIfNeeded(
      [
        ["aria/Sign in"],
        ["#submitButton"],
        ['xpath///*[@id="submitButton"]'],
        ["text/Sign in"],
      ],
      targetPage,
      timeout
    );
    const element = await waitForSelectors(
      [
        ["aria/Sign in"],
        ["#submitButton"],
        ['xpath///*[@id="submitButton"]'],
        ["text/Sign in"],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await element.click({
      offset: {
        x: 28,
        y: 24.9375,
      },
    });
    await Promise.all(promises);
  }
  {
    const targetPage = page;
    const promises = [];
    promises.push(targetPage.waitForNavigation());
    await scrollIntoViewIfNeeded(
      [
        ["aria/Student Timetable"],
        [
          "body > div.pagebodydiv > table.menuplaintable > tbody > tr:nth-child(4) > td:nth-child(2) > span > ul > li:nth-child(1) > a:nth-child(4)",
        ],
        [
          "xpath//html/body/div[3]/table[1]/tbody/tr[4]/td[2]/span/ul/li[1]/a[4]",
        ],
        ["text/Student Timetable"],
      ],
      targetPage,
      timeout
    );
    const element = await waitForSelectors(
      [
        ["aria/Student Timetable"],
        [
          "body > div.pagebodydiv > table.menuplaintable > tbody > tr:nth-child(4) > td:nth-child(2) > span > ul > li:nth-child(1) > a:nth-child(4)",
        ],
        [
          "xpath//html/body/div[3]/table[1]/tbody/tr[4]/td[2]/span/ul/li[1]/a[4]",
        ],
        ["text/Student Timetable"],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await element.click({
      offset: {
        x: 38.734375,
        y: 7.90625,
      },
    });
    await Promise.all(promises);
  }

  console.log("end!");
  await browser.close();

  // ===========================================================================
  // PUPPETEER FUNCTIONS
  // ===========================================================================

  async function waitForSelectors(selectors, frame, options) {
    for (const selector of selectors) {
      try {
        return await waitForSelector(selector, frame, options);
      } catch (err) {
        console.error(err);
      }
    }
    throw new Error(
      "Could not find element for selectors: " + JSON.stringify(selectors)
    );
  }

  async function scrollIntoViewIfNeeded(selectors, frame, timeout) {
    const element = await waitForSelectors(selectors, frame, {
      visible: false,
      timeout,
    });
    if (!element) {
      throw new Error("The element could not be found.");
    }
    await waitForConnected(element, timeout);
    const isInViewport = await element.isIntersectingViewport({ threshold: 0 });
    if (isInViewport) {
      return;
    }
    await element.evaluate((element) => {
      element.scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "auto",
      });
    });
    await waitForInViewport(element, timeout);
  }

  async function waitForConnected(element, timeout) {
    await waitForFunction(async () => {
      return await element.getProperty("isConnected");
    }, timeout);
  }

  async function waitForInViewport(element, timeout) {
    await waitForFunction(async () => {
      return await element.isIntersectingViewport({ threshold: 0 });
    }, timeout);
  }

  async function waitForSelector(selector, frame, options) {
    if (!Array.isArray(selector)) {
      selector = [selector];
    }
    if (!selector.length) {
      throw new Error("Empty selector provided to waitForSelector");
    }
    let element = null;
    for (let i = 0; i < selector.length; i++) {
      const part = selector[i];
      if (element) {
        element = await element.waitForSelector(part, options);
      } else {
        element = await frame.waitForSelector(part, options);
      }
      if (!element) {
        throw new Error("Could not find element: " + selector.join(">>"));
      }
      if (i < selector.length - 1) {
        element = (
          await element.evaluateHandle((el) =>
            el.shadowRoot ? el.shadowRoot : el
          )
        ).asElement();
      }
    }
    if (!element) {
      throw new Error("Could not find element: " + selector.join("|"));
    }
    return element;
  }

  async function waitForElement(step, frame, timeout) {
    const count = step.count || 1;
    const operator = step.operator || ">=";
    const comp = {
      "==": (a, b) => a === b,
      ">=": (a, b) => a >= b,
      "<=": (a, b) => a <= b,
    };
    const compFn = comp[operator];
    await waitForFunction(async () => {
      const elements = await querySelectorsAll(step.selectors, frame);
      return compFn(elements.length, count);
    }, timeout);
  }

  async function querySelectorsAll(selectors, frame) {
    for (const selector of selectors) {
      const result = await querySelectorAll(selector, frame);
      if (result.length) {
        return result;
      }
    }
    return [];
  }

  async function querySelectorAll(selector, frame) {
    if (!Array.isArray(selector)) {
      selector = [selector];
    }
    if (!selector.length) {
      throw new Error("Empty selector provided to querySelectorAll");
    }
    let elements = [];
    for (let i = 0; i < selector.length; i++) {
      const part = selector[i];
      if (i === 0) {
        elements = await frame.$$(part);
      } else {
        const tmpElements = elements;
        elements = [];
        for (const el of tmpElements) {
          elements.push(...(await el.$$(part)));
        }
      }
      if (elements.length === 0) {
        return [];
      }
      if (i < selector.length - 1) {
        const tmpElements = [];
        for (const el of elements) {
          const newEl = (
            await el.evaluateHandle((el) =>
              el.shadowRoot ? el.shadowRoot : el
            )
          ).asElement();
          if (newEl) {
            tmpElements.push(newEl);
          }
        }
        elements = tmpElements;
      }
    }
    return elements;
  }

  async function waitForFunction(fn, timeout) {
    let isActive = true;
    const timeoutId = setTimeout(() => {
      isActive = false;
    }, timeout);
    while (isActive) {
      const result = await fn();
      if (result) {
        clearTimeout(timeoutId);
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    throw new Error("Timed out");
  }

  function delay(time) {
    return new Promise(function (resolve) {
      setTimeout(resolve, time);
    });
  }
})().catch((err) => {
  console.error(err);
  process.exit(1);
});

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}
