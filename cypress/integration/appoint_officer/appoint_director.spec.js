import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage.js';
import PreFilingAP01Page from '../../support/page_objects/PreFilingAP01Page';
import AppointDirectorPage from '../../support/page_objects/AppointDirectorPage'

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
        cy.checkPageHeadingIs('Appointment of a director');
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
        cy.checkDisclaimer();
    })

})