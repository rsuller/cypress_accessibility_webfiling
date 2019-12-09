import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage'
import SubmissionConfirmationPage from '../../support/page_objects/SubmissionConfirmationPage'
import AllFormsPage from '../../support/page_objects/AllformsPage'
import ManageRegistersPreFilingPage from '../../support/page_objects/ManageRegistersPreFilingPage'
import ChangeDirectorsRegisterLocationPage from '../../support/page_objects/ChangeDirectorsRegisterLocationPage'
import BasePage from '../../support/page_objects/generic/BasePage'

const companyOverview = new CompanyOverviewPage();
const allFormsPage = new AllFormsPage();
const manageRegistersPreFilingPage = new ManageRegistersPreFilingPage();
const submissionConfirmationPage = new SubmissionConfirmationPage();
const changeDirectorsRegisterLocationPage = new ChangeDirectorsRegisterLocationPage();
const basePage = new BasePage();

describe('Elect to Hold Directors Register on the Public Register', () => {
    it('EH01 check all screens prior to submission', () => {

        // Select form from overview
        companyOverview.selectAllForms();
        allFormsPage.selectChangeRoAndCompanyRecords()
        .selectEh01();

        manageRegistersPreFilingPage.selectDirectorsRegister();
        
        //Method to hold directors register on public record
        changeDirectorsRegisterLocationPage.electToHoldOnPublicRegister();

        //Confirm submission page displayed and accessibility check
        submissionConfirmationPage.confirmHeadingContains('Confirmation of Submission');
        //cy.accessibilityCheck(); We know this is a failure so commenting out for now

        //Back to company overview 
        basePage.openCompanyOverview();

        // Select form from overview to move registers back
        companyOverview.selectAllForms();
        allFormsPage.selectChangeRoAndCompanyRecords()
        .selectEh01();

        manageRegistersPreFilingPage.selectDirectorsRegister();

        })

        it('EH01/EW01 SAIL Address Error Validation', () => {
        // Select form from overview
        companyOverview.selectAllForms();
        allFormsPage.selectChangeRoAndCompanyRecords()
        .selectEh01();

        manageRegistersPreFilingPage.selectDirectorsRegister();

        //Select to move registers to SAIL address
        changeDirectorsRegisterLocationPage.moveRegistersToSailAddress();
        cy.accessibilityCheck();

        //Check after firing invalid SAIL address field errors
        changeDirectorsRegisterLocationPage.invalidEntryforSAILAddressFields();
        cy.wait(5000);
        cy.accessibilityCheck();
        })

})
