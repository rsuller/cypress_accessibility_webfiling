import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage.js';
import PSCLandingPage from '../../support/page_objects/PSCLandingPage';
import PscStatmentPage from '../../support/page_objects/PscStatementPage';

describe('Notification of a PSC statement', () => {
    it('File successful PSC08', () => {

        const companyOverview = new CompanyOverviewPage();
        const pscLandingPage = new PSCLandingPage();
        const pscStatementPage = new PscStatmentPage();

        cy.accessibilityCheck();
        companyOverview.selectLinkWithText('Add a PSC notification');

        cy.accessibilityCheck();
        pscLandingPage.addPscStatement();

        // Check correct page is loaded
        cy.checkPageHeadingIs('Notification of a person with significant control (PSC) statement');

        // Repeated accessibility check calls for each section
        pscStatementPage.selectReason();
        cy.accessibilityCheck();
        pscStatementPage.selectReasonContinue();

        pscStatementPage.selectStatement();
        cy.accessibilityCheck();
        pscStatementPage.selectStatementContinue();

        pscStatementPage.selectTodayAsRegisterEntryDate();
        cy.accessibilityCheck();
        pscStatementPage.selectRegisterEntryDateContinue();

        // Check disclaimer is correct
        cy.checkDisclaimer();
        cy.accessibilityCheck();

    })

})