import PscAppointment from "./generic/PscAppointment";

class ChangeIndividualPscPage extends PscAppointment {

    changePscName() {
        cy.get('#name-container-change').click();
    }
    
    cancelPscNameChange() {
        cy.get('#name-container-cancel').click();
    }

    changePscNationality() {
        cy.get('#nationality-container-change').click();
    }

    cancelPscNationalityChange() {
        cy.get('#nationality-container-cancel').click();
    }

    changePscCorrespondenceAddress() {
        cy.get('#service-address-container-change').click();
    }

    cancelPscCorrespondenceAddressChange() {
        cy.get('#service-address-container-cancel').click();
    }

    changePscHomeAddress() {
        cy.get('#residential-address-container-change').click();
    }

    cancelPscHomeAddressChange() {
        cy.get('#residential-address-container-cancel').click();

    }

    changeCountryOfResidence() {
        cy.get('#country-of-residence-container-change').click();
    }

    cancelCountryOfResidenceChange() {
        cy.get('#country-of-residence-container-cancel').click();
    }

    changeNatureOfControl() {
        cy.get('#nature-of-control-container-change').click();
    }

    cancelNatureOfControlChange() {
        cy.get('#nature-of-control-container-cancel').click();
    }
}

export default ChangeIndividualPscPage