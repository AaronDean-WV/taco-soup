var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];

for(let i = 0; i < harryPotterTitles.length; i++){
     console.log("Harry Potter " + harryPotterTitles[i]);
 };


//example code


 var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92];
 
for(var i = 0; i < grades.length; i++){
    console.log(grades[i]);
  

 if(grades[i] <= 69 && grades[i] > 0) {
    console.log("You got an F") }
 else if(grades[i] >= 70 && grades[i] < 76) {
    console.log("You got a D")
 }
 else if(grades[i] >= 77 && grades[i] < 84) {
    console.log("You got a C")
 }
 else if(grades[i] >= 84 && grades[i] < 92) {
    console.log("You got a B")
 }
 else if(grades[i] >= 92 && grades[i] <= 100) {
    console.log("You got an A")
 }};


//declare variables to count how many of each letter grade 
let aCount = 0;
let bCount = 0;
let cCount = 0;
let dCount = 0;
let fCount = 0;

//declare variables to track grade with highest count
let largestSoFar = 0;
let mostCommon

//declare variables to get average
let total = 0;
let average = 0;

//loop through grades array
for(var i = 0; i < grades.length; i++){

//if the grade is an A, we count it. 
//If the count is now the highest, we change mostCommon and largestSoFar to reflect that
  if(grades[i] > 92){
    aCount++;
    average = average + grades[i];
  }
    if(aCount>largestSoFar){
      mostCommon = 'A';
      largestSoFar = aCount;
    }};

//repeat for each letter grade
if(grades[i] > 92){
   aCount++;
   average = average + grades[i];
 }
  else if(bCount>largestSoFar){
     mostCommon = 'B';
     largestSoFar = bCount;
   }; if(grades[i] > 84){
      bCount++;
      average = average + grades[i];
    }
     else if(cCount>largestSoFar){
        mostCommon = 'C';
        largestSoFar = cCount;
      }; if(grades[i] > 77){
         cCount++;
         average = average + grades[i];
       }
       else  if(dCount>largestSoFar){
           mostCommon = 'D';
           largestSoFar = dCount;
         }; if(grades[i] > 70){
            dCount++;
            average = average + grades[i];
          }
         else if(fCount>largestSoFar){
              mostCommon = 'F';
              largestSoFar = fCount;
            }; if(grades[i] < 69){
               fCount++;
               average = average + grades[i];
            }
 else{};

//add each grade score to the TOTAL so we can find out the average after we're done looping
  total = grades[i];
         
//find the average
average = (total / grades.length).toFixed(0);

//How many students got A's?
//log how many students got A's
console.log('There were ' + aCount + ' As');

//How many students got B's?
//log how many students got B's
console.log('There were ' + bCount + ' Bs');

//Which was the most common letter grade?
//log which was the most common letter grade

console.log('The most common grade in the class was ' + mostCommon + '. There were ' + largestSoFar);
//What was the average percentage grade in the class?
//log the average percentage grade of the class
console.log('The average grade in the class was ' + average); 

var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moSn"];

let cowSentence = "" 
for(let i=0; i < sentenceArray.lngeth; i++){
   if((i + 1) % 3 === 0 ){
      cowSentence = cowsentence + ` ${sentenceArray[i]} MOOOOOOOO`
   }
   else{
      cowSentence = cowsentence + ` ${sentenceArray[i]}`
   }
}

console.log(cowSentence)

const beatles = {
   albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour"],
   history: {
       formed: 1960,
       disbanded: 1970
   },
   members: [
       {
           name: "George Harrison",
           birth: 1943,
           death: 2001
       },
       {
           name: "Paul McCartney",
           birth: 1942,
           death: null
       },
       {
           name: "John Lennon",
           birth: 1940,
           death: 1980
       },
       {
           name: "Ringo Starr",
           birth: 1940,
           death: null
       }
   ]
}
// Output the following values to the terminal.

console.log(`${beatles.members[0].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[0].birth}. He contributed heavily to the ${beatles.albums[0]},${beatles.albums[1]},${beatles.albums[2]}${beatles.albums[3]} Album,.`);
console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[0]},${beatles.albums[1]},${beatles.albums[2]}${beatles.albums[3]} Album,.`);
console.log(`${beatles.members[2].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[2].birth}. He contributed heavily to the ${beatles.albums[0]},${beatles.albums[1]},${beatles.albums[2]}${beatles.albums[3]} Album,.`);
console.log(`${beatles.members[3].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[3].birth}. He contributed heavily to the ${beatles.albums[0]},${beatles.albums[1]},${beatles.albums[2]}${beatles.albums[3]} Album,.`);

// Please note that these values are not correct. They're just placeholders that you will need to correctly fill out. 