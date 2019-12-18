import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage'
import AllFormsPage from '../../support/page_objects/AllformsPage'
import SubmissionConfirmationPage from '../../support/page_objects/SubmissionConfirmationPage'
import MortgagePreFilingPage from '../../support/page_objects/MortgagePreFilingPage'
import RegisterMortgageChargePage from '../../support/page_objects/RegisterMortgageChargePage'

const companyOverview = new CompanyOverviewPage();
const allForms = new AllFormsPage();
const mortgagePreFilingPage = new MortgagePreFilingPage
const submissionConfirmationPage = new SubmissionConfirmationPage();
const registerMortgageChargePage = new RegisterMortgageChargePage();
const successfulUploadFile = 'UploadSuccess.pdf';
const unsuccessfulUploadFile = 'UploadFail.pdf'

describe('Register a charge - MR01', () => {
    beforeEach('Select MR01 Form and navigate past pre-filing screen', () => {
        // Select form overview
        companyOverview.selectAllForms();
        allForms.selectMortgageForms()
            .selectMr01();

        //Check the register a charge pre-filing page
        cy.accessibilityCheck();
        mortgagePreFilingPage.proceedWithFiling();

        //expands all fields on the page and perfoms accessibility check
        registerMortgageChargePage.initialAccessibilityCheck()
    })

    it('MR01 - Registration of a charge successful', () => {
        registerMortgageChargePage.selectTodayAsChargeCreationDate();
        cy.accessibilityCheck();

        registerMortgageChargePage.enterPersonsEntitled("Test Person");
        cy.accessibilityCheck();

        registerMortgageChargePage.enterChargeDescription("Test Description");
        cy.accessibilityCheck();

        registerMortgageChargePage.fileUpload(successfulUploadFile);
        cy.accessibilityCheck();

        registerMortgageChargePage.selectOtherChargeYes();
        cy.accessibilityCheck();

        registerMortgageChargePage.selectFloatingChargeYesAll();
        cy.accessibilityCheck();

        registerMortgageChargePage.selectNegativePledgeYes();
        cy.accessibilityCheck();

        registerMortgageChargePage.selectTrusteeStatementYes();
        cy.accessibilityCheck();

        registerMortgageChargePage.fileUpload(successfulUploadFile)
        cy.accessibilityCheck();

        registerMortgageChargePage.deedCertificationYes("Test Person");
        cy.accessibilityCheck();

        registerMortgageChargePage.authenticationofCertification();
        cy.accessibilityCheck();

        registerMortgageChargePage.submitChargeRegistration();

        // Confirm submission
        submissionConfirmationPage.confirmHeadingContains('Confirmation of Submission')
        cy.accessibilityCheck();
    })

    it('MR01 - Registration of a charge Error Validation', () => {
        // Upload a file that generates an error message for this section. 
        // Submit the form to generate the remaining errors for blank fields.
        // Expand all fields to ensure they are visible
        registerMortgageChargePage.fileUpload(unsuccessfulUploadFile)
            .submitChargeRegistration().expandAll();
        //check accessibility of page with all error messages displayed
        cy.accessibilityCheck();
    })
})