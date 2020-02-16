browser.ignoreSynchronization = true;
var homePage = require('../Pages/homePage');
var accountPage = require('../Pages/accountPage');
var accountDashboardPage = require('../Pages/accountDashboardPage');


describe('Navigate to HomePage', function () {

    it('Click Login Menü and Navigate to AccountPage',async function () {
        homePage.open();
        homePage.clickLoginMenu();
        accountPage.typeCredential("xxxxx@gmail.com");
        accountPage.typePassword("Xxxxxxx");
        accountPage.clickSubmit();
        accountDashboardPage.isAccountPageOpen();
    });
});
