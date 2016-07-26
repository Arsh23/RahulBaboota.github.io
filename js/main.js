/*-------------------------------------------------------------------------------------------------------------------------------*/

// Function which adds typewriter effect to the text editor text

var line2 = function() {
    $('.red').typed({
        strings: ["var define_rahul = function()"],
        typeSpeed: 25,
        showCursor: false,
        onStringTyped: function() {
            line3();
        }
    });
}

var line3 = function() {
    $('.purple1').typed({
        strings: ["{"],
        typeSpeed: 25,
        showCursor: false,
        onStringTyped: function() {
            line4();
        }
    });
}

var line4 = function() {
    $('.green').typed({
        strings: ["var definition = "],
        typeSpeed: 25,
        showCursor: false,
        onStringTyped: function() {
            line5();
        }
    });
}

var line5 = function() {
    $('.white1').typed({
        strings: ["'Hello There . People call me Rahul Baboota . I am a"],
        typeSpeed: 25,
        showCursor: false,
        onStringTyped: function() {
            line6();
        }
    });
    console.log('hello');
}

var line6 = function() {
    $('.white2').typed({
        strings: ["Designer | Developer | Researcher | Aspiring Data Scientist | Star Gazer'"],
        typeSpeed: 25,
        showCursor: false,
        onStringTyped: function() {
            line7();
        }
    });
}

var line7 = function() {
    $('.yellow').typed({
        strings: ["console.log"],
        typeSpeed: 25,
        showCursor: false,
        onStringTyped: function() {
            line8();
        }
    });
}

var line8 = function() {
    $('.blue').typed({
        strings: ["(definition);"],
        typeSpeed: 25,
        showCursor: false,
        onStringTyped: function() {
            line9();
        }
    });
}

var line9 = function() {
    $('.purple2').typed({
        strings: ["}"],
        typeSpeed: 25,
        showCursor: false,
        onStringTyped: function() {
            line10();
        }
    });
}

var line10 = function() {
    $('.gray2').typed({
        strings: ["/* Have fun exploring Me !! */"],
        typeSpeed: 25,
        showCursor: false,
    });
}

var mydefinition = function() {
    $('.gray').typed({
        strings: ["/* Hi there . ^500 Let's define a function which defines me. */"],
        typeSpeed: 25,
        startDelay: 1000,
        showCursor: false,
        onStringTyped: function() {
            line2();
        }
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

/*-------------------------------------------------------------------------------------------------------------------------------*/

var line2 = function() {
    $('.yellow-viewport2').typed({
        strings: ["def  "],
        typeSpeed: 25,
        startDelay: 0,
        showCursor: false,
        onStringTyped: function() {
            line3();
        }
    });
}

var line3 = function() {
    $('.blue-viewport2').typed({
        strings: ["about_rahul():"],
        typeSpeed: 25,
        startDelay: 0,
        showCursor: false,
        onStringTyped: function() {
            line4();
        }
    });
}

var line4 = function() {
    $('.purple-viewport2').typed({
        strings: ['about_rahul = '],
        typeSpeed: 25,
        startDelay: 0,
        showCursor: false,
        onStringTyped: function() {
            line5();
        }
    })
}

var line5 = function() {
    $('.white-viewport2').typed({
        strings: [' " I am a huge fan of astronomy . '],
        typeSpeed: 25,
        startDelay: 0,
        showCursor: false,
        onStringTyped: function() {
            appearAstronomy();
        }
    })
}

var aboutMe = function() {
    $('.gray-viewport2').typed({
        strings: ["## Let's paint the canvas with a little bit of Rahul .. Shall we !! "],
        typeSpeed: 25,
        startDelay: 1000,
        showCursor: false,
        onStringTyped: function() {
            line2();
        }
    });
}

var appearAstronomy = function() {
    $('#viewport2').fadeOut(750, function() {
        $('#viewport1').css('opacity', '0');
        $('#viewport2').css('background-image', 'radial-gradient(1600px at 70% 120%, rgba(33, 39, 80, 1) 10%, #020409 100%)');
        $('#viewport2').fadeIn(750);
        $('.rocket').css('opacity', '100');
        $('.rocket').fadeIn(750);
        $('.rocket2').css('opacity', '100');
        $('.rocket2').fadeIn(750);
        $('#moon').css('opacity', '100');
    })

}


aboutMe();

/*-------------------------------------------------------------------------------------------------------------------------------*/

// Document Ready Function

// $(document).ready(function()
// {
//  $('#sublime-text').fadeOut(0, function()
//      {
//          $('#sublime-text').fadeIn(1000);
//      });
//  $('#header-line').fadeOut(0 , function()
//  {
//      $('#header-line').fadeIn(1000); 
//  })

//  illuminateButton();

//  mydefinition();
// })
