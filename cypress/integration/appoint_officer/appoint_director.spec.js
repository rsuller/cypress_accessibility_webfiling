import CompanySignInPage from '../../support/page_objects/CompanySignInPage'
import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage.js';
import PreFilingAP01Page from '../../support/page_objects/PreFilingAP01Page';
import AppointDirectorPage from '../../support/page_objects/AppointDirectorPage'

import { company_number, auth_code } from '../../fixtures/company.json';

beforeEach(() => {
    // Sign into Webfiling
    cy.signIntoWebfiling();

    // Sign into company to file for
    const companySignIn = new CompanySignInPage();
    cy.accessibilityCheck();
    companySignIn.enterCompanyDetails(company_number, auth_code);
})

describe('Appoint a Director', () => {
    it('File successful AP01', () => {
        // Go to change registered office address
        const companyOverview = new CompanyOverviewPage();
        const preFilingPage = new PreFilingAP01Page();
        const appointDirectorPage = new AppointDirectorPage();

        cy.accessibilityCheck();
        companyOverview.selectLinkWithText('Appoint a director');

        preFilingPage.appointDirector();

        // Check correct page is loaded
        cy.get('h1').should('have.text', 'Appointment of a director')
        cy.accessibilityCheck();

        appointDirectorPage.enterName("Mr", "Test", "Automation", "Ninja");
        // Repeat calls for accessibility checks
        cy.accessibilityCheck();
        appointDirectorPage.selectDateOfBirth('1', 'January', '1980');

        cy.accessibilityCheck();
        appointDirectorPage.enterNationality('British');

        cy.accessibilityCheck();
        appointDirectorPage.enterOccupation('Company Director');

        cy.accessibilityCheck();
        appointDirectorPage.selectROasCorrespondenceAddress();

        cy.accessibilityCheck();
        appointDirectorPage.enterHomeAddress('10', 'CF14 3UZ');

        cy.accessibilityCheck();
        appointDirectorPage.checkCountryOfResidenceContains('Wales');

        cy.accessibilityCheck();
        appointDirectorPage.selectTodayAsAppointmentDate();

        cy.accessibilityCheck();
        appointDirectorPage.consentToAct();

        // Check disclaimer is correct
        cy.get('.disclaimer').should('contain.text', 'Please ensure all the information above is correct before you proceed.')
    })

})