/// <reference types="cypress" />

import { homePage } from "../pages/homePage";
import { bankAccountPage } from "../pages/bankAccountPage";
import { signInPage } from "../pages/signInPage";

describe('API Test for Bank Accounts endpoint', () => {
    it('Verfy Bank Accounts information', () => {
        // Login credentials
        const username = '1';
        const password = '1337';

        // POST request to login
        cy.request({
            method: 'POST',
            url: 'http://localhost:3001/login',
            body: {
                username: username,
                password: password
            }
        }).then(loginResponse => {
            // Validate response status
            expect(loginResponse.status).to.eq(200)

            // POST request to GraphQL
            cy.request({
                method: 'POST',
                url: 'http://localhost:3001/graphql',
                body: {
                    operationName: 'ListBankAccount',
                    query: `
                    query ListBankAccount {
                        listBankAccount {
                        id
                        uuid
                        userId
                        bankName
                        accountNumber
                        routingNumber
                        isDeleted
                        createdAt
                        modifiedAt
                        }
                    }`
                }
            }).then(response => {
                expect(response.status).to.eq(200);

                // Bank accounts from response body
                const bankAccounts = response.body.data.listBankAccount

                signInPage.goToSignIn()
                signInPage.enterUsername("1")
                signInPage.enterPassword("1337")
                signInPage.clickSignInBtn()
                homePage.clickHomePageTab()
                homePage.clickBankAccount()

                bankAccountPage.pageElementLocators.listAllBankTitles().each(($el, $index, $list) => {
                    expect($el.find('div').find('div').first().text()).to.include(bankAccounts[$index].bankName)
                })
            });
        });
    });
});
