/// <reference types="cypress" />

class PersonalPage {

    pageElementLocators = {
        transactionList: () => cy.get('[data-test="transaction-list"]'),
        multipleTransactionItems: () => cy.get('[data-test^="transaction-item-"]'),
        amountFilter: () => cy.get('[data-test="transaction-list-filter-amount-range-button"]'),
        slider: () => cy.get('[data-index="0"]'),
        clearBtn: () => cy.get('[data-test="transaction-list-filter-amount-clear-button"]'),
        firstElementInList: () => cy.get('[data-test="transaction-item-b62uEb20b"] > .MuiPaper-root > :nth-child(1) > .MuiGrid-grid-xs-12 > .MuiGrid-spacing-xs-2 > .MuiGrid-grid-xs-true'),
        firstElementTransactionValue: () => cy.get('.MuiGrid-root.MuiGrid-item')
    }

    clickAmountFilter() {
        this.pageElementLocators.amountFilter().click({ force: true })
    }

    clickClear() {
        this.pageElementLocators.clearBtn().click()
    }
}

export const personalPage = new PersonalPage()