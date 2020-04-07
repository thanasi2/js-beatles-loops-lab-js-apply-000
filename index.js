


function theBeatlesPlay() {
  const instrument = ["Guitar", "Bass Guitar","Lead Guitar", "Drums"];
  const musicians = ["John Lennon", "Paul McCartney","George Harrison", "Ringo Starr"];
  var beatlesPlay = [];
  for (var x = 0; x < musicians.length; x++) {
    beatlesPlay.push(musicians[x] + " plays " + instrument[x]) }
  return beatlesPlay;
  }


function johnLennonFacts() {
  const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian"
  ];
  var factsExclaim = [];
  var x = 0;
  while (x < facts.length) {
    factsExclaim.push(`${facts[x]}!!!`);
    x++;
  }
  return factsExclaim;
}

function iLoveTheBeatles() {
  var iLove = [];
  var x = 7;
  do {
    iLove.push("I love the Beatles!");
    x++;
  } while (x < 15);
  return iLove;
}