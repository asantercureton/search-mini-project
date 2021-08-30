var container = document.getElementsByClassName('container');
var continerHeader = document.getElementById('containerHeader');
var searchForm = document.getElementById('searchForm');
var siteSearch = document.getElementById('siteSearch');
var btn = document.getElementById('button');
var formatSelection = document.getElementById('formatSlt');


var search = searchForm.textContent.trim();
var format = formatSelection.value.trim();
//<==== Function to grab information from user====>

var formSubmitHandler = function (event) {
    event.preventDefault();

};

//<==== Function to grab search input====>/

var getSearch = function (search) {
    var apiUrl = 'https://www.loc.gov/search/?q=' + search + '&fo=json';

}



//<==== Function to take in format selection===>//
var formatHandler = function (event) {
    var formatSlc = event.target.getAttriute('format-selection');
    
    if (formatSlc) {
        redirect(formatSlc);

    }
}


var getFormat = function (format) {

var apiUrl = 'https://www.loc.gov/' + format + '/?q=' + search + '&fo=json';

fetch (apiUrl)
.then(response => response.json())
.then(data => console.log(data));

};



//<==== Function to display resluts ====> //

// var displayResults = function ()

//<==== Event Listeners====>////

btn.addEventListener('submit', formSubmitHandler);
