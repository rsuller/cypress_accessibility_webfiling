import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage'
import SubmissionConfirmationPage from '../../support/page_objects/SubmissionConfirmationPage'
import AllFormsPage from '../../support/page_objects/AllformsPage'
import ManageRegistersPreFilingPage from '../../support/page_objects/ManageRegistersPreFilingPage'
import ChangeDirectorsRegisterLocationPage from '../../support/page_objects/ChangeDirectorsRegisterLocationPage'

const companyOverview = new CompanyOverviewPage();
const allFormsPage = new AllFormsPage();
const manageRegistersPreFilingPage = new ManageRegistersPreFilingPage();
const submissionConfirmationPage = new SubmissionConfirmationPage();
const changeDirectorsRegisterLocationPage = new ChangeDirectorsRegisterLocationPage();

describe('EH01/EW01 - Elect to Hold Directors Register on the Public Register or Registered Office Address', () => {
    beforeEach(function () {
        // Select form from overview
        companyOverview.selectAllForms();
        allFormsPage.selectChangeRoAndCompanyRecords()
            .selectEh01();
        manageRegistersPreFilingPage.selectDirectorsRegister();
    })

    it('EH01/EW01 check all screens and submit form', () => {
        //Elect to hold directors register on public record or  hold at the registered office
        changeDirectorsRegisterLocationPage.moveDirectorsRegister();

        //Confirm submission page displayed and accessibility check
        submissionConfirmationPage.confirmHeadingContains('Confirmation of Submission');
        cy.accessibilityCheck();

    })

    it('EH01/EW01 SAIL Address Error Validation', () => {
        //Select to move registers to SAIL address
        changeDirectorsRegisterLocationPage.moveRegistersToSailAddress();
        cy.accessibilityCheck();

        //Check after firing invalid SAIL address field errors
        changeDirectorsRegisterLocationPage.invalidEntryforSAILAddressFields();
        cy.accessibilityCheck();
    })

})
