// Constants 
const invalidCharacter = "`";

class ChangeDirectorsUraRegisterLocationPage {

    moveDirectorsUraRegister() {
        //Get the label text describing where the registers are held
        cy.get('#registers-accordion > :nth-child(1)').then(($label) => {

            //Label shows registers are currently on the public register
            //so elect to hold at the registered office (EW02 - Withdraw from public register)
            if ($label.text().includes("Currently provided on the public register")) {
                cy.get('#move-to-ro').click();
                //Check after clicking the radio button
                cy.accessibilityCheck();
            } else {
                //Registers are already at the RO
                //so elect to hold them on the public register (EH02)
                cy.get('#elect-to-public').click();

                //Confirm decision by clicking the checkbox
                cy.get('input[type="checkbox"]').click();

                //Check after clicking the radio button and checkbox
                cy.accessibilityCheck();
            }
            //Submit the form
            cy.get('#button_submit > .button').click();
        })
    }
}
export default ChangeDirectorsUraRegisterLocationPage