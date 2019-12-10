import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage'
import SubmissionConfirmationPage from '../../support/page_objects/SubmissionConfirmationPage'
import AllFormsPage from '../../support/page_objects/AllformsPage'
import ManageRegistersPreFilingPage from '../../support/page_objects/ManageRegistersPreFilingPage'
import ChangeSecretariesRegisterLocationPage from '../../support/page_objects/ChangeSecretariesRegisterLocationPage'

const companyOverview = new CompanyOverviewPage();
const allFormsPage = new AllFormsPage();
const manageRegistersPreFilingPage = new ManageRegistersPreFilingPage();
const submissionConfirmationPage = new SubmissionConfirmationPage();
const changeSecretariesRegisterLocationPage = new ChangeSecretariesRegisterLocationPage();

describe('EH03/EW03 - Elect to Hold Secretaries Register on the Public Register or at Registered Office Address', () => {
    beforeEach(function () {
        // Select form from overview
        companyOverview.selectAllForms();
        allFormsPage.selectChangeRoAndCompanyRecords().selectEh03();
        manageRegistersPreFilingPage.selectSecretariesRegister();
    })

    it('EH03/EW03 check all screens and submit form', () => {
        //Elect to hold secretaries register on public record or hold at the registered office
        changeSecretariesRegisterLocationPage.moveSecretariesRegister();

        //Confirm submission page displayed and accessibility check
        submissionConfirmationPage.confirmHeadingContains('Confirmation of Submission');
        cy.accessibilityCheck();

    })

    it('EH03/EW03 SAIL Address Error Validation', () => {
        //Select to move registers to SAIL address
        changeSecretariesRegisterLocationPage.moveRegistersToSailAddress();
        cy.accessibilityCheck();

        //Check after firing invalid SAIL address field errors
        changeSecretariesRegisterLocationPage.invalidEntryforSAILAddressFields();
        cy.accessibilityCheck();
    })

})
