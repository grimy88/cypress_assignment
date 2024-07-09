/// <reference types="cypress" />

class TransactionsPage {

    pageElementLocators = {
        userSearchField: () => cy.get('[data-test="user-list-search-input"]'),
        chooseUser: () => cy.get('li.MuiListItem-root.MuiListItem-gutters:first-child'),
        user: () => cy.get('.MuiBox-root > .MuiGrid-container'),
        amountInput: () => cy.get('#amount'),
        requiredAmount: () => cy.get('#transaction-create-amount-input-helper-text'),
        transactionNote: () => cy.get('#transaction-create-description-input'),
        transactionNoteErrorMessage: () => cy.get('#transaction-create-description-input-helper-text'),
        submitRequestBtn: () => cy.get('[data-test="transaction-create-submit-request"]'),
        submitPaymentBtn: () => cy.get('[data-test="transaction-create-submit-payment"]'),
        messageOfTransaction: () => cy.get('.MuiBox-root-80 > .MuiGrid-container > .MuiGrid-root > .MuiTypography-root'),
        returnToTransactions: () => cy.get('[data-test="new-transaction-return-to-transactions"]'),
        createAnotherTransaction: () => cy.get('[data-test="new-transaction-create-another-transaction"]'),
        everyoneTab: () => cy.get('[data-test="nav-public-tab"]'),
        selectContact: () => cy.get(':nth-child(1) > .MuiStepLabel-root > .MuiStepLabel-labelContainer > .MuiTypography-root'),
        personalTitle: () => cy.get('.makeStyles-container-20')
    }

    enterSearchField(searchText) {
        this.pageElementLocators.userSearchField().clear({ force: true })
        this.pageElementLocators.userSearchField().type(searchText)
    }

    enterAmount(amount) {
        this.pageElementLocators.amountInput().clear()
        this.pageElementLocators.amountInput().type(amount)
    }

    enterTransactionNote(transactionNote) {
        this.pageElementLocators.transactionNote().clear()
        this.pageElementLocators.transactionNote().type(transactionNote)
    }

    clickSelectUser() {
        this.pageElementLocators.chooseUser().click({ force: true })
    }

    clickRequest() {
        this.pageElementLocators.submitRequestBtn().click()
    }

    clickPay() {
        this.pageElementLocators.submitPaymentBtn().click()
    }

    clickReturnToTransactions() {
        this.pageElementLocators.returnToTransactions().click()
    }

    clickCreateAnotherTransaction() {
        this.pageElementLocators.createAnotherTransaction().click()
    }
}

export const transactionsPage = new TransactionsPage()