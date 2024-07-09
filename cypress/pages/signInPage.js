/// <reference types="cypress" />

class SignInPage {

    pageElementLocators = {
        signInTitle: () => cy.get('.MuiTypography-h5'),
        usernameInput: () => cy.get("#username"),
        passwordInput: () => cy.get('#password'),
        rememmberMeCheckbox: () => cy.get('.MuiFormControlLabel-root'),
        signInBtn: () => cy.get('[data-test="signin-submit"]'),
        usernameErrorMessage: () => cy.get('#username-helper-text'),
        passwordErrorMessage: () => cy.get('#password-helper-text'),
        errorMessage: () => cy.get('[data-test="signin-error"]'),
        nextBtn: () => cy.get('[data-test="user-onboarding-next"] > .MuiButton-label')
    }

    goToSignIn() {
        cy.visit("http://localhost:3000/signin")
    }

    enterUsername(username) {
        this.pageElementLocators.usernameInput().clear()
        this.pageElementLocators.usernameInput().type(username)
    }

    enterPassword(password) {
        this.pageElementLocators.passwordInput().clear()
        this.pageElementLocators.passwordInput().type(password)
    }

    clickSignInBtn() {
        this.pageElementLocators.signInBtn().click()
    }

    clickRememberMe() {
        this.pageElementLocators.rememmberMeCheckbox().click()
    }

    clickNext() {
        this.pageElementLocators.nextBtn().click()
    }
}

export const signInPage = new SignInPage()