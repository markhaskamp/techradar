//This is the title for your window tab, and your Radar
document.title = "Technology Radar";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'Adopt'}
                  ,{'r':200,'name':'Trial'}
                  ,{'r':300,'name':'Assess'}
                  ,{'r':400,'name':'Hold'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//   r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1160;
var w = 1200;

var hold   = 'hold';
var assess = 'assess';
var trial  = 'trial';
var adopt  = 'adopt';

var hold_theta   = 90;
var assess_theta = 90;
var trial_theta  = 90;
var adopt_theta  = 90;

var radius = {
  'hold':   400,
  'assess': 300,
  'trial':  200,
  'adopt':  100
};

var theta = {
  hold:   hold_theta,
  assess: assess_theta,
  trial:  trial_theta,
  adopt:  adopt_theta
};

var techniques_theta = {
  hold: 90,
  assess: 90,
  trial: 90,
  adopt: 90
};

var platforms_theta = {
  hold: 180,
  assess: 180,
  trial: 180,
  adopt: 180
};

var languages_theta = {
  hold: 270,
  assess: 270,
  trial: 270,
  adopt: 270
};

var tools_theta = {
  hold: 0,
  assess: 0,
  trial: 0,
  adopt: 0
};

var theta_increment = {
  hold: 5,
  assess: 7,
  trial: 10,
  adopt: 12
};


function technique(ring) {
  techniques_theta[ring] += theta_increment[ring];;
  var foo = techniques_theta[ring];
  return (
    {'r': radius[ring] - 20, 
     't': foo
    }
    );
}

function platforms(ring) {
  platforms_theta[ring] += theta_increment[ring];;
  var foo = platforms_theta[ring];
  return (
    {'r': radius[ring] - 20, 
     't': foo
    }
    );
}

function languages(ring) {
  languages_theta[ring] += theta_increment[ring];;
  var foo = languages_theta[ring];
  return (
    {'r': radius[ring] - 20, 
     't': foo
    }
    );
}

function tools(ring) {
  tools_theta[ring] += theta_increment[ring];;
  var foo = tools_theta[ring];
  return (
    {'r': radius[ring] - 20, 
     't': foo
    }
    );
}

var radar_data = [
    { "quadrant": "Techniques",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [ 
            {"name":"functional programming", "pc":technique(assess),"movement":"c"},
            {"name":"mobile optimized web", "pc":technique(adopt),"movement":"c"},
            {"name":"responsive web design", "pc":technique(adopt),"movement":"c"},    
            {"name":"spa", "pc":technique(adopt),"movement":"c"},    
            {"name":"nio", "pc":technique(assess),"movement":"c"},    
            {"name":"css frameworks", "pc":technique(adopt),"movement":"c"},    
            {"name":"devops automation", "pc":technique(adopt),"movement":"c"}
        ]
    },
    { "quadrant": "Tools",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 
            {"name":"gradle", "pc":tools(hold),"movement":"c"},   
            {"name":"grunt", "pc":tools(trial),"movement":"c"},   
            {"name":"vagrant", "pc":tools(adopt),"movement":"c"},   
            {"name":"puppet", "pc":tools(hold),"movement":"c"},   
            {"name":"chef", "pc":tools(adopt),"movement":"c"},   
            {"name":"bakery?", "pc":tools(assess),"movement":"c"},   
            {"name":"ansible", "pc":tools(assess),"movement":"c"},   
            {"name":"tsung", "pc":tools(assess),"movement":"c"},   
            {"name":"jmeter", "pc":tools(adopt),"movement":"c"},   
            {"name":"grinder", "pc":tools(assess),"movement":"c"},   
            {"name":"gatling", "pc":tools(assess),"movement":"c"},   
            {"name":"protractor", "pc":tools(assess),"movement":"c"},   
            {"name":"lineman", "pc":tools(assess),"movement":"c"},   
            {"name":"phantom", "pc":tools(adopt),"movement":"c"}
        ]
    },
    { "quadrant": "Platforms",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
            {"name":"MEAN", "pc":platforms(assess),"movement":"c"},
            {"name":"windows 8 mobile", "pc":platforms(hold),"movement":"c"},
            {"name":"node", "pc":platforms(adopt),"movement":"c"},
            {"name":"(cloud) amazon", "pc":platforms(adopt),"movement":"c"},
            {"name":"(cloud) azure", "pc":platforms(adopt),"movement":"c"},
            {"name":"(cloud) heroku", "pc":platforms(assess),"movement":"c"},
            {"name":"(cloud) Google App Engine", "pc":platforms(assess),"movement":"c"},
            {"name":"mongo", "pc":platforms(adopt),"movement":"c"},
            {"name":"cassandra", "pc":platforms(assess),"movement":"c"},
            {"name":"ravendb", "pc":platforms(assess),"movement":"c"},
            {"name":"hadoop", "pc":platforms(assess),"movement":"c"}
        ]
    },
    { "quadrant": "Languages",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [ 
            {"name":"elixir", "pc":languages(assess),"movement":"c"},   
            {"name":"angular / ember", "pc":languages(adopt),"movement":"c"},   
            {"name":"backbone", "pc":languages(hold),"movement":"c"},   
            {"name":"knockout", "pc":languages(hold),"movement":"c"},   
            {"name":"react js", "pc":languages(assess),"movement":"c"},   
            {"name":"express js", "pc":languages(trial),"movement":"c"},   
            {"name":"D3 js", "pc":languages(trial),"movement":"c"},   
            {"name":"lodash js", "pc":languages(trial),"movement":"c"},   
            {"name":"underscore js", "pc":languages(trial),"movement":"c"},   
            {"name":"play", "pc":languages(assess),"movement":"c"},   
            {"name":"scala", "pc":languages(trial),"movement":"c"},
            {"name":"clojure", "pc":languages(assess),"movement":"c"},
            {"name":"java 8 (production)", "pc":languages(trial),"movement":"c"},
            {"name":"coffeescript", "pc":languages(hold),"movement":"c"},
            {"name":"html5 web sockets", "pc":languages(adopt),"movement":"c"},
            {"name":"html5 web workers", "pc":languages(assess),"movement":"c"},
            {"name":"html5 web components", "pc":languages(assess),"movement":"c"}
        ]
    }
];
