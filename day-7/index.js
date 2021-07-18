/* 1--Write a JavaScript program to list the properties of a JavaScript object. Sample
object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
solution--var student = {
 name : "David Rayy",
 sclass : "VI",
 rollno : 12 
};
 
 console.log(student.name); console.log(student.sclass); console.log(student.rollno);
*/
/* 2--Write a JavaScript program to delete the rollno property from the following object.
Also print the object before or after deleting the property. 
solution--var student =  { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12  };
console.log(student);
delete student.rollno;
console.log(student);*/
/* 3--Write a JavaScript program to get the length of a JavaScript object. Sample object :
solution--  var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
    
    console.log(Object.keys(student).length);

*/
/*Write a JavaScript program to display the reading status (i.e. display book name,
author name and reading status) of the following books. var library = [ { author: 'Bill
Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter
Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final
Book of The Hunger Games', readingStatus: false }];
solution--var library = [
    {
    author : "bill gates",
    title : "the road ahead",
    readingStatus : true
    },
    {
    author : "steve jobs",
    title : "walter isaacson",
    readingStatus : true
    },
    {
    author : "suzane collins",
    title : "Mockongjay",
    readingStatus : false
    }
    ];
    function stat_books () {
    var result = "";
    for(var x in library) {
    if(library[x].readingStatus)
    library[x].readingStatus = "Already read";
    else
    library[x].readingStatus = "You steel need to read";
    result += library[x].title + ", " + library[x].author + ", " +
    library[x].readingStatus + "." + "\n";
    }
    return result ;
    }
    console.log(stat_books());
*/
/*Write a JavaScript program to get the volume of a Cylinder with four decimal places
using object classes. Volume of a cylinder : V = πr2h where r is the radius and h is the
height of the cylinder. Try To Attempt : Difficult Level Increased
solution--    function CylinderVolume(radius, height) {
        this.radius = radius;
        this.height = height;
        this.volume = function() { return (Math.PI*this.radius*this.radius*this.height).toFixed(4);
        }
        }
        
        let test = new CylinderVolume(5 , 3);
        console.log('Volume of this cylinder is ' + test.volume() + ' units squared.'); 
        // Volume of this cylinder is 235.6194 units squared.
        */

/* 6--Write a JavaScript program to sort an array of JavaScript objects. Sample Object :
var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title:
'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final
Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; Expected
Output: [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" },
[object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final
Book of The Hunger Games" }, [object Object] { author: "The Road Ahead", libraryID:
1254, title: "Bill Gates" }]
solution--        var library = [ 
   {
    title: 'Bill Gates',
    author: 'The Road Ahead',
    libraryID: 1254
},
{
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    libraryID: 4264
},
{
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
}];

var sort_by = function(field_name, reverse, initial){

var key = initial ?
    function(x)
          {
            return initial(x[field_name]);
          } :
    function(x) 
          {
            return x[field_name];
          };

reverse = !reverse ? 1 : -1;

return function (x, y) {
    return x = key(x), y = key(y), reverse * ((x > y) - (y > x));
  } ;
};


var newobj = library.sort(sort_by('libraryID', true, parseInt));

console.log(newobj);
*/

        
