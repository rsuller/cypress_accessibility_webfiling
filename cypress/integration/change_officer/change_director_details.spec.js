import CompanySignInPage from '../../support/page_objects/CompanySignInPage'
import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage'
import AllFormsPage from '../../support/page_objects/AllformsPage'
import DirectorAndSecretariesPage from '../../support/page_objects/DirectorsAndSecretariesPage'
import DirectorChangeDetailsPreFilingPage from '../../support/page_objects/DirectorChangeDetailsPreFilingPage'

import { company_number, auth_code } from '../../fixtures/company.json';


beforeEach(()=> {
    // Sign into Webfiling
    cy.signIntoWebfiling();

    // Sign into company to file for
    const companySignIn = new CompanySignInPage();
    cy.accessibilityCheck();
    companySignIn.enterCompanyDetails(company_number, auth_code);
}) 

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
        directorAndSecretaries.selectOfficerToEdit('Halibut Condition GUEST');

        // Check to ensure Tick and Cross are displayed
        const preFiling = new DirectorChangeDetailsPreFilingPage();
        preFiling.checkPageIsDisplayedCorrectly();
        cy.accessibilityCheck();

        // Make a change to the selected officer
        preFiling.changeExistingOfficerDetails();
        cy.accessibilityCheck();

        // Apply today's date for date of change
        cy.selectTodaysDate();

        // As no change has been made ensure the submission button is disabled
        cy.checkSubmitIsDisabled();
        cy.accessibilityCheck();
    })
})