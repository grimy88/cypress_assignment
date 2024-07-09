/// <reference types="cypress" />

class HomePage {

    pageElementLocators = {
        myAccountTab: () => cy.get('[data-test="sidenav-user-settings"]'),
        homePageTab: () => cy.get('[data-test="sidenav-home"]'),
        bankAccountTab: () => cy.get('[data-test="sidenav-bankaccounts"]'),
        newTransactionsBtn: () => cy.get('[data-test="nav-top-new-transaction"]'),
        personalTab: () => cy.get('[data-test="nav-personal-tab"]')
    }

    clickMyAccountTab() {
        this.pageElementLocators.myAccountTab().click()
    }

    clickHomePageTab() {
        this.pageElementLocators.homePageTab().click()
    }

    clickBankAccount() {
        this.pageElementLocators.bankAccountTab().click()
    }

    clickTransactionsBtn() {
        this.pageElementLocators.newTransactionsBtn().click()
    }

    clickPersonalTab() {
        this.pageElementLocators.personalTab().click()
    }
}

export const homePage = new HomePage()