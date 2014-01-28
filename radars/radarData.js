//This is the title for your window tab, and your Radar
document.title = "Stephen's Technology Radar";


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

var radar_data = [
    { "quadrant": "Techniques",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [ 
            {"name":"Database based Integration", "pc":technique(hold),"movement":"t"},
            {"name":"Scrum certification", "pc":technique(hold),"movement":"c"},
            {"name":"Incremental data warehousing", "pc":technique(assess),"movement":"c"},    
            {"name":"DevOps", "pc":technique(assess),"movement":"c"},    
            {"name":"Polygot Programming", "pc":technique(trial),"movement":"c"},    
            {"name":"Automation of technical tests", "pc":technique(trial),"movement":"c"},    
            {"name":"Capability modelling", "pc":technique(trial),"movement":"c"},   
            {"name":"Service choreography", "pc":technique(trial),"movement":"c"},   
            {"name":"Continuous deployment", "pc":technique(trial),"movement":"c"},   
            {"name":"Evolutionary architecture", "pc":technique(trial),"movement":"c"},   
            {"name":"Coding architects", "pc":technique(adopt),"movement":"c"},   
            {"name":"Visualisation and metrics", "pc":technique(adopt),"movement":"c"},   
            {"name":"Web as platform", "pc":technique(adopt),"movement":"c"},   
            {"name":"Emergent design", "pc":technique(adopt),"movement":"c"},   
            {"name":"Evolutionary database", "pc":technique(adopt),"movement":"c"},   
            {"name":"Platform roadmaps", "pc":technique(adopt),"movement":"c"},   
            {"name":"Build pipelines", "pc":technique(adopt),"movement":"c"} 
        ]
    },
    { "quadrant": "Tools",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 
            //{"name":"ESB", "pc":platforms(hold),"movement":"t"},   
            {"name":"Intentional Programming", "pc":{"r":310,"t":10},"movement":"c"},   
            {"name":"Cross mobile platforms", "pc":{"r":280,"t":85},"movement":"c"},   
            {"name":"Github", "pc":{"r":280,"t":70},"movement":"c"},   
            {"name":"Restfulie", "pc":{"r":280,"t":50},"movement":"c"},   
            {"name":"RDF triple stores", "pc":{"r":280,"t":30},"movement":"c"},   
            {"name":"Apache camel", "pc":{"r":180,"t":85},"movement":"c"},   
            {"name":"Next gen test tools", "pc":{"r":180,"t":75},"movement":"c"},   
            {"name":"NoSQL", "pc":{"r":180,"t":65},"movement":"c"},   
            {"name":"Neo4j", "pc":{"r":180,"t":50},"movement":"c"},   
            {"name":"Message busses without smarts", "pc":{"r":160,"t":85},"movement":"c"},   
            {"name":"Puppet", "pc":{"r":130,"t":85},"movement":"c"},   
            {"name":"mongoDB", "pc":{"r":130,"t":55},"movement":"c"},   
            {"name":"Mercurial", "pc":{"r":130,"t":30},"movement":"c"},   
            {"name":"Git", "pc":{"r":130,"t":15},"movement":"c"},   
            {"name":"Squid", "pc":{"r":80,"t":85},"movement":"c"},   
            {"name":"ASP.NET MVC", "pc":{"r":80,"t":10},"movement":"c"},   
            {"name":"Subversion", "pc":{"r":30,"t":30},"movement":"c"}
        ]
    },
    { "quadrant": "Platforms",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
            {"name":"Rich internet applications", "pc":platforms(hold),"movement":"c"},   
            {"name":"GWT", "pc":platforms(hold),"movement":"c"},   
            {"name":"IE8", "pc":platforms(hold),"movement":"c"},   
            {"name":"WS-* beyond basic profile", "pc":platforms(hold),"movement":"c"},   
            {"name":"Azure", "pc":platforms(assess),"movement":"c"},   
            {"name":"Mobile Web", "pc":platforms(assess),"movement":"t"},   
            {"name":"Google App Engine", "pc":platforms(assess),"movement":"c"},   
            {"name":"Google as corporate platform", "pc":platforms(assess),"movement":"c"},   
            {"name":"App containers", "pc":platforms(assess),"movement":"c"},   
            {"name":"Application appliances", "pc":platforms(trial),"movement":"c"},   
            {"name":"GPGPU", "pc":platforms(trial),"movement":"t"},   
            {"name":"OAuth", "pc":platforms(trial),"movement":"t"},   
            {"name":"RDFa", "pc":platforms(trial),"movement":"t"},   
            {"name":"Location based services", "pc":platforms(trial),"movement":"c"},   
            {"name":"iPad", "pc":platforms(trial),"movement":"c"},   
            {"name":"EC2 & S3", "pc":platforms(trial),"movement":"c"},   
            {"name":"Facebook as a business platform", "pc":platforms(trial),"movement":"c"},   
            {"name":"JVM as platform", "pc":platforms(adopt),"movement":"c"},   
            {"name":"iPhone", "pc":platforms(adopt),"movement":"c"},   
            {"name":"Android", "pc":platforms(adopt),"movement":"c"},   
            {"name":"KVM", "pc":platforms(adopt),"movement":"t"},   
            {"name":"Atom", "pc":platforms(adopt),"movement":"t"},   
            {"name":"ALT.NET", "pc":platforms(adopt),"movement":"c"},   
            {"name":"IE6 End of Life", "pc":platforms(adopt),"movement":"c"}
        ]
    },
    { "quadrant": "Languages",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [ 
            {"name":"Java language end of life", "pc":languages(assess),"movement":"c"},   
            {"name":"F#", "pc":languages(assess),"movement":"c"},   
            {"name":"Scala", "pc":languages(assess),"movement":"c"},   
            {"name":"Clojure", "pc":languages(assess),"movement":"c"},   
            {"name":"HTML 5", "pc":languages(assess),"movement":"c"},   
            {"name":"DSLs", "pc":languages(trial),"movement":"c"},   
            {"name":"Groovy", "pc":languages(trial),"movement":"c"},   
            {"name":"C#4", "pc":languages(adopt),"movement":"c"},   
            {"name":"JRuby", "pc":languages(adopt),"movement":"c"},   
            {"name":"Javascript as a 1st class language", "pc":languages(adopt),"movement":"c"},   
            {"name":"Ruby", "pc":languages(adopt),"movement":"c"}
        ]
    }
];
