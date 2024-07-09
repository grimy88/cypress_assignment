/// <reference types="cypress" />

import { signInPage } from "../pages/signInPage";
import { accountPage } from "../pages/accountPage";
import { faker } from '@faker-js/faker';

describe('SignIn Tests', () => {

    beforeEach(() => {
        signInPage.goToSignIn()
    });

    it('Verify Sign in with valid data', () => {
        signInPage.enterUsername("1")
        signInPage.enterPassword("1337")
        signInPage.clickSignInBtn()
        accountPage.pageElementLocators.getStartedText().should('have.text', "Get Started with Real World App")
    })

    it('Verify Sign in without username', () => {
        signInPage.pageElementLocators.usernameInput().click()
        signInPage.enterPassword("1337")
        signInPage.pageElementLocators.signInBtn().should('be.disabled')
        signInPage.pageElementLocators.usernameErrorMessage().should('contain.text', "Username is required")
    })

    it('Verify Sign in without password', () => {
        signInPage.enterUsername("1")
        signInPage.pageElementLocators.passwordInput().click()
        signInPage.pageElementLocators.signInBtn().should('be.disabled')
    })

    it('Verify Sign in with empty spaces', () => {
        signInPage.enterUsername(" ")
        signInPage.enterPassword("    ")
        signInPage.clickSignInBtn()
        signInPage.pageElementLocators.errorMessage().should('contain.text', "Username or password is invalid")
    })

    it('Verify Sign in with numbers', () => {
        signInPage.enterUsername("1")
        signInPage.enterPassword("1337")
        signInPage.clickSignInBtn()
        accountPage.pageElementLocators.getStartedText().should('have.text', "Get Started with Real World App")
    })

    it('Verify Sign in with negative numbers', () => {
        signInPage.enterUsername("-1456")
        signInPage.enterPassword("-1234")
        signInPage.clickSignInBtn()
        accountPage.pageElementLocators.getStartedText().should('have.text', "Get Started with Real World App")
    })

    it('Verify Sign in with special characters', () => {
        signInPage.enterUsername("@#$!")
        signInPage.enterPassword("@$#!")
        signInPage.clickSignInBtn()
        signInPage.pageElementLocators.errorMessage().should('contain.text', "Username or password is invalid")
    })

    it('Verify Sign in with alphabet letters', () => {
        signInPage.enterUsername("c")
        signInPage.enterPassword("dddd")
        signInPage.clickSignInBtn()
        accountPage.pageElementLocators.getStartedText().should('have.text', "Get Started with Real World App")
    })

    it('Verify Sign in with decimal numbers', () => {
        signInPage.enterUsername("3.9876")
        signInPage.enterPassword("1.337")
        signInPage.clickSignInBtn()
        accountPage.pageElementLocators.getStartedText().should('have.text', "Get Started with Real World App")
    })

    it('Verify that user can Sign in without Registerd account', () => {
        signInPage.enterUsername(faker.internet.userName())
        signInPage.enterPassword(faker.internet.password())
        signInPage.clickSignInBtn()
        signInPage.pageElementLocators.errorMessage().should('contain.text', "Username or password is invalid")
    })

    it('Verify remmember me function', () => {
        signInPage.enterUsername("bi")
        signInPage.enterPassword("1337")
        signInPage.clickRememberMe()
        signInPage.clickSignInBtn()
        accountPage.pageElementLocators.getStartedText().should('have.text', "Get Started with Real World App")
        signInPage.goToSignIn()
        accountPage.pageElementLocators.getStartedText().should('have.text', "Get Started with Real World App")
    })

    afterEach(() => {
        cy.clearCookies();
    });
})