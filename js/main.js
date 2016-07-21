// Function which adds typewriter effect to the text editor text

var line2 = function()
{
	$('.red').typed(
	{
		strings: ["var define_rahul = function()"],
		typeSpeed: 25,
		showCursor: false,
		onStringTyped: function()
		{
			line3();
		}
	});
}

var line3 = function()
{
	$('.purple1').typed(
	{
		strings: ["{"],
		typeSpeed: 25,
		showCursor: false,
		onStringTyped: function()
		{
			line4();
		}
	});
}

var line4 = function()
{
	$('.green').typed(
	{
		strings: ["var definition = "],
		typeSpeed: 25,
		showCursor: false,
		onStringTyped: function()
		{
			line5();
		}
	});
}

var line5 = function()
{
	$('.white1').typed(
	{
		strings: ["'Hello There . People call me Rahul Baboota . I am a"],
		typeSpeed: 25,
		showCursor: false,
		onStringTyped: function()
		{
			line6();
		}
	});
	console.log('hello');
}

var line6 = function()
{
	$('.white2').typed(
	{
		strings: ["Designer | Developer | Researcher | Aspiring Data Scientist | Star Gazer'"],
		typeSpeed: 25,
		showCursor: false,
		onStringTyped: function()
		{
			line7();
		}
	});
}

var line7 = function()
{
	$('.yellow').typed(
	{
		strings: ["console.log"],
		typeSpeed: 25,
		showCursor: false,
		onStringTyped: function()
		{
			line8();
		}
	});
}

var line8 = function()
{
	$('.blue').typed(
	{
		strings: ["(definition);"],
		typeSpeed: 25,
		showCursor: false,
		onStringTyped: function()
		{
			line9();
		}
	});
}

var line9 = function()
{
	$('.purple2').typed(
	{
		strings: ["}"],
		typeSpeed: 25,
		showCursor: false,
		onStringTyped: function()
		{
			line10();
		}
	});
}

var line10 = function()
{
	$('.gray2').typed(
	{
		strings: ["/* Have fun exploring Me !! */"],
		typeSpeed: 25,
		showCursor: false,
	});
}

var mydefinition = function()
{
	$('.gray').typed(
	{
		strings: ["/* Hi there . Let's define a function which defines me. */"],
        typeSpeed: 25 , 
        showCursor: false,
        onStringTyped : function()
        {
        	line2();
        }
	});
}


$(document).ready(function()
{
	$('#sublime-text').fadeOut(0, function()
		{
			$('#sublime-text').fadeIn(1000);
		});
	$('#header-line').fadeOut(0 , function()
	{
		$('#header-line').fadeIn(1000);	
	})
	
	mydefinition();
})