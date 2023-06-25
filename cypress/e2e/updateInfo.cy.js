import updateContactInfoPage from "../page-object-models/updateContactInfoPage"
import faker from 'faker'
import navigation from "../page-object-models/navigation"


describe('Smoke test for updating user info', () => {
    
    beforeEach(() => {
        cy.login()
        navigation.selectUpdateContactInfo()        
    })

    it('Given that user wants to update all info, he can update it via update info form.', () => {
        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const address = faker.address.streetName()
        const city = faker.address.city()
        const state = faker.address.state()
        const zipCode = faker.random.number()
        const phone = faker.phone.phoneNumber()
        updateContactInfoPage.inputFirstName(firstName)
        updateContactInfoPage.inputLastName(lastName)
        updateContactInfoPage.inputAddress(address)
        updateContactInfoPage.inputCity(city)
        updateContactInfoPage.inputState(state)
        updateContactInfoPage.inputZipCode(zipCode)
        updateContactInfoPage.inputPhoneNo(phone)
        updateContactInfoPage.elements.successMessage().should('be.visible')
    })

    it('Given that user wants to update his info, he can leave phone number field empty.', () => {
        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const address = faker.address.streetName()
        const city = faker.address.city()
        const state = faker.address.state()
        const zipCode = faker.random.number()
        updateContactInfoPage.inputFirstName(firstName)
        updateContactInfoPage.inputLastName(lastName)
        updateContactInfoPage.inputAddress(address)
        updateContactInfoPage.inputCity(city)
        updateContactInfoPage.inputState(state)
        updateContactInfoPage.inputZipCode(zipCode)
        updateContactInfoPage.elements.phoneNoInputField().clear()
        updateContactInfoPage.elements.successMessage().should('be.visible')
    })

    it('Given that user wants to delete his first name while updating info and save it with no name entered, according error should be displayed.', () => {
        const lastName = faker.name.lastName()
        const address = faker.address.streetName()
        const city = faker.address.city()
        const state = faker.address.state()
        const zipCode = faker.random.number()
        const phone = faker.phone.phoneNumber()
        updateContactInfoPage.inputLastName(lastName)
        updateContactInfoPage.inputAddress(address)
        updateContactInfoPage.inputCity(city)
        updateContactInfoPage.inputState(state)
        updateContactInfoPage.inputZipCode(zipCode)
        updateContactInfoPage.inputPhoneNo(phone)
        updateContactInfoPage.elements.firstNameInputField().clear()
        updateContactInfoPage.elements.firstNameEmptyFieldError()
            .should('be.visible')
    })

    it('Given that user wants to delete his last name while updating info and save it with no name entered, according error should be displayed.', () => {
        const firstName = faker.name.firstName()
        const address = faker.address.streetName()
        const city = faker.address.city()
        const state = faker.address.state()
        const zipCode = faker.random.number()
        const phone = faker.phone.phoneNumber()
        updateContactInfoPage.inputFirstName(firstName)
        updateContactInfoPage.inputAddress(address)
        updateContactInfoPage.inputCity(city)
        updateContactInfoPage.inputState(state)
        updateContactInfoPage.inputZipCode(zipCode)
        updateContactInfoPage.inputPhoneNo(phone)
        updateContactInfoPage.elements.lastNameInputField().clear()
        updateContactInfoPage.elements.lastNameEmptyFieldError()
            .should('be.visible')
    })


    it('Given that user wants to delete his address while updating info and save it with no name entered, according error should be displayed.', () => {
        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const city = faker.address.city()
        const state = faker.address.state()
        const zipCode = faker.random.number()
        const phone = faker.phone.phoneNumber()
        updateContactInfoPage.inputFirstName(firstName)
        updateContactInfoPage.inputLastName(lastName)
        updateContactInfoPage.inputCity(city)
        updateContactInfoPage.inputState(state)
        updateContactInfoPage.inputZipCode(zipCode)
        updateContactInfoPage.inputPhoneNo(phone)
        updateContactInfoPage.elements.addressInputField().clear()
        updateContactInfoPage.elements.addressEmptyFieldError()
            .should('be.visible')
    })

    it('Given that user wants to delete his city while updating info and save it with no name entered, according error should be displayed.', () => {
        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const address = faker.address.streetName()
        const state = faker.address.state()
        const zipCode = faker.random.number()
        const phone = faker.phone.phoneNumber()
        updateContactInfoPage.inputFirstName(firstName)
        updateContactInfoPage.inputLastName(lastName)
        updateContactInfoPage.inputAddress(address)
        updateContactInfoPage.inputState(state)
        updateContactInfoPage.inputZipCode(zipCode)
        updateContactInfoPage.inputPhoneNo(phone)
        updateContactInfoPage.elements.cityInputField().clear()
        updateContactInfoPage.elements.cityEmptyFieldError()
            .should('be.visible')
    })

    it('Given that user wants to delete his state while updating info and save it with no name entered, according error should be displayed.', () => {
        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const address = faker.address.streetName()
        const city = faker.address.city()
        const zipCode = faker.random.number()
        const phone = faker.phone.phoneNumber()
        updateContactInfoPage.inputFirstName(firstName)
        updateContactInfoPage.inputLastName(lastName)
        updateContactInfoPage.inputAddress(address)
        updateContactInfoPage.inputCity(city)
        updateContactInfoPage.inputZipCode(zipCode)
        updateContactInfoPage.inputPhoneNo(phone)
        updateContactInfoPage.elements.stateInputField().clear()
        updateContactInfoPage.elements.stateEmptyFieldError()
            .should('be.visible')
    })

    it('Given that user wants to delete his zip code while updating info and save it with no name entered, according error should be displayed.', () => {
        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const address = faker.address.streetName()
        const city = faker.address.city()
        const state = faker.address.state()
        const phone = faker.phone.phoneNumber()
        updateContactInfoPage.inputFirstName(firstName)
        updateContactInfoPage.inputLastName(lastName)
        updateContactInfoPage.inputAddress(address)
        updateContactInfoPage.inputCity(city)
        updateContactInfoPage.inputState(state)
        updateContactInfoPage.inputPhoneNo(phone)
        updateContactInfoPage.elements.zipCodeInputField().clear()
        updateContactInfoPage.elements.zipCodeEmptyFieldError()
            .should('be.visible')
    })
})