/// <reference types="cypress" />

import { homePage } from "../pages/homePage";
import { signInPage } from "../pages/signInPage";
import { personalPage } from "../pages/personalPage";
import { transactionsPage } from "../pages/transactionsPage";

describe('Transaction list test', () => {

    beforeEach(() => {
        signInPage.goToSignIn()
        signInPage.enterUsername("1")
        signInPage.enterPassword("1337")
        signInPage.clickSignInBtn()
        homePage.clickHomePageTab()
        homePage.clickPersonalTab()
    });

    // Task 6
    it('Verify that transaction list is present', () => {
        personalPage.pageElementLocators.transactionList().should('exist')
        personalPage.pageElementLocators.multipleTransactionItems().should('have.length.gt', 1)
    });

    // Task 7
    it('Verify transactions are showed within selected amount range', () => {

        // Creating first transaction
        homePage.clickTransactionsBtn()
        transactionsPage.enterSearchField("1")
        transactionsPage.clickSelectUser()
        transactionsPage.enterAmount("120")
        transactionsPage.enterTransactionNote("Test")
        transactionsPage.clickRequest()
        transactionsPage.clickReturnToTransactions()
        homePage.clickPersonalTab()

        // Creating second transaction
        homePage.clickTransactionsBtn()
        transactionsPage.enterSearchField("1")
        transactionsPage.clickSelectUser()
        transactionsPage.enterAmount("121")
        transactionsPage.enterTransactionNote("Test")
        transactionsPage.clickRequest()
        transactionsPage.clickReturnToTransactions()
        homePage.clickPersonalTab()

        personalPage.clickAmountFilter()
        personalPage.pageElementLocators.slider().trigger('mousedown', 22, 0, { force: true })
        personalPage.pageElementLocators.slider().type('{esc}')
        personalPage.pageElementLocators.transactionList().scrollTo('500px')
        personalPage.pageElementLocators.firstElementTransactionValue().eq(19).should('have.text', '+$121.00')
    });

    it.only('Verify clear amount button in filter is working properly', () => {

       
        personalPage.clickAmountFilter()
        personalPage.pageElementLocators.slider().trigger('mousedown', 23, 0, { force: true })
        // Added asssertion for multiple values for attribute since
        // location where its clicked on scrollbar is based on screen size
        personalPage.pageElementLocators.slider().should('have.attr', 'aria-valuenow').should('be.oneOf', ['10', '11', '12'])
        personalPage.clickClear()
        personalPage.pageElementLocators.slider().should('have.attr', 'aria-valuenow', 0)
    });

    afterEach(() => {
        cy.clearCookies();
    });
});