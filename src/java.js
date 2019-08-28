require('./../src/style.scss');

// Hamburger
let menu = document.querySelector('#menu');
let ulHam = document.querySelector('ul');
menu.addEventListener('click', function () {
    this.classList.toggle('change');
    ulHam.classList.toggle('display')
})
// Slider-----------------------------------------------------------------
let corgi = "url('images/jeden.jpg')";
let kurier = "url('./../src/images/dwa.jpg')";
let avengers = "url('./../src/images/trzy.jpg')";
let after = "url('./../src/images/cztery.jpg')";
let tekst = document.querySelector('#slider h2');
let napisy = ["CORGI | Animowany | 7 lat | 85 min", "KURIER | Sensacyjny | 12 lat | 114 min |", "AVENGERS | Akcja | 12 lat | 182 min", "AFTER | Romans | 15 lat | 106 min"];
let right = document.querySelector('#right');
let left = document.querySelector('#left');
let background = document.querySelector('#slider');
let array = [corgi, kurier, avengers, after];
var nr = 0;
right.addEventListener('click', function () {
    if (nr == 3)
        nr;
    else nr++;
    background.style.setProperty('background-image', array[nr]);
    tekst.innerHTML = napisy[nr];
})
left.addEventListener('click', function () {
    if (nr == 0)
        nr;
    else nr--;
    background.style.setProperty('background-image', array[nr]);
    tekst.innerHTML = napisy[nr];
})
//    -----------------------------------------------------------------------------
// Repertuar

let here = document.querySelector('#here');
let select = document.querySelector('#select');
let views = document.querySelector("#views");
let city = document.querySelector('#city');
views.addEventListener('click', () => {
    here.innerHTML = "";
    if (select.selectedIndex == 1) {
        for (let film in cinemaKatowice)
            here.innerHTML += cinemaKatowice[film] + '<hr>' + '<br>';
        city.innerHTML = "Katowice";
    }
    if (select.selectedIndex == 2) {
        for (let film in cinemaWarszawa)
            here.innerHTML += cinemaWarszawa[film] + '<hr>' + '<br>';
        city.innerHTML = "Warszawa";
    }
    if (select.selectedIndex == 3) {
        for (let film in cinemaKrakow)
            here.innerHTML += cinemaKrakow[film] + '<hr>' + '<br>';
        city.innerHTML = "Kraków";
    }
    if (select.selectedIndex == 0) {
        city.innerHTML = "";
    }
})
//    -----------------------------------------------------------------------------
// Cinema
let confirm = document.querySelector('.confirm');
let cinemaHall = document.querySelector('#cinemaHall');
let cityHall = document.querySelector('.cityHall');
// let name = document.querySelector('#cinemaHall h1');
let buyTicket = document.querySelector('#ticket');
let choice = buyTicket.querySelectorAll('#select');
confirm.disabled = true;
confirm.removeAttribute('id', 'buy');
confirm.setAttribute('id', 'disabled');
choice.forEach(function (el) {
    el.disabled = true;
    el.setAttribute('id', 'disabled');
})
// Select--------------------------------------------------------------------
let cityS1 = document.querySelector('.select1');
let filmS2 = document.querySelector('.select2');
let hourS3 = document.querySelector('.select3');

cityS1.addEventListener('change', function () {

    filmS2.addEventListener('change', function () {
        confirm.disabled = false;
        confirm.removeAttribute('id', 'disabled');
        confirm.setAttribute('id', 'buy');
        if (hourS3.length > 0) {
            for (let i = 0; i < hourS3.length; i++) {
                let option = hourS3.querySelectorAll('option');
                option.forEach(function (el) {
                    el.remove();
                });
                let opt = document.createElement('option');
                opt.innerHTML = "WYBIERZ GODZINĘ";
                hourS3.appendChild(opt)
            }
        }
        if (cityS1.selectedIndex == 1) {
            if (filmS2.selectedIndex == 1)
                cinemaKatowice1.after.forEach(function (el) {
                    let option = document.createElement('option');
                    option.innerHTML = el;
                    hourS3.appendChild(option);
                })
            if (filmS2.selectedIndex == 2)
                cinemaKatowice1.avengers.forEach(function (el) {
                    let option = document.createElement('option');
                    option.innerHTML = el;
                    hourS3.appendChild(option);
                })
            if (filmS2.selectedIndex == 3)
                cinemaKatowice1.corgi.forEach(function (el) {
                    let option = document.createElement('option');
                    option.innerHTML = el;
                    hourS3.appendChild(option);
                })
            if (filmS2.selectedIndex == 4)
                cinemaKatowice1.kurier.forEach(function (el) {
                    let option = document.createElement('option');
                    option.innerHTML = el;
                    hourS3.appendChild(option);
                })
        }

        // Warszawa---------------------------------------------------------
        if (cityS1.selectedIndex == 2) {
            if (filmS2.selectedIndex == 1)
                cinemaWarszawa1.after.forEach(function (el) {
                    let option = document.createElement('option');
                    option.innerHTML = el;
                    hourS3.appendChild(option);
                })
            if (filmS2.selectedIndex == 2)
                cinemaWarszawa1.avengers.forEach(function (el) {
                    let option = document.createElement('option');
                    option.innerHTML = el;
                    hourS3.appendChild(option);
                })
            if (filmS2.selectedIndex == 3)
                cinemaWarszawa1.corgi.forEach(function (el) {
                    let option = document.createElement('option');
                    option.innerHTML = el;
                    hourS3.appendChild(option);
                })
            if (filmS2.selectedIndex == 4)
                cinemaWarszawa1.kurier.forEach(function (el) {
                    let option = document.createElement('option');
                    option.innerHTML = el;
                    hourS3.appendChild(option);
                })
        }
        // Kraków------------------------------------------------------------------
        if (cityS1.selectedIndex == 3) {
            if (filmS2.selectedIndex == 1)
                cinemaKrakow1.after.forEach(function (el) {
                    let option = document.createElement('option');
                    option.innerHTML = el;
                    hourS3.appendChild(option);
                })
            if (filmS2.selectedIndex == 2)
                cinemaKrakow1.avengers.forEach(function (el) {
                    let option = document.createElement('option');
                    option.innerHTML = el;
                    hourS3.appendChild(option);
                })
            if (filmS2.selectedIndex == 3)
                cinemaKrakow1.corgi.forEach(function (el) {
                    let option = document.createElement('option');
                    option.innerHTML = el;
                    hourS3.appendChild(option);
                })
            if (filmS2.selectedIndex == 4)
                cinemaKrakow1.kurier.forEach(function (el) {
                    let option = document.createElement('option');
                    option.innerHTML = el;
                    hourS3.appendChild(option);
                })
        }
    })

})
// End------------------------------------------------------------------------
var how = 0;
confirm.addEventListener('click', function () {
    // Clock------------------------------------------------------------------
    let minutes = 9;
    let seconds = 60;
    let clock = document.querySelector('#clock');
    let hour = "10" + ":" + "00";
    clock.innerHTML = hour;
    let countdown = setInterval(function () {
        seconds--;
        if (seconds < 10)
            clock.innerHTML = minutes + ":" + "0" + seconds;
        else
            clock.innerHTML = minutes + ":" + seconds;
        if (seconds == 0) {
            if (seconds == 0 && minutes == 0) {
                clearInterval(countdown);
                minutes++;
                apply.disabled = true;
                apply.setAttribute('id', 'disabled')
                ahref.style.setProperty('display', "none");
            }
            minutes--
            clock.innerHTML = minutes + ":" + "00";
            seconds = 60;
        }


    }, 1000)
    // Chairs----------------------------------------------------------------------------
    var i = 1;
    var j = 1;
    let row;
    let columns;

    if (cityHall.selectedIndex == 1) {
        row = parseInt(cinemaKatowice_place.rows);
        columns = parseInt(cinemaKatowice_place.columns);
    } else if (cityHall.selectedIndex == 2) {
        row = parseInt(cinemaWarszawa_place.rows);
        columns = parseInt(cinemaWarszawa_place.columns);
    } else if (cityHall.selectedIndex == 3) {
        row = parseInt(cinemaKrakow_place.rows);
        columns = parseInt(cinemaKrakow_place.columns)
    } else {
        row = 0;
        columns = 0;
        clearInterval(countdown);
        clock.innerHTML = '';
    }

    for (var i; i <= row; i++) {
        if (i >= 10) {
            cinemaHall.innerHTML += 'Rząd' + i;
        } else
            cinemaHall.innerHTML += "Rząd " + i + " ";

        for (var j = 1; j <= columns; j++) {

            let armchair = document.createElement('div');
            if (j >= 10)
                armchair.style.setProperty('padding', '5px');
            armchair.innerHTML = j;
            armchair.dataset.r = i;
            armchair.dataset.c = j;
            cinemaHall.appendChild(armchair);

        }
        cinemaHall.innerHTML += '<br>';
        $('div').click(function () {
            $(this).toggleClass("click");
            if (this.classList.contains('click'))
                how++;
            else
                how--;
            let price = document.querySelector('#price_of_tickets');
            price.innerHTML = how * 25;
            let cancel = document.querySelector('#cancel');
            cancel.addEventListener('click', function () {
                $('#cinemaHall').empty();
                confirm.disabled = false;
                confirm.removeAttribute('id', "disabled");
                clearInterval(countdown)
                clock.innerHTML = '';
                how = 0;
                price.innerHTML = '';
                apply.disabled = false;
                apply.removeAttribute('id', 'disabled');
                apply.setAttribute('id', 'apply');
                confirm.disabled = false;
                confirm.setAttribute('id', 'buy')
            })
        });

        confirm.disabled = true;
        confirm.setAttribute('id', "disabled");

    }
})
let ul = document.querySelector('#your_places');
let apply = document.querySelector('#apply');
let titleOfFilm = document.querySelector('#titleOfFilm');
let hourOfFilm = document.querySelector('#hourOfFilm');
apply.addEventListener('click', function () {
    this.disabled = true;
    this.setAttribute('id', "disabled");
    let lastPrice = document.querySelector('#last_price');
    lastPrice.innerHTML = how * 25;
    titleOfFilm.innerHTML = filmS2.value;
    hourOfFilm.innerHTML = hourS3.value;
    let lista = document.querySelectorAll('.click');
    lista.forEach(function (el) {
        let li = document.createElement('li');
        let tekst = `Rząd: ${el.dataset.r}, Miejsce: ${el.dataset.c},`;
        li.innerHTML = tekst;
        ul.appendChild(li);
    })
})
let ahref = document.querySelector('#ahref');
ahref.addEventListener('click', function () {
    if (ul.children.length == 0) {
        ahref.setAttribute('href', './../src/empty.html')
    } else
        ahref.setAttribute('href', "./../src/email.html")
    location.reload();
})
// Login-----------------------------------------------------------------------------------
let email = document.querySelector('#email')
let password = document.querySelector('#password');
let alert = document.querySelector('#alert span');
let acceptLogin = document.querySelector('#acceptLogin');
let logout = document.querySelector('#logout');
logout.removeAttribute('class', 'select');
logout.setAttribute('id', 'disabled');
logout.disabled = true;
let find = false;
acceptLogin.addEventListener('click', function () {

        for (let i = 0; i < users.length; i++) {
            if (users[i] === email.value + password.value) {
                find = true;
                break;
            } else {
                find = false;
            }
        }
        if (find) {
            alert.innerHTML = `Zalogowano jako: ${email.value}`;
            acceptLogin.disabled = true;
            acceptLogin.removeAttribute('class', 'login');
            acceptLogin.setAttribute('id', 'disabled');
            choice.forEach(function (el) {
                el.disabled = false;
                el.setAttribute('id', 'select');
                logout.disabled = false;
                logout.removeAttribute('id', 'disabled');
                logout.setAttribute('class', 'login');
                let logChange = document.querySelector('#loginYou');
                logChange.innerHTML = "Wyloguj się";
                email.disabled = true;
                email.value = '';
                password.disabled = 'true';
                password.value = '';

            })

        } else {
            alert.innerHTML = `Podano zły adres email lub hasło`;
        }
    }

)
logout.addEventListener('click', function () {
    location.reload();
})
// RegEx-------------------------------------------------------------------------------------------------

const patterns = {
    email: /^([a-z\d\.-]+)@([a-z\d-]+)(\.[a-z]{2,8})(\.[a-z]{2})?$/,
    password: /(?=^.{8})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)/
}
let inputs = document.querySelectorAll('.regex');

function validate(field, regex) {
    if (regex.test(field.value)) {
        field.className = "valid";
    } else
        field.className = "invalid";
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        validate(e.target, patterns[e.target.attributes.name.value])
    })
})