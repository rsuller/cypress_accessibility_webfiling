import CompanyOverviewPage from "../../support/page_objects/CompanyOverviewPage";
import PreFilingAP03Page from "../../support/page_objects/PreFilingAP03Page";
import AppointSecretaryPage from "../../support/page_objects/AppointSecretaryPage";

describe('Appoint a secretary', () => {
    it('Appoint secretary - AP03', () => {
        const companyOverview = new CompanyOverviewPage();
        const preFilingPage = new PreFilingAP03Page();
        const secretaryDetailsPage = new AppointSecretaryPage();
        // Accessibility check
        cy.accessibilityCheck();

        // Go to AP03 from Overview screen
        companyOverview.selectLinkWithText('Appoint a secretary');
        preFilingPage.appointSecretary();

        // Check correct page is loaded
        cy.checkPageHeadingIs('Appointment of a secretary');
        cy.accessibilityCheck();

        // Enter secretary details
        secretaryDetailsPage.enterName("Mr", "Test", "Automation", "Ninja");

        // cy.accessibilityCheck();
        secretaryDetailsPage.selectROasCorrespondenceAddress();

        cy.accessibilityCheck();
        secretaryDetailsPage.selectTodayAsAppointmentDate();

        cy.accessibilityCheck();
        secretaryDetailsPage.consentToAct();

        // Check disclaimer is correct
        cy.checkDisclaimer();

         // Check submit button
         cy.checkSubmitButtonAccessibility();

    })
})