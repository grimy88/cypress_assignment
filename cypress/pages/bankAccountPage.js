/// <reference types="cypress" />

class BankAccountPage {

    pageElementLocators = {
        createBtn: () => cy.get('[data-test="bankaccount-new"]'),
        bankTitle: () => cy.get('[data-test="bankaccount-list"]>li:last-child'),
        listAllBankTitles: () => cy.get('[data-test="bankaccount-list"]>li')
    }

    clickCreateBtn() {
        this.pageElementLocators.createBtn().click({ force: true })
    }
}

export const bankAccountPage = new BankAccountPage()