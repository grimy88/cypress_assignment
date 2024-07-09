/// <reference types="cypress" />

import { accountPage } from "../pages/accountPage";
import { signInPage } from "../pages/signInPage";
import { homePage } from "../pages/homePage";

describe('MyAccount Tests', () => {

    before(() => {
        signInPage.goToSignIn()
        signInPage.enterUsername("1")
        signInPage.enterPassword("1337")
        signInPage.clickSignInBtn()

        // Waiting for popup which is loaded later
        cy.wait(2000)

        // Checking for popup if it is present
        if (signInPage.pageElementLocators.nextBtn().should('exist')) {
            signInPage.clickNext();
            accountPage.enterBankName("Vojvodjanska Banka");
            accountPage.enterRoutingNumber("123456789");
            accountPage.enterAccountNumber("123456789");
            accountPage.saveBankAccount();
            accountPage.clickDoneBtn();
            homePage.clickMyAccountTab();
        } else {
            homePage.clickMyAccountTab()
        }
    });

    it('Verify updating account information', () => {

        // Fetching old values to return after test
        let firstNameOldValue = Cypress.$('#user-settings-firstName-input').val()
        let lastNameOldValue = Cypress.$('#user-settings-lastName-input').val()
        let emailOldValue = Cypress.$('#user-settings-email-input').val()
        let phoneNumberOldValue = Cypress.$('#user-settings-phoneNumber-input').val()

        // Updating values
        accountPage.enterFirstName(" updated")
        accountPage.enterLastName(" updated")
        accountPage.enterEmail("test@fakemail.com")
        accountPage.enterPhoneNumber("1337997")

        accountPage.clickSaveBtn()
        cy.wait(500)
        homePage.clickHomePageTab()
        homePage.clickMyAccountTab()

        const newValues = {
            firstName: () => cy.get('#user-settings-firstName-input'),
            lastName: () => cy.get('#user-settings-lastName-input'),
            email: () => cy.get('#user-settings-email-input'),
            phoneNumber: () => cy.get('#user-settings-phoneNumber-input')
        }

        // Comparing updated values to original values
        newValues.firstName().invoke('val').should('not.eql', firstNameOldValue)
        newValues.lastName().invoke('val').should('not.eql', lastNameOldValue)
        newValues.email().invoke('val').should('not.eql', emailOldValue)
        newValues.phoneNumber().invoke('val').should('not.eql', phoneNumberOldValue)


        // Returning first and last name to previous values
        // Email and phone number changing to different values compared to updated
        newValues.firstName().clear().type(firstNameOldValue)
        newValues.lastName().clear().type(lastNameOldValue)
        newValues.email().clear().type("newTest@fakemail.com")
        newValues.phoneNumber().clear().type("654321")
        accountPage.clickSaveBtn()
    })

    afterEach(() => {
        cy.clearCookies();
    });
})