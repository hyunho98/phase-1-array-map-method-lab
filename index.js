const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(function(tutorial) {
    let i = 0;
    tutorial = tutorial.charAt(i).toUpperCase() + tutorial.slice(1);

    for (i = 1; i < tutorial.length; i++) {
      if(tutorial.charAt(i-1) === ' ') {
        tutorial = tutorial.slice(0, i) + tutorial.charAt(i).toUpperCase() + tutorial.slice(i + 1);
      }
    }

    return tutorial;
  });
}
