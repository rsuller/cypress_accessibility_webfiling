import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage.js';
import AppointCorporateDirectorPage from '../../support/page_objects/AppointCorporateDirectorPage.js';

describe('Appoint a Corporate Director', () => {
    it('File successful AP02', () => {
        // Go to change registered office address
        const companyOverview = new CompanyOverviewPage();
        const appointCorporateDirectorPage = new AppointCorporateDirectorPage();

        cy.accessibilityCheck();
        companyOverview.selectAllForms().selectLinkWithText('Directors and secretaries')
            .selectLinkWithText('Appointment of corporate director - AP02');

        // Check correct page is loaded
        cy.checkPageHeadingIs('Appointment of a corporate director');

        // Repeat calls for accessibility checks
        cy.accessibilityCheck();
        appointCorporateDirectorPage.enterCompanyName("Test Automation Limited");

        cy.accessibilityCheck();
        appointCorporateDirectorPage.selectTodayAsAppointmentDate();

        cy.accessibilityCheck();
        appointCorporateDirectorPage.enterCompanyAddress('10', 'CF14 3UZ');

        cy.accessibilityCheck();
        appointCorporateDirectorPage.selectEEAStatus(true);

        cy.accessibilityCheck();
        appointCorporateDirectorPage.consentToAct();

        // Check disclaimer is correct
        cy.checkDisclaimer();
    })

})