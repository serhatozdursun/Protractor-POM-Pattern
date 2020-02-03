var HomePage = function () {
    var loginButton = element(by.css('.login-button'));

    this.open = async function () {
        return await browser.get('https://www.apsiyon.com/')
    };

    this.clickLoginMenu = async function () {
        return await loginButton.click();
    };
};

module.exports = new HomePage();
