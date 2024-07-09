/// <reference types="cypress" />

import { accountPage } from "../pages/accountPage";
import { homePage } from "../pages/homePage";
import { bankAccountPage } from "../pages/bankAccountPage";
import { signInPage } from "../pages/signInPage";

describe('BankAccount Tests', () => {

    beforeEach(() => {
        signInPage.goToSignIn()
        signInPage.enterUsername("1")
        signInPage.enterPassword("1337")
        signInPage.clickSignInBtn()
        homePage.clickHomePageTab()
        homePage.clickBankAccount()
    });

    it('Verify create new Bank Account with valid data', () => {
        bankAccountPage.clickCreateBtn()
        accountPage.enterBankName("Vojvodjanska Banka")
        accountPage.enterRoutingNumber("123456789")
        accountPage.enterAccountNumber("123456789")
        accountPage.saveBankAccount()
        bankAccountPage.pageElementLocators.bankTitle().should('contains.text', "Vojvodjanska")
    })

    it('Verify create new Bank Account with empty space for bank name', () => {
        bankAccountPage.clickCreateBtn()
        accountPage.enterBankName(" ")
        accountPage.enterRoutingNumber("123456789")
        accountPage.enterAccountNumber("123456789")
        accountPage.pageElementLocators.bankAccountSubmit().should('be.disabled')
        accountPage.pageElementLocators.bankNameErrorMessage().should('have.text', "Must contain at least 5 characters")
    })

    it('Verify create new Bank Account with empty routing number', () => {
        bankAccountPage.clickCreateBtn()
        accountPage.enterBankName("Vojvodjanska Banka")
        accountPage.enterRoutingNumber(" ")
        accountPage.enterAccountNumber("123456789")
        accountPage.pageElementLocators.bankAccountSubmit().should('be.disabled')
        accountPage.pageElementLocators.routingNumberErrorMessage().should('have.text', "Must contain a valid routing number")
    })

    it('Verify create new Bank Account with empty account number', () => {
        bankAccountPage.clickCreateBtn()
        accountPage.enterBankName("Vojvodjanska Banka")
        accountPage.enterRoutingNumber("123456789")
        accountPage.enterAccountNumber(" ")
        accountPage.pageElementLocators.bankAccountSubmit().should('be.disabled')
        accountPage.pageElementLocators.accountNumberErrorMessage().should('have.text', "Must contain at least 9 digits")
    })

    it('Verify create new Bank Account with invalid bank name', () => {
        bankAccountPage.clickCreateBtn()
        accountPage.enterBankName("InvalidBankName")
        accountPage.enterRoutingNumber("123456789")
        accountPage.enterAccountNumber("123456789")
        accountPage.saveBankAccount()
        bankAccountPage.pageElementLocators.bankTitle().should('contains.text', "InvalidBankName")
    })

    it('Verify create new Bank Account with invalid routing number', () => {
        bankAccountPage.clickCreateBtn()
        accountPage.enterBankName("Vojvodjanska Banka")
        accountPage.enterRoutingNumber("invalidRoutingNumber")
        accountPage.enterAccountNumber("123456789")
        accountPage.pageElementLocators.bankAccountSubmit().should('be.disabled')
        accountPage.pageElementLocators.routingNumberErrorMessage().should('have.text', "Must contain a valid routing number")
    })

    it('Verify create new Bank Account with invalid account number', () => {
        bankAccountPage.clickCreateBtn()
        accountPage.enterBankName("Vojvodjanska Banka")
        accountPage.enterRoutingNumber("123456789")
        accountPage.enterAccountNumber("invalidAccountNumber")
        accountPage.pageElementLocators.bankAccountSubmit().should('be.disabled')
        accountPage.pageElementLocators.accountNumberErrorMessage().should('have.text', "Must contain no more than 12 digits")
    })

    it('Verify create new Bank Account with invalid data in all fields', () => {
        bankAccountPage.clickCreateBtn()
        accountPage.enterBankName("InvalidBankName")
        accountPage.enterRoutingNumber("invalidRoutingNumber")
        accountPage.enterAccountNumber("invalidAccountNumber")
        accountPage.pageElementLocators.bankAccountSubmit().should('be.disabled')
        accountPage.pageElementLocators.routingNumberErrorMessage().should('have.text', "Must contain a valid routing number")
        accountPage.pageElementLocators.accountNumberErrorMessage().should('have.text', "Must contain no more than 12 digits")
    })

    it('Verify create new Bank Account with negative routing number', () => {
        bankAccountPage.clickCreateBtn()
        accountPage.enterBankName("Vojvodjanska Banka")
        accountPage.enterRoutingNumber("-123456789")
        accountPage.enterAccountNumber("123456789")
        accountPage.pageElementLocators.bankAccountSubmit().should('be.disabled')
        accountPage.pageElementLocators.routingNumberErrorMessage().should('have.text', "Must contain a valid routing number")
    })

    it('Verify create new Bank Account with negative account number', () => {
        bankAccountPage.clickCreateBtn()
        accountPage.enterBankName("Vojvodjanska Banka")
        accountPage.enterRoutingNumber("123456789")
        accountPage.enterAccountNumber("-123456789")
        accountPage.saveBankAccount()
        bankAccountPage.pageElementLocators.bankTitle().should('contains.text', "Vojvodjanska Banka")
    })

    it('Verify create new Bank Account with alphanumeric routing number', () => {
        bankAccountPage.clickCreateBtn()
        accountPage.enterBankName("Vojvodjanska Banka")
        accountPage.enterRoutingNumber("abcd1234")
        accountPage.enterAccountNumber("123456789")
        accountPage.pageElementLocators.bankAccountSubmit().should('be.disabled')
        accountPage.pageElementLocators.routingNumberErrorMessage().should('have.text', "Must contain a valid routing number")
    })

    it('Verify create new Bank Account with alphanumeric account number', () => {
        bankAccountPage.clickCreateBtn()
        accountPage.enterBankName("Vojvodjanska Banka")
        accountPage.enterRoutingNumber("123456789")
        accountPage.enterAccountNumber("abcd1234")
        accountPage.pageElementLocators.bankAccountSubmit().should('be.disabled')
        accountPage.pageElementLocators.accountNumberErrorMessage().should('have.text', "Must contain at least 9 digits")
    })

    it('Verify create new Bank Account with too short bank name', () => {
        bankAccountPage.clickCreateBtn()
        accountPage.enterBankName("A")
        accountPage.enterRoutingNumber("123456789")
        accountPage.enterAccountNumber("123456789")
        accountPage.pageElementLocators.bankAccountSubmit().should('be.disabled')
        accountPage.pageElementLocators.bankNameErrorMessage().should('have.text', "Must contain at least 5 characters")
    })

    it('Verify create new Bank Account with too long routing number', () => {
        bankAccountPage.clickCreateBtn()
        accountPage.enterBankName("Vojvodjanska Banka")
        accountPage.enterRoutingNumber("123456789012345678901234567890")
        accountPage.enterAccountNumber("123456789")
        accountPage.pageElementLocators.bankAccountSubmit().should('be.disabled')
        accountPage.pageElementLocators.routingNumberErrorMessage().should('have.text', "Must contain a valid routing number")
    })

    it('Verify create new Bank Account with too short account number', () => {
        bankAccountPage.clickCreateBtn()
        accountPage.enterBankName("Vojvodjanska Banka")
        accountPage.enterRoutingNumber("123456789")
        accountPage.enterAccountNumber("1234")
        accountPage.pageElementLocators.bankAccountSubmit().should('be.disabled')
        accountPage.pageElementLocators.accountNumberErrorMessage().should('have.text', "Must contain at least 9 digits")
    })

    it('Verify create new Bank Account with special characters in bank name', () => {
        bankAccountPage.clickCreateBtn()
        accountPage.enterBankName("Vojvodjanska#@%$!?Banka")
        accountPage.enterRoutingNumber("123456789")
        accountPage.enterAccountNumber("123456789")
        accountPage.saveBankAccount()
        bankAccountPage.pageElementLocators.bankTitle().should('contains.text', "Vojvodjanska#@%$!?Banka")
    })

    it('Verify create new Bank Account with special characters in routing number', () => {
        bankAccountPage.clickCreateBtn()
        accountPage.enterBankName("Vojvodjanska Banka")
        accountPage.enterRoutingNumber("1234@#$%!?56789")
        accountPage.enterAccountNumber("123456789")
        accountPage.pageElementLocators.bankAccountSubmit().should('be.disabled')
        accountPage.pageElementLocators.routingNumberErrorMessage().should('have.text', "Must contain a valid routing number")
    })

    it('Verify create new Bank Account with special characters in account number', () => {
        bankAccountPage.clickCreateBtn()
        accountPage.enterBankName("Vojvodjanska Banka")
        accountPage.enterRoutingNumber("123456789")
        accountPage.enterAccountNumber("1234@#$%!?56789")
        accountPage.pageElementLocators.bankAccountSubmit().should('be.disabled')
        accountPage.pageElementLocators.accountNumberErrorMessage().should('have.text', "Must contain no more than 12 digits")
    })

    afterEach(() => {
        cy.clearCookies();
    });
})