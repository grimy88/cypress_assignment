/// <reference types="cypress" />

import { signUpPage } from "../pages/signUpPage";
import { signInPage } from "../pages/signInPage";
import { faker } from '@faker-js/faker';

describe('SignUp Tests', () => {

    beforeEach(() => {
        signUpPage.goToSignUpPage()
    })

    it('Verify registration with valid data', () => {
        signUpPage.enterFirstName("B")
        signUpPage.enterLastName("I")
        signUpPage.enterUsername("bi")
        signUpPage.enterPassword("1337")
        signUpPage.enterConfirmPassword("1337")
        signUpPage.clickSignUpBtn()
        signInPage.pageElementLocators.signInTitle().should('have.text', "Sign in")
    })

    it('Verify registration without First Name field', () => {
        signUpPage.pageElementLocators.firstNameInput().click()
        signUpPage.enterLastName("I")
        signUpPage.enterUsername("bi")
        signUpPage.enterPassword("1337")
        signUpPage.enterConfirmPassword("1337")
        signUpPage.pageElementLocators.signUpBtn().should('be.disabled')
        signUpPage.pageElementLocators.firstNameErrorMessage().should('have.text', "First Name is required")
    })

    it('Verify registration without Last Name field', () => {
        signUpPage.enterFirstName("B")
        signUpPage.pageElementLocators.lastNameInput().click()
        signUpPage.enterUsername("bi")
        signUpPage.enterPassword("1337")
        signUpPage.enterConfirmPassword("1337")
        signUpPage.pageElementLocators.signUpBtn().should('be.disabled')
        signUpPage.pageElementLocators.lastNameErrorMessage().should('have.text', "Last Name is required")
    })

    it('Verify registration without username field', () => {
        signUpPage.enterFirstName("B")
        signUpPage.enterLastName("I")
        signUpPage.pageElementLocators.usernameInput().click()
        signUpPage.enterPassword("1337")
        signUpPage.enterConfirmPassword("1337")
        signUpPage.pageElementLocators.signUpBtn().should('be.disabled')
        signUpPage.pageElementLocators.usernameErrorMessage().should('have.text', "Username is required")
    })

    it('Verify registration without password field', () => {
        signUpPage.enterFirstName("B")
        signUpPage.enterLastName("I")
        signUpPage.enterUsername("bi")
        signUpPage.pageElementLocators.passwordInput().click()
        signUpPage.enterConfirmPassword("1337")
        signUpPage.pageElementLocators.signUpBtn().should('be.disabled')
        signUpPage.pageElementLocators.passwordErrorMessage().should('have.text', "Enter your password")
    })

    it('Verify registration without confirm password field', () => {
        signUpPage.enterFirstName("B")
        signUpPage.enterLastName("I")
        signUpPage.enterUsername("bi")
        signUpPage.enterPassword("1337")
        signUpPage.pageElementLocators.confirmPasswordInput().dblclick()
        signUpPage.pageElementLocators.passwordInput().click()
        signUpPage.pageElementLocators.signUpBtn().should('be.disabled')
        signUpPage.pageElementLocators.confirmPasswordErrorMessage().should('have.text', "Confirm your password")
    })

    it('Verify registration with empty spaces', () => {
        signUpPage.enterFirstName(" ")
        signUpPage.enterLastName(" ")
        signUpPage.enterUsername(" ")
        signUpPage.enterPassword("    ")
        signUpPage.enterConfirmPassword("    ")
        signUpPage.clickSignUpBtn()
        signInPage.pageElementLocators.signInTitle().should('have.text', "Sign in")
    })

    it('Verify registration with numbers for all fields', () => {
        signUpPage.enterFirstName("1")
        signUpPage.enterLastName("1")
        signUpPage.enterUsername("1")
        signUpPage.enterPassword("1337")
        signUpPage.enterConfirmPassword("1337")
        signUpPage.clickSignUpBtn()
        signInPage.pageElementLocators.signInTitle().should('have.text', "Sign in")
    })

    it('Verify registration with negative numbers for all fields', () => {
        signUpPage.enterFirstName("-1")
        signUpPage.enterLastName("-1234")
        signUpPage.enterUsername("-1456")
        signUpPage.enterPassword("-1234")
        signUpPage.enterConfirmPassword("-1234")
        signUpPage.clickSignUpBtn()
        signInPage.pageElementLocators.signInTitle().should('have.text', "Sign in")
    })

    it('Verify registration with special characters for all fields', () => {
        signUpPage.enterFirstName("@$%!")
        signUpPage.enterUsername("@^$#")
        signUpPage.enterPassword("@@@@")
        signUpPage.enterConfirmPassword("@@@@")
        signUpPage.pageElementLocators.signUpBtn().should('be.disabled')
    })

    it('Verify registration with only alphabet letters', () => {
        signUpPage.enterFirstName("a")
        signUpPage.enterLastName("b")
        signUpPage.enterUsername("c")
        signUpPage.enterPassword("dddd")
        signUpPage.enterConfirmPassword("dddd")
        signUpPage.clickSignUpBtn()
        signInPage.pageElementLocators.signInTitle().should('have.text', "Sign in")
    })

    it('Verify registration with decimal numbers', () => {
        signUpPage.enterFirstName("1.1")
        signUpPage.enterLastName("2.1324")
        signUpPage.enterUsername("3.9876")
        signUpPage.enterPassword("1.337")
        signUpPage.enterConfirmPassword("1.337")
        signUpPage.clickSignUpBtn()
        signInPage.pageElementLocators.signInTitle().should('have.text', "Sign in")
    })

    // Input field value length should not exceed 255 characters
    it('Verify maximum value length for all fields', () => {
        signUpPage.enterFirstName("abc".repeat(85))
        signUpPage.enterLastName("abc".repeat(85))
        signUpPage.enterUsername("abc".repeat(85))
        signUpPage.enterPassword("1337".repeat(100))
        signUpPage.enterConfirmPassword("1337".repeat(100))
        signUpPage.clickSignUpBtn()
        signInPage.pageElementLocators.signInTitle().should('have.text', "Sign in")
    })

    it('Verify minimum password length', () => {
        signUpPage.enterFirstName("B")
        signUpPage.enterLastName("I")
        signUpPage.pageElementLocators.usernameInput().click()
        signUpPage.enterPassword("ab")
        signUpPage.pageElementLocators.passwordErrorMessage().should('have.text', "Password must contain at least 4 characters")
        signUpPage.enterConfirmPassword("1337")
        signUpPage.pageElementLocators.signUpBtn().should('be.disabled')
        signUpPage.pageElementLocators.confirmPasswordErrorMessage().should('have.text', "Password does not match")
    })

    it('Verify that password and confirm password must be the same', () => {
        signUpPage.enterFirstName(faker.person.firstName())
        signUpPage.enterLastName(faker.person.lastName())
        signUpPage.enterUsername(faker.internet.userName())
        signUpPage.enterPassword(faker.internet.password())
        signUpPage.enterConfirmPassword(faker.internet.password())
        signUpPage.pageElementLocators.signUpBtn().should('be.disabled')
        signUpPage.pageElementLocators.confirmPasswordErrorMessage().should('have.text', "Password does not match")
    })

    it('Verify that registration is possible with already existing account', () => {
        // Creating new account
        signUpPage.enterFirstName("B")
        signUpPage.enterLastName("I")
        signUpPage.enterUsername("1")
        signUpPage.enterPassword("1337")
        signUpPage.enterConfirmPassword("1337")
        signUpPage.clickSignUpBtn()

        signUpPage.goToSignUpPage()
        cy.wait(500)
        signUpPage.clickCreateNewAccount()

        // Creating new account with same data
        signUpPage.enterFirstName("B")
        signUpPage.enterLastName("I")
        signUpPage.enterUsername("1")
        signUpPage.enterPassword("1337")
        signUpPage.enterConfirmPassword("1337")
        signUpPage.clickSignUpBtn()
        signInPage.pageElementLocators.signInTitle().should('have.text', "Sign in")
    })

    afterEach(() => {
        cy.clearCookies();
    });
})