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

// Sublime Box FadeIn Entry

var sublimeEntry = function() {
    $('.sublime-viewport2').addClass('animated zoomIn');
    line1_viewport2();
}

// // Changing the color of the background 

var changeBackground = function() {
    $('#viewport2').fadeOut(750, function() {
        $('#viewport2').css('background', '#1976D2');
        $('#viewport2').fadeIn(750);
    })
};

// // Appearance Function for Travel Section !!

var appearTravel = function() {
    $('.box-ticket').css('opacity', '100');
    $('.box-ticket').addClass('animated slideInLeft');
    $('.plane').css('opacity', '100');
    $('.plane').addClass('animated zoomIn');
    $('.suitcase').css('opacity', '100');
    $('.suitcase').addClass('animated slideInLeft');
}

// Disappearance Function for Travel Section !! 

var disappearTravel = function() {
    $('.box-ticket').fadeOut(750);
    $('.box-ticket').css('opacity','0');
    $('.plane').fadeOut(750);
    $('.plane').css('opacity','0');
    $('.suitcase').fadeOut(750);
    $('.suitcase').css('opacity','0');

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
            // line7_viewport2();
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
