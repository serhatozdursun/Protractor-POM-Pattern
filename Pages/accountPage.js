var AccountPage = function () {
    var credential = element(by.css('#txt_loginForm_emailPhone input'));
    var password = element(by.css('#txt_loginForm_password input'));
    var submitBt = element(by.id('btn_loginForm_submit'));

    /**
     * Get Home Page
     */
    this.typeCredential = async function (string) {
        var until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(credential), 5000, 'Element taking too long to appear in the DOM');
       return await credential.sendKeys(string);
    };

    this.typePassword = async function (string) {
        var until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(password), 5000, 'Element taking too long to appear in the DOM');
        return await password.sendKeys(string);
    };

    this.clickSubmit = async function () {
        return await browser.actions(submitBt).click();
    };
};
module.exports = new AccountPage();
// class accountPage{
//     constructor() {
//         this.credential = $('.txt_loginForm_emailPhone input');
//         this.password = $('.txt_loginForm_emailPhone input');
//         this.loginBtn = $('#btn_loginForm_submit');
//     }
//     /**
//      * search for a friend
//      * @param  {string} credential
//      * @return accountPage
//      */
//     tyhpeCredential(string){
//         this.credential.sendKeys(string)
//         return accountPage();
//     }
//     /**
//      * search for a friend
//      * @param  {string} credential
//      * @return accountPage
//      */
//     typePassword(string){
//          this.password.sendKeys(string);
//          return accountPage();
//     }
//
//     /**
//      * @return {promise}
//      */
//     clickLoginSubmitBtn(){
//         return this.loginBtn().click();
//     }
//
// }
// module.exports = new accountPage();