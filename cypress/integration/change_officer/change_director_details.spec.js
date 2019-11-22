import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage'
import AllFormsPage from '../../support/page_objects/AllformsPage'
import DirectorAndSecretariesPage from '../../support/page_objects/DirectorsAndSecretariesPage'
import DirectorChangeDetailsPreFilingPage from '../../support/page_objects/DirectorChangeDetailsPreFilingPage'

describe('Change director details - CH01', ()=> {
    it('Make No change', ()=> {
        const companyOverview = new CompanyOverviewPage();
        const allForms = new AllFormsPage();
        const directorAndSecretaries = new DirectorAndSecretariesPage();
        // Select form overview
        companyOverview.selectAllForms();
        allForms.selectDirectorAndSecretaries()
        .selectCH01();

        // Select officer by name
        cy.accessibilityCheck();
        directorAndSecretaries.selectOfficerToEdit('Commission Flanker BAROMETERLIQUOR');

        // Check to ensure Tick and Cross are displayed
        const preFiling = new DirectorChangeDetailsPreFilingPage();
        preFiling.checkPageIsDisplayedCorrectly();
        cy.accessibilityCheck();

        // Make a change to the selected officer
        preFiling.changeDirectorDetails();
        cy.accessibilityCheck();

        // Apply today's date for date of change
        const dayElement = ".selector-day";
        const monthElement = ".selector-month";
        const yearElement = ".selector-year";

        cy.selectTodaysDate(dayElement, monthElement, yearElement);

        // As no change has been made ensure the submission button is disabled
        cy.checkSubmitIsDisabled();
        cy.accessibilityCheck();
    })
})