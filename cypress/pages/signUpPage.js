/// <reference types="cypress" />

class SignUpPage {

    pageElementLocators = {
        firstNameInput: () => cy.get("#firstName"),
        lastNameInput: () => cy.get("#lastName"),
        usernameInput: () => cy.get("#username"),
        passwordInput: () => cy.get("#password"),
        confirmPasswordInput: () => cy.get("#confirmPassword"),
        creteNewAccountBtn: () => cy.get('[data-test="signup"]'),
        signUpBtn: () => cy.get('[data-test="signup-submit"]'),
        firstNameErrorMessage: () => cy.get("#firstName-helper-text"),
        lastNameErrorMessage: () => cy.get("#lastName-helper-text"),
        usernameErrorMessage: () => cy.get('#username-helper-text'),
        passwordErrorMessage: () => cy.get('#password-helper-text'),
        confirmPasswordErrorMessage: () => cy.get('#confirmPassword-helper-text')
    }

    goToSignUpPage() {
        cy.visit("http://localhost:3000/signup")
    }

    enterFirstName(firstName) {
        this.pageElementLocators.firstNameInput().clear()
        this.pageElementLocators.firstNameInput().type(firstName)
    }

    enterLastName(lastName) {
        this.pageElementLocators.lastNameInput().clear()
        this.pageElementLocators.lastNameInput().type(lastName)
    }

    enterUsername(username) {
        this.pageElementLocators.usernameInput().clear()
        this.pageElementLocators.usernameInput().type(username)
    }

    enterPassword(password) {
        this.pageElementLocators.passwordInput().clear()
        this.pageElementLocators.passwordInput().type(password)
    }

    enterConfirmPassword(confirmPassword) {
        this.pageElementLocators.confirmPasswordInput().clear()
        this.pageElementLocators.confirmPasswordInput().type(confirmPassword)
    }

    clickSignUpBtn() {
        this.pageElementLocators.signUpBtn().click()
    }

    clickCreateNewAccount() {
        this.pageElementLocators.creteNewAccountBtn().click()
    }
}

export const signUpPage = new SignUpPage()
