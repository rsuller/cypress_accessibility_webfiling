import BasePage from "./generic/BasePage";

class ChangeDirectorsRegisterLocationPage extends BasePage {

    electToHoldOnPublicRegister() {
        //Select to hold directors register on public register
        cy.get('#elect-to-public').click();
        //Check after clicking the radio button
        cy.accessibilityCheck();

        //Confirm decision by clicking the checkbox
        cy.get('input[type="checkbox"][name="changeRegisterLocationDirectors.registerLocationControl.confirm_ckbox"]').click();
        cy.accessibilityCheck();

    }


}

export default ChangeDirectorsRegisterLocationPage