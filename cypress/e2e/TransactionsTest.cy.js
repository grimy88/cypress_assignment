/// <reference types="cypress" />

import { homePage } from "../pages/homePage";
import { signInPage } from "../pages/signInPage";
import { transactionsPage } from "../pages/transactionsPage";

describe('Transactions Tests', () => {

    beforeEach(() => {
        signInPage.goToSignIn()
        signInPage.enterUsername("1")
        signInPage.enterPassword("1337")
        signInPage.clickSignInBtn()
        homePage.clickHomePageTab()
        homePage.clickTransactionsBtn()
    });

    it('Verify creating Request Transaction with valid data', () => {
        transactionsPage.enterSearchField("1")
        transactionsPage.clickSelectUser()
        transactionsPage.enterAmount("10")
        transactionsPage.enterTransactionNote("Test1")
        transactionsPage.clickRequest()
        transactionsPage.pageElementLocators.messageOfTransaction().should('contain.text', "Requested")
    })

    it('Verify creating Pay Transaction with valid data', () => {
        transactionsPage.enterSearchField("1")
        transactionsPage.clickSelectUser()
        transactionsPage.enterAmount("10")
        transactionsPage.enterTransactionNote("Test1")
        transactionsPage.clickPay()
        transactionsPage.pageElementLocators.messageOfTransaction().should('contain.text', "Paid")
    })

    it('Verify creating Request Transaction with empty space for Amount', () => {
        transactionsPage.enterSearchField("1")
        transactionsPage.clickSelectUser()
        transactionsPage.enterAmount(" ")
        transactionsPage.enterTransactionNote("Test1")
        transactionsPage.pageElementLocators.submitRequestBtn().should('be.disabled')
        transactionsPage.pageElementLocators.requiredAmount().should('contain.text', "Please enter a valid amount")
    })

    it('Verify creating Pay Transaction with empty space for Amount ', () => {
        transactionsPage.enterSearchField("1")
        transactionsPage.clickSelectUser()
        transactionsPage.enterAmount(" ")
        transactionsPage.enterTransactionNote("Test1")
        transactionsPage.pageElementLocators.submitPaymentBtn().should('be.disabled')
        transactionsPage.pageElementLocators.requiredAmount().should('contain.text', "Please enter a valid amount")
    })

    it('Verify creating Request Transaction with empty space for Transaction Note', () => {
        transactionsPage.enterSearchField("1")
        transactionsPage.clickSelectUser()
        transactionsPage.enterAmount("10")
        transactionsPage.enterTransactionNote(" ")
        transactionsPage.clickRequest()
        transactionsPage.pageElementLocators.messageOfTransaction().should('contain.text', "Requested")
    })

    it('Verify creating Pay Transaction with empty space for Transaction Note', () => {
        transactionsPage.enterSearchField("1")
        transactionsPage.clickSelectUser()
        transactionsPage.enterAmount("10")
        transactionsPage.enterTransactionNote(" ")
        transactionsPage.clickPay()
        transactionsPage.pageElementLocators.messageOfTransaction().should('contain.text', "Paid")
    })

    it('Verify creating Request Transaction using negative number for Amount', () => {
        transactionsPage.enterSearchField("1")
        transactionsPage.clickSelectUser()
        transactionsPage.enterAmount("-10")
        transactionsPage.enterTransactionNote("Test1")
        transactionsPage.clickRequest()
        transactionsPage.pageElementLocators.messageOfTransaction().should('contain.text', "Requested")
    })

    it('Verify creating Pay Transaction using negative number for Amount', () => {
        transactionsPage.enterSearchField("1")
        transactionsPage.clickSelectUser()
        transactionsPage.enterAmount("-10")
        transactionsPage.enterTransactionNote("Test1")
        transactionsPage.clickPay()
        transactionsPage.pageElementLocators.messageOfTransaction().should('contain.text', "Paid")
    })

    it('Verify creating Request Transaction using negative number for Transaction Note', () => {
        transactionsPage.enterSearchField("1")
        transactionsPage.clickSelectUser()
        transactionsPage.enterAmount("10")
        transactionsPage.enterTransactionNote("-10")
        transactionsPage.clickRequest()
        transactionsPage.pageElementLocators.messageOfTransaction().should('contain.text', "Requested")
    })

    it('Verify creating Pay Transaction using negative number for Transaction Note', () => {
        transactionsPage.enterSearchField("1")
        transactionsPage.clickSelectUser()
        transactionsPage.enterAmount("10")
        transactionsPage.enterTransactionNote("-10")
        transactionsPage.clickPay()
        transactionsPage.pageElementLocators.messageOfTransaction().should('contain.text', "Paid")
    })

    it('Verify creating Request Transaction using decimal number for Amount ', () => {
        transactionsPage.enterSearchField("1")
        transactionsPage.clickSelectUser()
        transactionsPage.enterAmount("1.337")
        transactionsPage.enterTransactionNote("Test1")
        transactionsPage.clickRequest()
        transactionsPage.pageElementLocators.messageOfTransaction().should('contain.text', "Requested")
    })

    it('Verify creating Pay Transaction using decimal number for Amount ', () => {
        transactionsPage.enterSearchField("1")
        transactionsPage.clickSelectUser()
        transactionsPage.enterAmount("1.337")
        transactionsPage.enterTransactionNote("Test1")
        transactionsPage.clickPay()
        transactionsPage.pageElementLocators.messageOfTransaction().should('contain.text', "Paid")
    })

    it('Verify creating Request Transaction using decimal number for Transaction Note', () => {
        transactionsPage.enterSearchField("1")
        transactionsPage.clickSelectUser()
        transactionsPage.enterAmount("10")
        transactionsPage.enterTransactionNote("1.337")
        transactionsPage.clickRequest()
        transactionsPage.pageElementLocators.messageOfTransaction().should('contain.text', "Requested")
    })

    it('Verify creating Pay Transaction using decimal number for Transaction Note', () => {
        transactionsPage.enterSearchField("1")
        transactionsPage.clickSelectUser()
        transactionsPage.enterAmount("10")
        transactionsPage.enterTransactionNote("1.337")
        transactionsPage.clickPay()
        transactionsPage.pageElementLocators.messageOfTransaction().should('contain.text', "Paid")
    })

    it('Verify creating Request Transaction using special character for Amount ', () => {
        transactionsPage.enterSearchField("1")
        transactionsPage.clickSelectUser()
        transactionsPage.enterAmount("@#$%!?")
        transactionsPage.enterTransactionNote("Test1")
        transactionsPage.pageElementLocators.submitRequestBtn().should('be.disabled')
        transactionsPage.pageElementLocators.requiredAmount().should('contain.text', "Please enter a valid amount")
    })

    it('Verify creating Pay Transaction using special character for Amount ', () => {
        transactionsPage.enterSearchField("1")
        transactionsPage.clickSelectUser()
        transactionsPage.enterAmount("@#$%!?")
        transactionsPage.enterTransactionNote("Test1")
        transactionsPage.pageElementLocators.submitPaymentBtn().should('be.disabled')
        transactionsPage.pageElementLocators.requiredAmount().should('contain.text', "Please enter a valid amount")
    })

    it('Verify creating Request Transaction using special charater for Transaction Note', () => {
        transactionsPage.enterSearchField("1")
        transactionsPage.clickSelectUser()
        transactionsPage.enterAmount("10")
        transactionsPage.enterTransactionNote("@#$%!?")
        transactionsPage.clickRequest()
        transactionsPage.pageElementLocators.messageOfTransaction().should('contain.text', "Requested")
    })

    it('Verify creating Pay Transaction using special character for Transaction Note', () => {
        transactionsPage.enterSearchField("1")
        transactionsPage.clickSelectUser()
        transactionsPage.enterAmount("10")
        transactionsPage.enterTransactionNote("@#$%!?")
        transactionsPage.clickPay()
        transactionsPage.pageElementLocators.messageOfTransaction().should('contain.text', "Paid")
    })

    it('Verify creating Request Transaction using only alphabet letters for Amount ', () => {
        transactionsPage.enterSearchField("1")
        transactionsPage.clickSelectUser()
        transactionsPage.enterAmount("dddd")
        transactionsPage.enterTransactionNote("Test1")
        transactionsPage.pageElementLocators.submitRequestBtn().should('be.disabled')
        transactionsPage.pageElementLocators.requiredAmount().should('contain.text', "Please enter a valid amount")
    })

    it('Verify creating Pay Transaction using only alphabet letters for Amount ', () => {
        transactionsPage.enterSearchField("1")
        transactionsPage.clickSelectUser()
        transactionsPage.enterAmount("dddd")
        transactionsPage.enterTransactionNote("Test1")
        transactionsPage.pageElementLocators.submitPaymentBtn().should('be.disabled')
        transactionsPage.pageElementLocators.requiredAmount().should('contain.text', "Please enter a valid amount")
    })

    it('Verify creating Request Transaction using only alphabet letters for Transaction Note', () => {
        transactionsPage.enterSearchField("1")
        transactionsPage.clickSelectUser()
        transactionsPage.enterAmount("10")
        transactionsPage.enterTransactionNote("dddd")
        transactionsPage.clickRequest()
        transactionsPage.pageElementLocators.messageOfTransaction().should('contain.text', "Requested")
    })

    it('Verify creating Pay Transaction using only alphabet letters for Transaction Note', () => {
        transactionsPage.enterSearchField("1")
        transactionsPage.clickSelectUser()
        transactionsPage.enterAmount("10")
        transactionsPage.enterTransactionNote("dddd")
        transactionsPage.clickPay()
        transactionsPage.pageElementLocators.messageOfTransaction().should('contain.text', "Paid")
    })

    it('Verify Return to Transactions with valid data after Request', () => {
        transactionsPage.enterSearchField("1")
        transactionsPage.clickSelectUser()
        transactionsPage.enterAmount("10")
        transactionsPage.enterTransactionNote("Test1")
        transactionsPage.clickRequest()
        transactionsPage.pageElementLocators.messageOfTransaction().should('contain.text', "Requested")
        transactionsPage.clickReturnToTransactions()
        transactionsPage.pageElementLocators.everyoneTab().should('have.text', "Everyone")
    })

    it('Verify Create Another Transaction with valid data after Request', () => {
        transactionsPage.enterSearchField("1")
        transactionsPage.clickSelectUser()
        transactionsPage.enterAmount("10")
        transactionsPage.enterTransactionNote("Test1")
        transactionsPage.clickRequest()
        transactionsPage.pageElementLocators.messageOfTransaction().should('contain.text', "Requested")
        transactionsPage.clickCreateAnotherTransaction()
        transactionsPage.pageElementLocators.selectContact().should('have.text', "Select Contact")
    })

    it('Verify Return to Transactions with valid data after Pay', () => {
        transactionsPage.enterSearchField("1")
        transactionsPage.clickSelectUser()
        transactionsPage.enterAmount("10")
        transactionsPage.enterTransactionNote("Test1")
        transactionsPage.clickPay()
        transactionsPage.pageElementLocators.messageOfTransaction().should('contain.text', "Paid")
        transactionsPage.clickReturnToTransactions()
        transactionsPage.pageElementLocators.everyoneTab().should('have.text', "Everyone")
    })

    it('Verify Create Another Transaction with valid data after Pay', () => {
        transactionsPage.enterSearchField("1")
        transactionsPage.clickSelectUser()
        transactionsPage.enterAmount("10")
        transactionsPage.enterTransactionNote("Test1")
        transactionsPage.clickPay()
        transactionsPage.pageElementLocators.messageOfTransaction().should('contain.text', "Paid")
        transactionsPage.clickCreateAnotherTransaction()
        transactionsPage.pageElementLocators.selectContact().should('have.text', "Select Contact")
    })

    afterEach(() => {
        cy.clearCookies();
    });
})