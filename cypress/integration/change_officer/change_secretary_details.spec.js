import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage'
import AllFormsPage from '../../support/page_objects/AllformsPage'
import DirectorAndSecretariesPage from '../../support/page_objects/DirectorsAndSecretariesPage'
import SecretaryChangeDetailsPreFilingPage from '../../support/page_objects/SecretaryChangeDetailsPreFilingPage'

describe('Change secretary details - CH03', ()=> {
    it('Make No change', ()=> {
        const companyOverview = new CompanyOverviewPage();
        const allForms = new AllFormsPage();
        const directorAndSecretaries = new DirectorAndSecretariesPage();
        // Select form overview
        companyOverview.selectAllForms();
        allForms.selectDirectorAndSecretaries()
        .selectCH03();

        // Select officer by name
        cy.accessibilityCheck();
        directorAndSecretaries.selectOfficerToEdit('Condition Publicity KNEEJERKBIRDHOUSE');

        // Check to ensure Tick and Cross are displayed
        const preFiling = new SecretaryChangeDetailsPreFilingPage();
        preFiling.checkPageIsDisplayedCorrectly();
        cy.accessibilityCheck();

        // Make a change to the selected officer
        preFiling.changeSecretaryDetails();
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