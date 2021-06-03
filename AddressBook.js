/*UC1:- Ability to create a Address Book Contact with first and last names, address, city, state, zip, phone number and email…
        - Program is written using IDE like VSS Code.
        - Every UC is in a separate Git Branch and then merged with Master.
        - Naming Convention, Indentation, etc Code Hygiene will be checked during Review.
        - Git Check In Comments and Version History will be monitored.
*/
class AddressBookContact
{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phone;
    email;
    constructor(firstName, lastName, address, city, state, zip, phone, email) 
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }
    get firstName() { return this._firstName; }
    set(firstName) 
    {

        this._firstName = firstName;

    }
    get lastName() { return this._lastName; }
    set(lastName) 
    {

        this._lastName = lastName;

    }
    get address() { return this._address; }
    set(address) 
    {

        this._address = address;

    }
    get city() { return this._city; }
    set(city) 
    {

        this._city = city;

    }
    get state() { return this._state; }
    set(state) 
    {

        this._state = state;

    }
    get zip() { return this._zip; }
    set(zip) 
    {

        this._zip = zip;

    }
    get phone() { return this._phone; }
    set(phone) 
    {

        this._phone = phone;

    }
    get email() { return this._email; }
    set(email) 
    {

        this._email = email;

    }

    toString() 
    {
        return "\nFirstName:" + this.firstName + " ,LastName:" + this.lastName + " ,Address:" + this.address + " ,City:" + this.city + " ,State:" + this.state + " Zip:" + this.zip + " ,Phone:" + this.phone + ",Email:" + this.email;
    }
}

/*UC2:- Ability to ensure Valid Contacts are added…
        - First Name and Last Name should start with Capital and Minimum 3 Characters.
        - Address, City and State should also have minimum 4 characters.
        - Zip, Phone and Email should be valid as done in the Pattern Exercise.
         Throw Error if the RegEx test fails.
*/

class AddressBookContact
{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phone;
    email;
    constructor(firstName,lastName,address,city,state,zip,phone,email)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.phone=phone;
        this.email=email;
    }
    get firstName(){return this._firstName;}
    set(firstName)
    {
        let nameRegex= RegExp('^[A-Z]{1}[a-z]{2,}');
        if (nameRegex.test(firstName))
        this._firstName=firstName;
        else throw 'Firstname is invalid';
    }
    get lastName(){return this._lastName;}
    set (lastName)
    {
        let nameRegex= RegExp('^[A-Z]{1}[a-z]{2,}');
        if (nameRegex.test(lastName))
        this._lastName=lastName;
        else throw 'Lastname is invalid';
    }
    get address(){return this._address;}
    set(address)
    {
        let adRegex= RegExp('^[A-Z]{1}[a-z0-9]{3,}');
        if(adRegex.test(address))
        this._address = address;
        else throw 'Address is invalid';
    }
    get city(){ return this._city;}
    set(city)
    {
        let cityRegex = RegExp('^[A-Z]{1}[a-z]{3,}');
        if(cityRegex.test(city))
        this._city=city;
        else throw 'City name is invalid';
    }
    get state(){return this._state;}
    set(state)
    {
        let stateRegex = RegExp('^[A-Z]{1}[a-z]{3,}');
        if(stateRegex.test(state))
        this._state=state;
        else throw 'State name is invalid';
    }
    get zip(){return this._zip;}
    set(zip)
    {
        let zipRegex = RegExp('^[0-9 ]{6}');
        if(zipRegex.test(zip))
        this._zip=zip;
        else throw 'Zip is invalid';
    }
    get phone(){return this._phone;}
    set(phone)
    {
        let phoneRegex = RegExp('^[0-9]{10}');
        if(phoneRegex.test(phone))
        this._phone=phone;
        else throw 'Phone number is invalid';
    }
    get email(){return this._email;}
    set(email)
    {
        let emailRegex = RegExp('^[a-zA-Z0-9]+([+-_.][a-zA-Z0-9]+)*[@][a-zA-Z0-9]+[.][a-zA-Z]+([.][a-zA-Z]{2})*$');
        if(emailRegex.test(email))
        this._email=email;
        else throw 'Email pattern not valid';
    }

    toString()
    {
        return "\nFirstName:"+this.firstName+" ,LastName:"+this.lastName+" ,Address:"+this.address+" ,City:"+this.city+" ,State:"+this.state+" Zip:"+this.zip+" ,Phone:"+this.phone+",Email:"+this.email;
    }
}