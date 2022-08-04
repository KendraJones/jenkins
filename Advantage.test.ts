import {Builder, Capabilities, By, until} from 'selenium-webdriver';

const chromedriver = require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

test('Testing Advantage Consumer Prod', async () => {
    await driver.get('https://apply.advantagefinancialonline.net')
    await driver.wait(until.elementLocated(By.name('MyAction')))
    await driver.findElement(By.name('MyAction')).click()
    await driver.wait(until.elementLocated(By.name('Amount')))
    await driver.sleep(1000)
    await driver.quit()
});
