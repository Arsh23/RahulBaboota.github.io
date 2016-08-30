// A sleep function in Javascript

function Sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

//*-------------------------------------------------------------------------------------------------------------------------------*/

// Function which adds typewriter effect to the text editor text

var line1_viewport1 = function() {
    $('.gray').typed({
        strings: ["/* Hi there . ^500 Let's define a function which defines me. */"],
        typeSpeed: 25,
        startDelay: 1000,
        showCursor: false,
        onStringTyped: function() {
            line2_viewport1();
        }
    });
}

var line2_viewport1 = function() {
    $('.red').typed({
        strings: ["var define_rahul = function()"],
        typeSpeed: 25,
        showCursor: false,
        onStringTyped: function() {
            line3_viewport1();
        }
    });
}

var line3_viewport1 = function() {
    $('.purple1').typed({
        strings: ["{"],
        typeSpeed: 25,
        showCursor: false,
        onStringTyped: function() {
            line4_viewport1();
        }
    });
}

var line4_viewport1 = function() {
    $('.green').typed({
        strings: ["var definition = "],
        typeSpeed: 25,
        showCursor: false,
        onStringTyped: function() {
            line5_viewport1();
        }
    });
}

var line5_viewport1 = function() {
    $('.white1').typed({
        strings: ["'Hello There . People call me Rahul Baboota . I am a"],
        typeSpeed: 25,
        showCursor: false,
        onStringTyped: function() {
            line6_viewport1();
        }
    });
}

var line6_viewport1 = function() {
    $('.white2').typed({
        strings: ["Designer | Developer | Researcher | Aspiring Data Scientist | Star Gazer'"],
        typeSpeed: 25,
        showCursor: false,
        onStringTyped: function() {
            line7_viewport1();
        }
    });
}

var line7_viewport1 = function() {
    $('.yellow').typed({
        strings: ["console.log"],
        typeSpeed: 25,
        showCursor: false,
        onStringTyped: function() {
            line8_viewport1();
        }
    });
}

var line8_viewport1 = function() {
    $('.blue').typed({
        strings: ["(definition);"],
        typeSpeed: 25,
        showCursor: false,
        onStringTyped: function() {
            line9_viewport1();
        }
    });
}

var line9_viewport1 = function() {
    $('.purple2').typed({
        strings: ["}"],
        typeSpeed: 25,
        showCursor: false,
        onStringTyped: function() {
            line10_viewport1();
        }
    });
}

var line10_viewport1 = function() {
    $('.gray2').typed({
        strings: ["/* Have fun exploring Me !! */"],
        typeSpeed: 25,
        showCursor: false,
    });
}


// Illuminating Button 

var illuminateButton = function() {
    $('#next-page-button').illuminate({
        'intensity': '0.5',
        'color': '#EC407A',
        'blink': 'true',
        'blinkSpeed': '1200',
        'outerGlow': 'true',
        'outerGlowSize': '50px',
        'outerGlowColor': '#F50057'
    });
}

var nextPageButtonClick = function() {
    $('#next-page-button').click(function() {
        $('#viewport1').css('transform', 'translateX(100%)');
        $('#viewport1').css('transition', 'all 0.4s ease-in-out');
        $('#viewport2').css('transform', 'translateX(-100%)');
        sublimeEntry();
    });
}

// Making the required function calls

line1_viewport1();
illuminateButton();
nextPageButtonClick();

/*-------------------------------------------------------------------------------------------------------------------------------*/

// HTML code for travel objects

var suitcase = 
'<div class="suitcase">'+
    '<img src="Images/suitcase.png">'+
'</div>'

var ticket = 
'<div class="box-ticket">'+
    '<ul class="left-ticket">'+
        '<li></li>'+
        '<li></li>'+
        '<li></li>'+
        '<li></li>'+
        '<li></li>'+
        '<li></li>'+
        '<li></li>'+
        '<li></li>'+
        '<li></li>'+
        '<li></li>'+
        '<li></li>'+
        '<li></li>'+
        '<li></li>'+
        '<li></li>'+
    '</ul>'+
    '<ul class="right-ticket">'+
        '<li></li>'+
        '<li></li>'+
        '<li></li>'+
        '<li></li>'+
        '<li></li>'+
        '<li></li>'+
        '<li></li>'+
        '<li></li>'+
        '<li></li>'+
        '<li></li>'+
        '<li></li>'+
        '<li></li>'+
        '<li></li>'+
        '<li></li>'+
    '</ul>'+
    '<div class="ticket">'+
        '<span class="airline">Emirates</span>'+
        '<span class="airline airlineslip">Emirates</span>'+
        '<span class="boarding">Boarding pass</span>'+
        '<div class="content">'+
            '<span class="jfk">PRG</span>'+
            '<span class="sfo">JFK</span>'+
            '<span class="jfk jfkslip">PRG</span>'+
            '<span class="sfo sfoslip">JFK</span>'+
            '<div class="sub-content">'+
                '<span class="watermark">Emirates</span>'+
                '<span class="name">PASSENGER NAME<br><span>Rahul Baboota</span></span>'+
                '<span class="flight">FLIGHT N&deg;<br><span>X3-65C3</span></span>'+
                '<span class="gate">GATE<br><span>11B</span></span>'+
                '<span class="seat">SEAT<br><span>45A</span></span>'+
                '<span class="boardingtime">BOARDING TIME<br><span>6:00 AM ON OCTOBER 2015</span></span>'+
                '<span class="flight flightslip">FLIGHT N&deg;<br><span>X3-65C3</span></span>'+
                '<span class="seat seatslip">SEAT<br><span>45A</span></span>'+
                '<span class="name nameslip">PASSENGER NAME<br><span>Rahul Baboota</span></span>'+
            '</div>'+
        '</div>'+
    '</div>'+
'</div>'

var plane = 
'<div class="plane">'+
    '<div class="ver-stab"></div>'+
    '<div class="ver-stab-tri"></div>'+
    '<div class="nose">'+
        '<div class="window1"></div>'+
        '<div class="window2"></div>'+
        '<div class="window3"></div>'+
        '<div class="window4"></div>'+
    '</div>'+
    '<div class="back-body"></div>'+
    '<div class="hor-stab"></div>'+
    '<div class="hor-stab2"></div>'+
    '<div class="wing"></div>'+
    '<div class="wing-bottom"></div>'+
    '<div class="wing right"></div>'+
    '<div class="wing-bottom wing-right"></div>'+
    '<div class="engine">'+
        '<div class="fan">'+
            '<div class="front">'+
                '<div class="fan inner"></div>'+
            '</div>'+
        '</div>'+
    '</div>'+
    '<div class="engine eng-big2">'+
        '<div class="fan">'+
            '<div class="front">'+
                '<div class="fan inner"> </div>'+
            '</div>'+
        '</div>'+
    '</div>'+
    '<div class="engine eng-small">'+
        '<div class="fan">'+
            '<div class="front">'+
                '<div class="fan inner"></div>'+
            '</div>'+
        '</div>'+
    '</div>'+
    '<div class="engine eng-small small2">'+
        '<div class="fan">'+
            '<div class="front">'+
                '<div class="fan inner"></div>'+
            '</div>'+
        '</div>'+
    '</div>'+
'</div>'

// Sublime Box FadeIn Entry

var sublimeEntry = function() {
    $('.sublime-viewport2').addClass('animated zoomIn');
    line1_viewport2();
}

// Changing the color of the background 

var changeBackground = function() {
    $('#viewport2').fadeOut(750, function() {
        $('#viewport2').css('background', '#1976D2');
        $('#viewport2').fadeIn(750);
    })
};

// // Appearance Function for Travel Section !!

var appearTravel = function() {
    $('#ticket').append(ticket);
    $('.box-ticket').addClass('animated slideInLeft');
    $('#plane').append(plane);
    $('.plane').addClass('animated zoomIn');
    $('#suitcase').append(suitcase);
    $('.suitcase').addClass('animated slideInLeft');
}

// appearTravel();

// Disappearance Function for Travel Section !! 

var disappearTravel = function() {
    $('.box-ticket').fadeOut(750, function(){
        $('#ticket').empty();
    });
    $('.plane').fadeOut(750, function(){
        $('#palne').empty()
    });
    $('.suitcase').fadeOut(750, function(){
        $('#suitcase').empty()
    });
}
// Defining the Text to be written in the Sublime Box

var line1_viewport2 = function() {
    $('.gray-viewport2').typed({
        strings: ["## Let's paint the canvas with a little bit of Rahul .. Shall we !! "],
        typeSpeed: 25,
        startDelay: 1000,
        showCursor: false,
        onStringTyped: function() {
            line2_viewport2();
        }
    });
}

var line2_viewport2 = function() {
    $('.yellow-viewport2').typed({
        strings: ["def  "],
        typeSpeed: 25,
        startDelay: 0,
        showCursor: false,
        onStringTyped: function() {
            line3_viewport2();
        }
    });
}

var line3_viewport2 = function() {
    $('.blue-viewport2').typed({
        strings: ["about_rahul():"],
        typeSpeed: 25,
        startDelay: 0,
        showCursor: false,
        onStringTyped: function() {
            line4_viewport2();
        }
    });
}

var line4_viewport2 = function() {
    $('.red-viewport2').typed({
        strings: ['about_rahul = '],
        typeSpeed: 25,
        startDelay: 0,
        showCursor: false,
        onStringTyped: function() {
            line5_viewport2();
        }
    })
}

var line5_viewport2 = function() {
    $('.white-1-viewport2').typed({
        strings: [' " Firstly , I like bright colors .. so !! " ^250 '],
        typeSpeed: 25,
        startDelay: 0,
        showCursor: false,
        onStringTyped: function() {
            changeBackground();
            line6_viewport2();
        }
    })
}

var line6_viewport2 = function() {
    $('.white-1-viewport2').typed({
        strings: [' ^1000 " I love to travel and I intend to leave my footprint on all the 7 continents . " '],
        typeSpeed: 25,
        startDelay: 0,
        showCursor: false,
        onStringTyped: function() {
            appearTravel();
            line7_viewport2();
        }
    })
}

var line7_viewport2 = function() {
    $('.white-2-viewport2').typed({
        strings: [' ^1000 " I love to hone my Penmenship Craft " '],
        typeSpeed: 25,
        startDelay: 0,
        showCursor: false,
        onStringTyped: function() {
            disappearTravel();
        }
    })
}

/*-------------------------------------------------------------------------------------------------------------------------------*/
