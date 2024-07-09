/// <reference types="cypress" />

class AccountPage {

    pageElementLocators = {
        getStartedText: () => cy.get('[data-test="user-onboarding-dialog-title"] > .MuiTypography-root'),
        firstNameInput: () => cy.get('#user-settings-firstName-input'),
        lastNameInput: () => cy.get('#user-settings-lastName-input'),
        emailInput: () => cy.get('[data-test="user-settings-email-input"]'),
        phoneNumberInput: () => cy.get('[data-test="user-settings-phoneNumber-input"]'),
        saveBtn: () => cy.get('[data-test="user-settings-submit"]'),
        bankNameInput: () => cy.get('#bankaccount-bankName-input'),
        routingNumberInput: () => cy.get('#bankaccount-routingNumber-input'),
        accountNumberInput: () => cy.get('#bankaccount-accountNumber-input'),
        bankAccountSubmit: () => cy.get('[data-test="bankaccount-submit"]'),
        doneBtn: () => cy.get('[data-test="user-onboarding-next"]'),
        bankNameErrorMessage: () => cy.get('#bankaccount-bankName-input-helper-text'),
        routingNumberErrorMessage: () => cy.get('#bankaccount-routingNumber-input-helper-text'),
        accountNumberErrorMessage: () => cy.get('#bankaccount-accountNumber-input-helper-text'),
    }

    enterFirstName(firstName) {
        this.pageElementLocators.firstNameInput().type(firstName)
    }

    enterLastName(lastName) {
        this.pageElementLocators.lastNameInput().type(lastName)
    }

    enterEmail(email) {
        this.pageElementLocators.emailInput().clear()
        this.pageElementLocators.emailInput().type(email)
    }

    enterPhoneNumber(phoneNumber) {
        this.pageElementLocators.phoneNumberInput().clear()
        this.pageElementLocators.phoneNumberInput().type(phoneNumber)
    }

    clickSaveBtn() {
        this.pageElementLocators.saveBtn().click()
    }

    enterBankName(bankName) {
        this.pageElementLocators.bankNameInput().clear()
        this.pageElementLocators.bankNameInput().type(bankName)
    }

    enterRoutingNumber(routingNumber) {
        this.pageElementLocators.routingNumberInput().clear()
        this.pageElementLocators.routingNumberInput().type(routingNumber)
    }

    enterAccountNumber(accountNumber) {
        this.pageElementLocators.accountNumberInput().clear()
        this.pageElementLocators.accountNumberInput().type(accountNumber)
    }

    saveBankAccount() {
        this.pageElementLocators.bankAccountSubmit().click()
    }

    clickDoneBtn() {
        this.pageElementLocators.doneBtn().click()
    }
}

export const accountPage = new AccountPage()