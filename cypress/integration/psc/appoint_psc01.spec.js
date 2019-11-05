import CompanySignInPage from '../../support/page_objects/CompanySignInPage'
import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage.js';
import AppointPSC01Page from '../../support/page_objects/AppointPSC01Page';
import PreFilingPSC01Page from '../../support/page_objects/PreFilingPSC01Page';
import PSCLandingPage from '../../support/page_objects/PSCLandingPage';

import { company_number, auth_code } from '../../fixtures/company.json';

beforeEach(() => {
    // Sign into Webfiling
    cy.signIntoWebfiling();

    // Sign into company to file for
    const companySignIn = new CompanySignInPage();
    cy.accessibilityCheck();
    companySignIn.enterCompanyDetails(company_number, auth_code);
})

describe('Appoint a PSC', () => {
    it('File successful PSC01', () => {
        // Go to change registered office address
        const companyOverview = new CompanyOverviewPage();
        const preFilingPage = new PreFilingPSC01Page();
        const appointPSCPage = new AppointPSC01Page();
        const pscLandingPage = new PSCLandingPage();

        cy.accessibilityCheck();
        companyOverview.selectLinkWithText('Add a PSC notification');

        cy.accessibilityCheck();
        pscLandingPage.appointPsc01();

        preFilingPage.appointPsc();

        // Check correct page is loaded
        cy.get('h1').should('have.text', 'Notification of a person with significant control (PSC)')
        cy.accessibilityCheck();

        appointPSCPage.enterName("Mr", "Test", "Automation", "Ninja");
        // Repeat calls for accessibility checks
        cy.accessibilityCheck();
        appointPSCPage.selectDateOfBirth('1', 'January', '1980');

        cy.accessibilityCheck();
        appointPSCPage.enterNationality('British');

        cy.accessibilityCheck();
        appointPSCPage.selectROasCorrespondenceAddress();

        cy.accessibilityCheck();
        appointPSCPage.enterHomeAddress('10', 'CF14 3UZ');

        cy.accessibilityCheck();
        appointPSCPage.checkCountryOfResidenceContains('Wales');

        cy.accessibilityCheck();
        appointPSCPage.selectNatureOfControl();

        cy.accessibilityCheck();
        appointPSCPage.selectTodayAsNotificationDate();

        cy.accessibilityCheck();
        appointPSCPage.selectTodayAsRegisterEntryDate();


        // Check disclaimer is correct
        cy.get('.disclaimer').should('contain.text', 'Please ensure all the information above is correct before you proceed.')
    })

})