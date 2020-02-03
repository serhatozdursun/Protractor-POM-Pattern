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


// class HomePage {
//
//     constructor() {
//         this.loginButton = $('.login-button');
//     }
//
//     /**
//      * search for a friend
//      * @return {promise}
//      */
//     assertHomePageIsOpen() {
//         var WaitForPage = function (pageTitle, timeout = 30000) {
//             var deferred = promise.defer();
//             browser.waitForAngular().then(function () {
//                 var el = element(by.cssContainingText('h1', pageTitle));
//                 var EC = protractor.ExpectedConditions;
//                 browser.wait(EC.presenceOf(el), timeout).then(function () {
//                     deferred.fulfill();
//                 });
//             });
//             return deferred.promise;
//         };
//         WaitForPage();
//         var url = window.location.href;
//
//         if (!url === "https://www.apsiyon.com/") {
//             throw "Home page wasn't loaded";
//         }
//     }
//
//     /**
//      *
//      */
//     clickLoginBtn() {
//         this.loginButton.click();
//     }
//
// }
//
// module.exports = new HomePage();