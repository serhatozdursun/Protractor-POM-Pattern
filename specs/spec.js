browser.ignoreSynchronization = true;
var homePage = require('../Pages/homePage');
var accountPage = require('../Pages/accountPage');
var accountDashboardPage = require('../Pages/accountDashboardPage');


describe('Navigate to HomePage', function () {

    it('Click Login Menü and Navigate to AccountPage',async function () {
        homePage.open();
        homePage.clickLoginMenu();
        accountPage.typeCredential("apsiyontestotomasyon@gmail.com");
        accountPage.typePassword("Apsiy0n2017?");
        accountPage.clickSubmit();
        accountDashboardPage.isAccountPageOpen();
    });
});
