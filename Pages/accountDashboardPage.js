var AccountDashboardPage = function () {

    /**
     *
     * @return {string}
     */
    function getURL() {
        return browser.executeScript('window.location.href');
    }

    this.isAccountPageOpen = async function () {
        return await expect(getURL()).toBe('https://www.apsiyon.com/account/user');
    }
};
module.exports = new AccountDashboardPage();
