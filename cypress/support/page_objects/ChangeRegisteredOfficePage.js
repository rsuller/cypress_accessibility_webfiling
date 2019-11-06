import AddressPage from "./generic/Address";

class ChangeRegisteredOfficePage extends AddressPage {

    confirmChangeOfAddress() {
        cy.get('.container-button > div > .button').click()
    }

}

export default ChangeRegisteredOfficePage