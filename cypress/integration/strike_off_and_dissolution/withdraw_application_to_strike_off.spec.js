import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage'
import AllFormsPage from '../../support/page_objects/AllformsPage'
import WithdrawApplicationToStrikeOffPage from '../../support/page_objects/WithdrawApplicationToStrikeOffPage'
import SubmissionConfirmationPage from '../../support/page_objects/SubmissionConfirmationPage'


describe('Withdrawal of application to strike off - DS02', () => {
    it('DS02 Sucessful Submission', () => {
        const companyOverview = new CompanyOverviewPage();
        const allForms = new AllFormsPage();
        const withdrawApplication = new WithdrawApplicationToStrikeOffPage();
        const submissionConfirmationPage =  new SubmissionConfirmationPage();

        // Select form overview
        companyOverview.selectAllForms();
        allForms.selectStrikeOffAndDissolution()
        .selectDs02();

        // Check withdraw application to strike off checkbox
        cy.accessibilityCheck();
        withdrawApplication.confirmApplicationWithdrawal();
            
        // Confirm submission
        submissionConfirmationPage.confirmHeadingContains('Confirmation of Submission')
        cy.accessibilityCheck();
    })
})