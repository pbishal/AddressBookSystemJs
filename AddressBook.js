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
        {
             this._firstName=firstName;
        }       
        else 
        {
            throw 'Firstname is invalid';
        }
    }
    get lastName(){return this._lastName;}
    set (lastName)
    {
        let nameRegex= RegExp('^[A-Z]{1}[a-z]{2,}');
        if (nameRegex.test(lastName))
        {
            this._lastName=lastName;
        }
        else
        { 
            throw 'Lastname is invalid';
        }
    }
    get address(){return this._address;}
    set(address)
    {
        let adRegex= RegExp('^[A-Z]{1}[a-z0-9]{3,}');
        if(adRegex.test(address))
        {
            this._address = address;
        }        
        else 
        {
            throw 'Address is invalid';
        }
    }
    get city(){ return this._city;}
    set(city)
    {
        let cityRegex = RegExp('^[A-Z]{1}[a-z]{3,}');
        if(cityRegex.test(city))
        {
             this._city=city;
        }
        else
        { 
            throw 'City name is invalid';
        }
    }
    get state(){return this._state;}
    set(state)
    {
        let stateRegex = RegExp('^[A-Z]{1}[a-z]{3,}');
        if(stateRegex.test(state))
        {
            this._state=state;
        }
        else
        { 
            throw 'State name is invalid';
        }
    }
    get zip(){return this._zip;}
    set(zip)
    {
        let zipRegex = RegExp('^[0-9 ]{6}');
        if(zipRegex.test(zip))
        {
            this._zip=zip;
        }
        else
        {
            throw 'Zip is invalid';

        }
    }
    get phone(){return this._phone;}
    set(phone)
    {
        let phoneRegex = RegExp('^[0-9]{10}');
        if(phoneRegex.test(phone))
        {
            this._phone=phone;
        }
        else 
        {
            throw 'Phone number is invalid';
        }
    }
    get email(){return this._email;}
    set(email)
    {
        let emailRegex = RegExp('^[a-zA-Z0-9]+([+-_.][a-zA-Z0-9]+)*[@][a-zA-Z0-9]+[.][a-zA-Z]+([.][a-zA-Z]{2})*$');
        if(emailRegex.test(email))
        {
            this._email=email;
        }
        else 
        {
            throw 'Email pattern not valid';
        }
    }

    toString()
    {
        return "\nFirstName:- "+this.firstName+" ,LastName:- "+this.lastName+" ,Address:- "+this.address+" ,City:- "+this.city+" ,State:- "+this.state+" Zip:- "+this.zip+" ,Phone:- "+this.phone+",Email:- "+this.email;
    }
}
/* UC3:- Ability to create a New Address Book array and add new Contacts to it */

let addressArr = new Array();
try
{
    let address1 = new AddressBookContact("Bishal","Pradhan","Patia","Bhuaneswar","Odisha",762012,9439666585,"pbishal@gmail.com");
    let address2= new AddressBookContact("Niraj","Kumar","Kg","Bhubaneswar","Odisha",703020,9569855656,"nirk@gmail.com");  
    addressArr.push(address1); //push record array
    addressArr.push(address2);
   
    console.log(addressArr); //print
}
catch(ex)
{
    console.error(ex);
}
/* UC4:- Ability to find existing contact person using their name and edit it */
function SearchName(addressbook)
{
    if(addressbook.firstName=="Bishal") return addressbook;
}
let searchResult =addressArr.find(SearchName);
console.log("Result after searching:-  "+searchResult);

/* UC5:- Ability to find a person with name delete it from the array */

function DeleteAddress(addressbook)
{
    let resultAddress = SearchName(addressbook);
    var index= addressArr.indexOf(resultAddress);
    return index;
}
let deleteIndex=addressArr.find(DeleteAddress);
console.log(addressArr.splice(deleteIndex,1)+" is deleted")

/* UC6:- Ability to find number of contacts in the address book - Use Reduce function to get the count  */
let n=0;
function GetTotal(a)
{
   if(a!=null)
   {
       ++n;
   }
   return n;
}
console.log("Total count of addresses:- "+addressArr.reduce(GetTotal,0));

/*UC7:- Ability to ensure there is no Duplicate Entry of the same Person in the Address Book.
        - Duplicate Check is done on Person Name before adding person to Address Book. 
        - Use Array Functions of filter, map, reduce, etc to do the check. 
*/
function CheckDuplicate(a)
{
    if(a.firstName.includes("Niraj"))
    ++n;
return n;
}
let count = addressArr.filter(CheckDuplicate);
if(count=1)
{
    console.log("There is no duplicate entry for the name");
}
else if(count>1)
{
    console.log("There is duplicate entry for the given name")
}

/*UC8:- Ability to search Person in a particular City or State - Use Array Functions of filter, map, reduce, etc to do the check. */
let peopleFromCity=addressArr.filter(a=>a.city.includes("Bhubaneswar"));
console.log("People from the given city are: "+peopleFromCity);

/* UC9:- Ability to view Persons by City or State 
         - Use Array Functions of filter, map, reduce, etc to do the check */

         function ReturnCityMap(a){
            return a.city+ "->"+a.firstName;
        }
        let addressCityMap= addressArr.map(ReturnCityMap);
        console.log("Viewing the people by their city")
        console.log(addressCityMap);

/* UC10:- Ability to get number of contact persons i.e. count by City or State 
          - Search Result will show count by city and by state
          - Use Array Functions of filter, map, reduce, UC 10 etc to do the check */

console.log("Number of people from that city is:- "+peopleFromCity.length);

/*UC11:- Ability to sort the entries in the address book alphabetically by Person’s name.
         - Use Console to sort person details by name.
         - Use Collection Library for Sorting.
         - Override toString method to finally Print Person Entry in Concole.
         - Use Java Streams. 
*/
let sortedArray = addressArr.sort(a=>a.firstName);
console.log(sortedArray);

/*UC12:- Ability to sort the entries in the address book by City, State, or Zip.
         - Write functions to sort person by City, State or Zip
         - Use Array Functions of filter, map, reduce, etc to do the check
 */
let sortedArray_state= addressArr.sort((a,b)=>a.state.localeCompare(b.state));
console.log(sortedArray_state);
let sortedArray_city = addressArr.sort((a,b)=>a.city.localeCompare(b.city));
console.log(sortedArray_city);
let sortedArray_zip = addressArr.sort((a,b)=>(a.zip>b.zip)?1:(b.zip>a.zip)?-1:0);
console.log(sortedArray_zip);