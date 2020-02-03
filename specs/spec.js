browser.ignoreSynchronization = true;
var homePage = require('../Pages/homePage');
var accountPage = require('../Pages/accountPage');
describe('Navigate to HomePage', function () {

    it('Click Login Menü and Navigate to AccountPage', function () {

        homePage.open();
        homePage.clickLoginMenu();
        accountPage.typeCredential("youre credential");
        accountPage.typePassword("youre password");
        accountPage.clickSubmit();
    });
});