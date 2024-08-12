'use strict';

// const questionELe = document.querySelector('.question-section p');
// const optionEle = document.querySelector('.option');
// const answerELe = document.querySelector('.final-answer')
// const scoreELe = document.querySelector('.scores');
// const totalScoreEle = document.querySelector('.total-score');

// let currentQuestionIndex = 0;
// let score = 0;

// const chelseaQuiz = [
//     {
//         question: "Who is Chelsea's all-time top scorer?",
//         options: ["Frank Lampard", "Didier Drogba", "Gianfranco Zola", "Joe Cole"],
//         answer: "Frank Lampard"
//     },

//     {
//         question: "In which year was Chelsea FC founded?",
//         options: ["1905", "1920", "1950", "1965"],
//         answer: "1905"
//     },

//     {
//         question: "Which stadium is Chelsea's home ground?",
//         options: ["Old Trafford", "Anfield", "Stamford Bridge", "Etihad Stadium"],
//         answer: "Stamford Bridge"
//     },

//     {
//         question: "Who won the Premier League with Chelsea in the 2014-2015 season?",
//         options: ["Jose Mourinho", "Carlo Ancelotti", "Antonio Conte", "Guus Hiddink"],
//         answer: "Jose Mourinho"
//     },

//     {
//         question: "Which player did Chelsea sign from Arsenal in 2004?",
//         options: ["Ashley Cole", "Robert Pires", "Thierry Henry", "Patrick Vieira"],
//         answer: "Ashley Cole"
//     },

//     {
//         question: "What was Chelsea's highest league finish in the 20th century?",
//         options: ["2nd", "3rd", "4th", "5th"],
//         answer: "2nd"
//     },

//     {
//         question: "Who was Chelsea's manager when they won their first Champions League title?",
//         options: ["Rafael Benitez", "Andre Villas-Boas", "Carlo Ancelotti", "Roberto Di Matteo"],
//         answer: "Roberto Di Matteo"
//     },

//     {
//         question: "Which Chelsea player won the PFA Player of the Year award in 2015?",
//         options: ["Eden Hazard", "N'Golo Kante", "Cesc Fabregas", "Willian"],
//         answer: "Eden Hazard"
//     },

//     {
//         question: "Who is Chelsea's record signing?",
//         options: ["Kai Havertz", "Enzo Fernandez", "Romelu Lukaku", "Gonzalo Higuain"],
//         answer: "Enzo Fernandez"
//     },

//     {
//         question: "Which Chelsea player scored the winning goal in the 2012 Champions League final?",
//         options: ["Didier Drogba", "Frank Lampard", "Juan Mata", "Fernando Torres"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Who was Chelsea's captain during their 2014-2015 Premier League title win?",
//         options: ["John Terry", "Frank Lampard", "Petr Čech", "Gianfranco Zola"],
//         answer: "John Terry"
//     },

//     {
//         question: "Which player did Chelsea sign from Lille in 2012?",
//         options: ["Eden Hazard", "Nicolas Anelka", "Florent Malouda", "Salomon Kalou"],
//         answer: "Eden Hazard"
//     },

//     {
//         question: "What color is Chelsea's away kit typically?",
//         options: ["Yellow", "Green", "Black", "Blue"],
//         answer: "Yellow"
//     },

//     {
//         question: "Which Chelsea manager won the FA Cup in 2007?",
//         options: ["José Mourinho", "Avram Grant", "Luiz Felipe Scolari", "Carlo Ancelotti"],
//         answer: "José Mourinho"
//     },

//     {
//         question: "Which Chelsea player was known as 'The Drogba'?",
//         options: ["Didier Drogba", "Michael Essien", "Nicolas Anelka", "Frank Lampard"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Who did Chelsea defeat in the 2013 Europa League final?",
//         options: ["Benfica", "Valencia", "Athletic Bilbao", "Napoli"],
//         answer: "Benfica"
//     },

//     {
//         question: "Which Chelsea player scored the most goals in the 2019-2020 Premier League season?",
//         options: ["Tammy Abraham", "Mason Mount", "Christian Pulisic", "Olivier Giroud"],
//         answer: "Tammy Abraham"
//     },

//     {
//         question: "Which Chelsea player was known for his 'Panenka' penalty against Bayern Munich in 2012?",
//         options: ["Frank Lampard", "Didier Drogba", "Juan Mata", "Nicolas Anelka"],
//         answer: "Nicolas Anelka"
//     },

//     {
//         question: "Which Chelsea player was the top scorer in the 2006-2007 Premier League season?",
//         options: ["Didier Drogba", "Frank Lampard", "Andriy Shevchenko", "Arjen Robben"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Who was Chelsea's manager before Maurizio Sarri?",
//         options: ["Antonio Conte", "José Mourinho", "Carlo Ancelotti", "Guus Hiddink"],
//         answer: "Antonio Conte"
//     },

//     {
//         question: "Which Chelsea player scored a hat-trick in the 2009 FA Cup final?",
//         options: ["Didier Drogba", "Frank Lampard", "Nicolas Anelka", "Salomon Kalou"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Who did Chelsea defeat in the 2018 FA Cup final?",
//         options: ["Manchester United", "Arsenal", "Liverpool", "Tottenham Hotspur"],
//         answer: "Manchester United"
//     },

//     {
//         question: "Which player did Chelsea sign from AS Roma in 2018?",
//         options: ["Jorginho", "Emerson Palmieri", "N'Golo Kante", "Mateo Kovacic"],
//         answer: "Emerson Palmieri"
//     },

//     {
//         question: "Who was Chelsea's manager during the 2008-2009 season?",
//         options: ["Luiz Felipe Scolari", "José Mourinho", "Carlo Ancelotti", "Avram Grant"],
//         answer: "Luiz Felipe Scolari"
//     },

//     {
//         question: "Which Chelsea player scored in the 2011-2012 Premier League season opener against Stoke City?",
//         options: ["Didier Drogba", "Juan Mata", "Frank Lampard", "Nicolas Anelka"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Which Chelsea player was known for his exceptional dribbling skills and was often called 'The Wizard'?",
//         options: ["Eden Hazard", "Arjen Robben", "Willian", "Florent Malouda"],
//         answer: "Eden Hazard"
//     },

//     {
//         question: "Who was Chelsea's goalkeeper before Kepa Arrizabalaga?",
//         options: ["Petr Čech", "Thibaut Courtois", "Asmir Begovic", "Cesar Azpilicueta"],
//         answer: "Thibaut Courtois"
//     },

//     {
//         question: "Which Chelsea player was named Premier League Player of the Season in 2016-2017?",
//         options: ["N'Golo Kante", "Eden Hazard", "Diego Costa", "Cesc Fabregas"],
//         answer: "N'Golo Kante"
//     },

//     {
//         question: "Which club did Chelsea defeat in the 2008 Champions League final?",
//         options: ["Manchester United", "Barcelona", "Liverpool", "Bayern Munich"],
//         answer: "Manchester United"
//     },

//     {
//         question: "Who was Chelsea's top scorer in the 2010-2011 Premier League season?",
//         options: ["Didier Drogba", "Nicolas Anelka", "Frank Lampard", "Salomon Kalou"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Which Chelsea player scored the winning goal in the 1997 FA Cup final?",
//         options: ["Gianfranco Zola", "Frank Lampard", "Dennis Wise", "Mark Hughes"],
//         answer: "Dennis Wise"
//     },

//     {
//         question: "Which player did Chelsea sign from Benfica in 2020?",
//         options: ["Enzo Fernandez", "Joao Felix", "Ruben Dias", "Bernardo Silva"],
//         answer: "Enzo Fernandez"
//     },

//     {
//         question: "Which Chelsea player was known for his exceptional defensive skills and was often called 'The Captain'?",
//         options: ["John Terry", "Ricardo Carvalho", "Paulo Ferreira", "William Gallas"],
//         answer: "John Terry"
//     },

//     {
//         question: "Which Chelsea player scored a crucial goal in the 2009-2010 Premier League title win?",
//         options: ["Didier Drogba", "Frank Lampard", "Nicolas Anelka", "Florent Malouda"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Who was Chelsea's manager during their 2005 Premier League title win?",
//         options: ["José Mourinho", "Carlo Ancelotti", "Guus Hiddink", "Claudio Ranieri"],
//         answer: "José Mourinho"
//     },

//     {
//         question: "Which Chelsea player won the Golden Boot in the Premier League in 2015-2016?",
//         options: ["Didier Drogba", "Diego Costa", "Eden Hazard", "Nicolas Anelka"],
//         answer: "Diego Costa"
//     },

//     {
//         question: "Who did Chelsea sign from AC Milan in 2009?",
//         options: ["Zlatan Ibrahimovic", "Alexandre Pato", "Gennaro Gattuso", "Riccardo Montolivo"],
//         answer: "Alexandre Pato"
//     },

//     {
//         question: "Which Chelsea player scored the fastest goal in Premier League history?",
//         options: ["Didier Drogba", "Eden Hazard", "Frank Lampard", "Nicolas Anelka"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Which Chelsea player was nicknamed 'The Flying Dutchman'?",
//         options: ["Arjen Robben", "Marco van Basten", "Ruud Gullit", "Edgar Davids"],
//         answer: "Arjen Robben"
//     },

//     {
//         question: "Which Chelsea manager led the team to win the Premier League in 2009-2010?",
//         options: ["José Mourinho", "Carlo Ancelotti", "Andre Villas-Boas", "Luiz Felipe Scolari"],
//         answer: "Carlo Ancelotti"
//     },

//     {
//         question: "Which Chelsea player was known for his powerful long-range shots?",
//         options: ["Frank Lampard", "Cesc Fabregas", "Eden Hazard", "Nicolas Anelka"],
//         answer: "Frank Lampard"
//     },

//     {
//         question: "Which Chelsea player is known for his defensive skills and nickname 'The Bison'?",
//         options: ["Michael Essien", "Claude Makélélé", "Ricardo Carvalho", "John Obi Mikel"],
//         answer: "Michael Essien"
//     },

//     {
//         question: "Which Chelsea player scored in the 2012 FA Cup final against Liverpool?",
//         options: ["Didier Drogba", "Frank Lampard", "Juan Mata", "Fernando Torres"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Who was Chelsea's top scorer in the 2011-2012 season?",
//         options: ["Didier Drogba", "Frank Lampard", "Juan Mata", "Nicolas Anelka"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Which Chelsea player was known for his skillful dribbling and flair, often compared to Ronaldinho?",
//         options: ["Eden Hazard", "Arjen Robben", "Florent Malouda", "Joe Cole"],
//         answer: "Eden Hazard"
//     },

//     {
//         question: "Which Chelsea player was known for his excellent ball distribution and playmaking abilities?",
//         options: ["Cesc Fabregas", "Frank Lampard", "John Obi Mikel", "Michael Essien"],
//         answer: "Cesc Fabregas"
//     },

//     {
//         question: "Which Chelsea player had a famous goal celebration known as 'The Dance'?",
//         options: ["Didier Drogba", "Eden Hazard", "Nicolas Anelka", "Salomon Kalou"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Who was Chelsea's manager during their 2016-2017 Premier League title win?",
//         options: ["Antonio Conte", "José Mourinho", "Carlo Ancelotti", "Claudio Ranieri"],
//         answer: "Antonio Conte"
//     },

//     {
//         question: "Which Chelsea player was known for his exceptional pace and counter-attacking skills?",
//         options: ["Arjen Robben", "Eden Hazard", "Willian", "Victor Moses"],
//         answer: "Victor Moses"
//     },

//     {
//         question: "Which Chelsea player had the highest number of assists in the 2018-2019 Premier League season?",
//         options: ["Eden Hazard", "Willian", "Cesc Fabregas", "Christian Pulisic"],
//         answer: "Eden Hazard"
//     },

//     {
//         question: "Which Chelsea player was renowned for his solid performances in central defense and was nicknamed 'The Rock'?",
//         options: ["Ricardo Carvalho", "John Terry", "Paulo Ferreira", "William Gallas"],
//         answer: "John Terry"
//     },

//     {
//         question: "Which Chelsea player made the most appearances for the club?",
//         options: ["John Terry", "Frank Lampard", "Petr Čech", "Gianfranco Zola"],
//         answer: "Frank Lampard"
//     },

//     {
//         question: "Who did Chelsea sign from Leicester City in 2016?",
//         options: ["N'Golo Kante", "Wilfred Ndidi", "Riyad Mahrez", "Jamie Vardy"],
//         answer: "N'Golo Kante"
//     },

//     {
//         question: "Which Chelsea player was the youngest to score a hat-trick for the club?",
//         options: ["Tammy Abraham", "Mason Mount", "Christian Pulisic", "Callum Hudson-Odoi"],
//         answer: "Callum Hudson-Odoi"
//     },

//     {
//         question: "Which Chelsea player scored the most goals in a single Premier League season?",
//         options: ["Didier Drogba", "Frank Lampard", "Diego Costa", "Eden Hazard"],
//         answer: "Diego Costa"
//     },

//     {
//         question: "Who was Chelsea's top goal scorer in the 2007-2008 season?",
//         options: ["Didier Drogba", "Frank Lampard", "Nicolas Anelka", "Andriy Shevchenko"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Which Chelsea player was known for his trademark free-kicks?",
//         options: ["Frank Lampard", "Joe Cole", "Arjen Robben", "Nicolas Anelka"],
//         answer: "Frank Lampard"
//     },

//     {
//         question: "Which Chelsea player was named the UEFA Champions League Player of the Season in 2012?",
//         options: ["Didier Drogba", "Frank Lampard", "Juan Mata", "Petr Čech"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Which Chelsea player scored a memorable solo goal against Arsenal in 2005?",
//         options: ["Eden Hazard", "Didier Drogba", "Arjen Robben", "Frank Lampard"],
//         answer: "Arjen Robben"
//     },

//     {
//         question: "Who was Chelsea's top goal scorer in the 2019-2020 season?",
//         options: ["Tammy Abraham", "Christian Pulisic", "Mason Mount", "Olivier Giroud"],
//         answer: "Tammy Abraham"
//     },

//     {
//         question: "Which Chelsea player was known for his defensive capabilities and leadership skills, often playing as a right-back?",
//         options: ["Paulo Ferreira", "Ricardo Carvalho", "John Terry", "Ashley Cole"],
//         answer: "Paulo Ferreira"
//     },

//     {
//         question: "Which Chelsea player won the FA Youth Cup in 2015 and later became a key player for the first team?",
//         options: ["Mason Mount", "Tammy Abraham", "Callum Hudson-Odoi", "Reece James"],
//         answer: "Mason Mount"
//     },

//     {
//         question: "Which Chelsea player was known for his long throw-ins and solid defensive play?",
//         options: ["John Terry", "Ricardo Carvalho", "Paulo Ferreira", "Geremi"],
//         answer: "Geremi"
//     },

//     {
//         question: "Which Chelsea player scored a stunning goal in the 2013-2014 Premier League season against Tottenham Hotspur?",
//         options: ["Eden Hazard", "Willian", "Frank Lampard", "Nicolas Anelka"],
//         answer: "Eden Hazard"
//     },

//     {
//         question: "Which Chelsea player was the top scorer in the 2017-2018 season?",
//         options: ["Eden Hazard", "Alvaro Morata", "Olivier Giroud", "Willian"],
//         answer: "Eden Hazard"
//     },

//     {
//         question: "Which Chelsea player had a successful loan spell at Borussia Dortmund before returning to Stamford Bridge?",
//         options: ["Christian Pulisic", "Michy Batshuayi", "Tammy Abraham", "Jorginho"],
//         answer: "Christian Pulisic"
//     },

//     {
//         question: "Which Chelsea player was known for his role as a box-to-box midfielder and his ability to score goals from distance?",
//         options: ["Frank Lampard", "N'Golo Kante", "Cesc Fabregas", "Michael Essien"],
//         answer: "Frank Lampard"
//     },

//     {
//         question: "Which Chelsea player was named the club's Player of the Year for the 2018-2019 season?",
//         options: ["Eden Hazard", "Christian Pulisic", "Willian", "N'Golo Kante"],
//         answer: "Eden Hazard"
//     },

//     {
//         question: "Who was Chelsea's manager during their 2003-2004 Premier League season?",
//         options: ["José Mourinho", "Claudio Ranieri", "Guus Hiddink", "Carlo Ancelotti"],
//         answer: "Claudio Ranieri"
//     },

//     {
//         question: "Which Chelsea player was known for his incredible passing range and vision?",
//         options: ["Cesc Fabregas", "Frank Lampard", "N'Golo Kante", "Juan Mata"],
//         answer: "Cesc Fabregas"
//     },

//     {
//         question: "Which Chelsea player scored a decisive goal in the 2009 FA Cup final against Everton?",
//         options: ["Didier Drogba", "Frank Lampard", "Nicolas Anelka", "Michael Ballack"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Which Chelsea player was known for his exceptional ability to score from headers?",
//         options: ["Didier Drogba", "John Terry", "Frank Lampard", "Nicolas Anelka"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Who was Chelsea's top goal scorer in the 2020-2021 Premier League season?",
//         options: ["Timo Werner", "Christian Pulisic", "Mason Mount", "Kai Havertz"],
//         answer: "Timo Werner"
//     }
// ];

// function displayQuestion () {
//     const allQuestion = chelseaQuiz[currentQuestionIndex];
//     document.querySelector('.question-section p').textContent = allQuestion.question;
//     const options = document.querySelectorAll('.answer-section .option');

//     options.forEach((option, index) => {
//         option.textContent = allQuestion.options[index];
//         option.onclick = () => optionClick() (allQuestion.options[index]);
//     });
// }

// function optionClick(selectedOption) {
//     const correctAnswer = chelseaQuiz[currentQuestionIndex].answer;
//     if (selectedOption === correctAnswer) {
//         score ++;
//         document.querySelector('.final-answer').textContent = 'Correct😁';
//     } else {
//         document.querySelector('.final-answer').textContent = 'Wrong😁';
//     }

//     document.querySelector('.scores').textContent = `Score: ${score}`;

//     currentQuestionIndex ++;
//     if (currentQuestionIndex < chelseaQuiz.length) {
//         displayQuestion();
//     } else {
//         document.querySelector('.total-scores').textContent = `Quiz Over🎉 Final Score: ${score}`;
//         document.querySelector('.final-answer').textContent = '';
//     }
// }

// displayQuestion();


// const chelseaQuiz = [
//     {
//         question: "Who is Chelsea's all-time top scorer?",
//         options: ["Didier Drogba", "Frank Lampard", "Eden Hazard", "John Terry"],
//         answer: "Frank Lampard"
//     }
// ];





// const chelseaQuiz = [
//     {
//         question: "Who is Chelsea's all-time top scorer?",
//         options: ["Frank Lampard", "Didier Drogba", "Gianfranco Zola", "Joe Cole"],
//         answer: "Frank Lampard"
//     },

//     {
//         question: "In which year was Chelsea FC founded?",
//         options: ["1905", "1920", "1950", "1965"],
//         answer: "1905"
//     },

//     {
//         question: "Which stadium is Chelsea's home ground?",
//         options: ["Old Trafford", "Anfield", "Stamford Bridge", "Etihad Stadium"],
//         answer: "Stamford Bridge"
//     },

//     {
//         question: "Who won the Premier League with Chelsea in the 2014-2015 season?",
//         options: ["Jose Mourinho", "Carlo Ancelotti", "Antonio Conte", "Guus Hiddink"],
//         answer: "Jose Mourinho"
//     },

//     {
//         question: "Which player did Chelsea sign from Arsenal in 2004?",
//         options: ["Ashley Cole", "Robert Pires", "Thierry Henry", "Patrick Vieira"],
//         answer: "Ashley Cole"
//     },

//     {
//         question: "What was Chelsea's highest league finish in the 20th century?",
//         options: ["2nd", "3rd", "4th", "5th"],
//         answer: "2nd"
//     },

//     {
//         question: "Who was Chelsea's manager when they won their first Champions League title?",
//         options: ["Rafael Benitez", "Andre Villas-Boas", "Carlo Ancelotti", "Roberto Di Matteo"],
//         answer: "Roberto Di Matteo"
//     },

//     {
//         question: "Which Chelsea player won the PFA Player of the Year award in 2015?",
//         options: ["Eden Hazard", "N'Golo Kante", "Cesc Fabregas", "Willian"],
//         answer: "Eden Hazard"
//     },

//     {
//         question: "Who is Chelsea's record signing?",
//         options: ["Kai Havertz", "Enzo Fernandez", "Romelu Lukaku", "Gonzalo Higuain"],
//         answer: "Enzo Fernandez"
//     },

//     {
//         question: "Which Chelsea player scored the winning goal in the 2012 Champions League final?",
//         options: ["Didier Drogba", "Frank Lampard", "Juan Mata", "Fernando Torres"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Who was Chelsea's captain during their 2014-2015 Premier League title win?",
//         options: ["John Terry", "Frank Lampard", "Petr Čech", "Gianfranco Zola"],
//         answer: "John Terry"
//     },

//     {
//         question: "Which player did Chelsea sign from Lille in 2012?",
//         options: ["Eden Hazard", "Nicolas Anelka", "Florent Malouda", "Salomon Kalou"],
//         answer: "Eden Hazard"
//     },

//     {
//         question: "What color is Chelsea's away kit typically?",
//         options: ["Yellow", "Green", "Black", "Blue"],
//         answer: "Yellow"
//     },

//     {
//         question: "Which Chelsea manager won the FA Cup in 2007?",
//         options: ["José Mourinho", "Avram Grant", "Luiz Felipe Scolari", "Carlo Ancelotti"],
//         answer: "José Mourinho"
//     },

//     {
//         question: "Which Chelsea player was known as 'The Drogba'?",
//         options: ["Didier Drogba", "Michael Essien", "Nicolas Anelka", "Frank Lampard"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Who did Chelsea defeat in the 2013 Europa League final?",
//         options: ["Benfica", "Valencia", "Athletic Bilbao", "Napoli"],
//         answer: "Benfica"
//     },

//     {
//         question: "Which Chelsea player scored the most goals in the 2019-2020 Premier League season?",
//         options: ["Tammy Abraham", "Mason Mount", "Christian Pulisic", "Olivier Giroud"],
//         answer: "Tammy Abraham"
//     },

//     {
//         question: "Which Chelsea player was known for his 'Panenka' penalty against Bayern Munich in 2012?",
//         options: ["Frank Lampard", "Didier Drogba", "Juan Mata", "Nicolas Anelka"],
//         answer: "Nicolas Anelka"
//     },

//     {
//         question: "Which Chelsea player was the top scorer in the 2006-2007 Premier League season?",
//         options: ["Didier Drogba", "Frank Lampard", "Andriy Shevchenko", "Arjen Robben"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Who was Chelsea's manager before Maurizio Sarri?",
//         options: ["Antonio Conte", "José Mourinho", "Carlo Ancelotti", "Guus Hiddink"],
//         answer: "Antonio Conte"
//     },

//     {
//         question: "Which Chelsea player scored a hat-trick in the 2009 FA Cup final?",
//         options: ["Didier Drogba", "Frank Lampard", "Nicolas Anelka", "Salomon Kalou"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Who did Chelsea defeat in the 2018 FA Cup final?",
//         options: ["Manchester United", "Arsenal", "Liverpool", "Tottenham Hotspur"],
//         answer: "Manchester United"
//     },

//     {
//         question: "Which player did Chelsea sign from AS Roma in 2018?",
//         options: ["Jorginho", "Emerson Palmieri", "N'Golo Kante", "Mateo Kovacic"],
//         answer: "Emerson Palmieri"
//     },

//     {
//         question: "Who was Chelsea's manager during the 2008-2009 season?",
//         options: ["Luiz Felipe Scolari", "José Mourinho", "Carlo Ancelotti", "Avram Grant"],
//         answer: "Luiz Felipe Scolari"
//     },

//     {
//         question: "Which Chelsea player scored in the 2011-2012 Premier League season opener against Stoke City?",
//         options: ["Didier Drogba", "Juan Mata", "Frank Lampard", "Nicolas Anelka"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Which Chelsea player was known for his exceptional dribbling skills and was often called 'The Wizard'?",
//         options: ["Eden Hazard", "Arjen Robben", "Willian", "Florent Malouda"],
//         answer: "Eden Hazard"
//     },

//     {
//         question: "Who was Chelsea's goalkeeper before Kepa Arrizabalaga?",
//         options: ["Petr Čech", "Thibaut Courtois", "Asmir Begovic", "Cesar Azpilicueta"],
//         answer: "Thibaut Courtois"
//     },

//     {
//         question: "Which Chelsea player was named Premier League Player of the Season in 2016-2017?",
//         options: ["N'Golo Kante", "Eden Hazard", "Diego Costa", "Cesc Fabregas"],
//         answer: "N'Golo Kante"
//     },

//     {
//         question: "Which club did Chelsea defeat in the 2008 Champions League final?",
//         options: ["Manchester United", "Barcelona", "Liverpool", "Bayern Munich"],
//         answer: "Manchester United"
//     },

//     {
//         question: "Who was Chelsea's top scorer in the 2010-2011 Premier League season?",
//         options: ["Didier Drogba", "Nicolas Anelka", "Frank Lampard", "Salomon Kalou"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Which Chelsea player scored the winning goal in the 1997 FA Cup final?",
//         options: ["Gianfranco Zola", "Frank Lampard", "Dennis Wise", "Mark Hughes"],
//         answer: "Dennis Wise"
//     },

//     {
//         question: "Which player did Chelsea sign from Benfica in 2020?",
//         options: ["Enzo Fernandez", "Joao Felix", "Ruben Dias", "Bernardo Silva"],
//         answer: "Enzo Fernandez"
//     },

//     {
//         question: "Which Chelsea player was known for his exceptional defensive skills and was often called 'The Captain'?",
//         options: ["John Terry", "Ricardo Carvalho", "Paulo Ferreira", "William Gallas"],
//         answer: "John Terry"
//     },

//     {
//         question: "Which Chelsea player scored a crucial goal in the 2009-2010 Premier League title win?",
//         options: ["Didier Drogba", "Frank Lampard", "Nicolas Anelka", "Florent Malouda"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Who was Chelsea's manager during their 2005 Premier League title win?",
//         options: ["José Mourinho", "Carlo Ancelotti", "Guus Hiddink", "Claudio Ranieri"],
//         answer: "José Mourinho"
//     },

//     {
//         question: "Which Chelsea player won the Golden Boot in the Premier League in 2015-2016?",
//         options: ["Didier Drogba", "Diego Costa", "Eden Hazard", "Nicolas Anelka"],
//         answer: "Diego Costa"
//     },

//     {
//         question: "Who did Chelsea sign from AC Milan in 2009?",
//         options: ["Zlatan Ibrahimovic", "Alexandre Pato", "Gennaro Gattuso", "Riccardo Montolivo"],
//         answer: "Alexandre Pato"
//     },

//     {
//         question: "Which Chelsea player scored the fastest goal in Premier League history?",
//         options: ["Didier Drogba", "Eden Hazard", "Frank Lampard", "Nicolas Anelka"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Which Chelsea player was nicknamed 'The Flying Dutchman'?",
//         options: ["Arjen Robben", "Marco van Basten", "Ruud Gullit", "Edgar Davids"],
//         answer: "Arjen Robben"
//     },

//     {
//         question: "Which Chelsea manager led the team to win the Premier League in 2009-2010?",
//         options: ["José Mourinho", "Carlo Ancelotti", "Andre Villas-Boas", "Luiz Felipe Scolari"],
//         answer: "Carlo Ancelotti"
//     },

//     {
//         question: "Which Chelsea player was known for his powerful long-range shots?",
//         options: ["Frank Lampard", "Cesc Fabregas", "Eden Hazard", "Nicolas Anelka"],
//         answer: "Frank Lampard"
//     },

//     {
//         question: "Which Chelsea player is known for his defensive skills and nickname 'The Bison'?",
//         options: ["Michael Essien", "Claude Makélélé", "Ricardo Carvalho", "John Obi Mikel"],
//         answer: "Michael Essien"
//     },

//     {
//         question: "Which Chelsea player scored in the 2012 FA Cup final against Liverpool?",
//         options: ["Didier Drogba", "Frank Lampard", "Juan Mata", "Fernando Torres"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Who was Chelsea's top scorer in the 2011-2012 season?",
//         options: ["Didier Drogba", "Frank Lampard", "Juan Mata", "Nicolas Anelka"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Which Chelsea player was known for his skillful dribbling and flair, often compared to Ronaldinho?",
//         options: ["Eden Hazard", "Arjen Robben", "Florent Malouda", "Joe Cole"],
//         answer: "Eden Hazard"
//     },

//     {
//         question: "Which Chelsea player was known for his excellent ball distribution and playmaking abilities?",
//         options: ["Cesc Fabregas", "Frank Lampard", "John Obi Mikel", "Michael Essien"],
//         answer: "Cesc Fabregas"
//     },

//     {
//         question: "Which Chelsea player had a famous goal celebration known as 'The Dance'?",
//         options: ["Didier Drogba", "Eden Hazard", "Nicolas Anelka", "Salomon Kalou"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Who was Chelsea's manager during their 2016-2017 Premier League title win?",
//         options: ["Antonio Conte", "José Mourinho", "Carlo Ancelotti", "Claudio Ranieri"],
//         answer: "Antonio Conte"
//     },

//     {
//         question: "Which Chelsea player was known for his exceptional pace and counter-attacking skills?",
//         options: ["Arjen Robben", "Eden Hazard", "Willian", "Victor Moses"],
//         answer: "Victor Moses"
//     },

//     {
//         question: "Which Chelsea player had the highest number of assists in the 2018-2019 Premier League season?",
//         options: ["Eden Hazard", "Willian", "Cesc Fabregas", "Christian Pulisic"],
//         answer: "Eden Hazard"
//     },

//     {
//         question: "Which Chelsea player was renowned for his solid performances in central defense and was nicknamed 'The Rock'?",
//         options: ["Ricardo Carvalho", "John Terry", "Paulo Ferreira", "William Gallas"],
//         answer: "John Terry"
//     },

//     {
//         question: "Which Chelsea player made the most appearances for the club?",
//         options: ["John Terry", "Frank Lampard", "Petr Čech", "Gianfranco Zola"],
//         answer: "Frank Lampard"
//     },

//     {
//         question: "Who did Chelsea sign from Leicester City in 2016?",
//         options: ["N'Golo Kante", "Wilfred Ndidi", "Riyad Mahrez", "Jamie Vardy"],
//         answer: "N'Golo Kante"
//     },

//     {
//         question: "Which Chelsea player was the youngest to score a hat-trick for the club?",
//         options: ["Tammy Abraham", "Mason Mount", "Christian Pulisic", "Callum Hudson-Odoi"],
//         answer: "Callum Hudson-Odoi"
//     },

//     {
//         question: "Which Chelsea player scored the most goals in a single Premier League season?",
//         options: ["Didier Drogba", "Frank Lampard", "Diego Costa", "Eden Hazard"],
//         answer: "Diego Costa"
//     },

//     {
//         question: "Who was Chelsea's top goal scorer in the 2007-2008 season?",
//         options: ["Didier Drogba", "Frank Lampard", "Nicolas Anelka", "Andriy Shevchenko"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Which Chelsea player was known for his trademark free-kicks?",
//         options: ["Frank Lampard", "Joe Cole", "Arjen Robben", "Nicolas Anelka"],
//         answer: "Frank Lampard"
//     },

//     {
//         question: "Which Chelsea player was named the UEFA Champions League Player of the Season in 2012?",
//         options: ["Didier Drogba", "Frank Lampard", "Juan Mata", "Petr Čech"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Which Chelsea player scored a memorable solo goal against Arsenal in 2005?",
//         options: ["Eden Hazard", "Didier Drogba", "Arjen Robben", "Frank Lampard"],
//         answer: "Arjen Robben"
//     },

//     {
//         question: "Who was Chelsea's top goal scorer in the 2019-2020 season?",
//         options: ["Tammy Abraham", "Christian Pulisic", "Mason Mount", "Olivier Giroud"],
//         answer: "Tammy Abraham"
//     },

//     {
//         question: "Which Chelsea player was known for his defensive capabilities and leadership skills, often playing as a right-back?",
//         options: ["Paulo Ferreira", "Ricardo Carvalho", "John Terry", "Ashley Cole"],
//         answer: "Paulo Ferreira"
//     },

//     {
//         question: "Which Chelsea player won the FA Youth Cup in 2015 and later became a key player for the first team?",
//         options: ["Mason Mount", "Tammy Abraham", "Callum Hudson-Odoi", "Reece James"],
//         answer: "Mason Mount"
//     },

//     {
//         question: "Which Chelsea player was known for his long throw-ins and solid defensive play?",
//         options: ["John Terry", "Ricardo Carvalho", "Paulo Ferreira", "Geremi"],
//         answer: "Geremi"
//     },

//     {
//         question: "Which Chelsea player scored a stunning goal in the 2013-2014 Premier League season against Tottenham Hotspur?",
//         options: ["Eden Hazard", "Willian", "Frank Lampard", "Nicolas Anelka"],
//         answer: "Eden Hazard"
//     },

//     {
//         question: "Which Chelsea player was the top scorer in the 2017-2018 season?",
//         options: ["Eden Hazard", "Alvaro Morata", "Olivier Giroud", "Willian"],
//         answer: "Eden Hazard"
//     },

//     {
//         question: "Which Chelsea player had a successful loan spell at Borussia Dortmund before returning to Stamford Bridge?",
//         options: ["Christian Pulisic", "Michy Batshuayi", "Tammy Abraham", "Jorginho"],
//         answer: "Christian Pulisic"
//     },

//     {
//         question: "Which Chelsea player was known for his role as a box-to-box midfielder and his ability to score goals from distance?",
//         options: ["Frank Lampard", "N'Golo Kante", "Cesc Fabregas", "Michael Essien"],
//         answer: "Frank Lampard"
//     },

//     {
//         question: "Which Chelsea player was named the club's Player of the Year for the 2018-2019 season?",
//         options: ["Eden Hazard", "Christian Pulisic", "Willian", "N'Golo Kante"],
//         answer: "Eden Hazard"
//     },

//     {
//         question: "Who was Chelsea's manager during their 2003-2004 Premier League season?",
//         options: ["José Mourinho", "Claudio Ranieri", "Guus Hiddink", "Carlo Ancelotti"],
//         answer: "Claudio Ranieri"
//     },

//     {
//         question: "Which Chelsea player was known for his incredible passing range and vision?",
//         options: ["Cesc Fabregas", "Frank Lampard", "N'Golo Kante", "Juan Mata"],
//         answer: "Cesc Fabregas"
//     },

//     {
//         question: "Which Chelsea player scored a decisive goal in the 2009 FA Cup final against Everton?",
//         options: ["Didier Drogba", "Frank Lampard", "Nicolas Anelka", "Michael Ballack"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Which Chelsea player was known for his exceptional ability to score from headers?",
//         options: ["Didier Drogba", "John Terry", "Frank Lampard", "Nicolas Anelka"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Who was Chelsea's top goal scorer in the 2020-2021 Premier League season?",
//         options: ["Timo Werner", "Christian Pulisic", "Mason Mount", "Kai Havertz"],
//         answer: "Timo Werner"
//     }
// ];


// let currentQuestionIndex = 0;
// let score = 0;

// function displayQuestion() {
//     const currentQuestion = chelseaQuiz[currentQuestionIndex];
//     document.querySelector('.question-section p').textContent = currentQuestion.question;

//     const options = document.querySelectorAll('.answer-section .option');
//     options.forEach((option, index) => {
//         option.textContent = currentQuestion.options[index];
//         option.onclick = () => checkAnswer(currentQuestion.options[index]);
//     });
// }

// function checkAnswer(selectedOption) {
//     const correctAnswer = chelseaQuiz[currentQuestionIndex].answer;
//     if (selectedOption === correctAnswer) {
//         score++;
//         document.querySelector('.final-answer').textContent = 'Correct! 😁';
//     } else {
//         document.querySelector('.final-answer').textContent = 'Wrong! 😞';
//     }

//     document.querySelector('.scores').textContent = `Score: ${score}`;
// }

// displayQuestion();






// const questionElement = document.querySelector('.question-section p');
// const optionsButtons = document.querySelectorAll('.answer-section .option');
// const scoreElement = document.querySelector('.scores');


// let currentQuestionIndex = 0;

// document.addEventListener('DOMContentLoaded', () => {
//     const chelseaQuiz = [
//     {
//         question: "Who is Chelsea's all-time top scorer?",
//         options: ["Frank Lampard", "Didier Drogba", "Gianfranco Zola", "Joe Cole"],
//         answer: "Frank Lampard"
//     },

//     {
//         question: "In which year was Chelsea FC founded?",
//         options: ["1905", "1920", "1950", "1965"],
//         answer: "1905"
//     },

//     {
//         question: "Which stadium is Chelsea's home ground?",
//         options: ["Old Trafford", "Anfield", "Stamford Bridge", "Etihad Stadium"],
//         answer: "Stamford Bridge"
//     },

//     {
//         question: "Who won the Premier League with Chelsea in the 2014-2015 season?",
//         options: ["Jose Mourinho", "Carlo Ancelotti", "Antonio Conte", "Guus Hiddink"],
//         answer: "Jose Mourinho"
//     },

//     {
//         question: "Which player did Chelsea sign from Arsenal in 2004?",
//         options: ["Ashley Cole", "Robert Pires", "Thierry Henry", "Patrick Vieira"],
//         answer: "Ashley Cole"
//     },

//     {
//         question: "What was Chelsea's highest league finish in the 20th century?",
//         options: ["2nd", "3rd", "4th", "5th"],
//         answer: "2nd"
//     },

//     {
//         question: "Who was Chelsea's manager when they won their first Champions League title?",
//         options: ["Rafael Benitez", "Andre Villas-Boas", "Carlo Ancelotti", "Roberto Di Matteo"],
//         answer: "Roberto Di Matteo"
//     },

//     {
//         question: "Which Chelsea player won the PFA Player of the Year award in 2015?",
//         options: ["Eden Hazard", "N'Golo Kante", "Cesc Fabregas", "Willian"],
//         answer: "Eden Hazard"
//     },

//     {
//         question: "Who is Chelsea's record signing?",
//         options: ["Kai Havertz", "Enzo Fernandez", "Romelu Lukaku", "Gonzalo Higuain"],
//         answer: "Enzo Fernandez"
//     },

//     {
//         question: "Which Chelsea player scored the winning goal in the 2012 Champions League final?",
//         options: ["Didier Drogba", "Frank Lampard", "Juan Mata", "Fernando Torres"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Who was Chelsea's captain during their 2014-2015 Premier League title win?",
//         options: ["John Terry", "Frank Lampard", "Petr Čech", "Gianfranco Zola"],
//         answer: "John Terry"
//     },

//     {
//         question: "Which player did Chelsea sign from Lille in 2012?",
//         options: ["Eden Hazard", "Nicolas Anelka", "Florent Malouda", "Salomon Kalou"],
//         answer: "Eden Hazard"
//     },

//     {
//         question: "What color is Chelsea's away kit typically?",
//         options: ["Yellow", "Green", "Black", "Blue"],
//         answer: "Yellow"
//     },

//     {
//         question: "Which Chelsea manager won the FA Cup in 2007?",
//         options: ["José Mourinho", "Avram Grant", "Luiz Felipe Scolari", "Carlo Ancelotti"],
//         answer: "José Mourinho"
//     },

//     {
//         question: "Which Chelsea player was known as 'The Drogba'?",
//         options: ["Didier Drogba", "Michael Essien", "Nicolas Anelka", "Frank Lampard"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Who did Chelsea defeat in the 2013 Europa League final?",
//         options: ["Benfica", "Valencia", "Athletic Bilbao", "Napoli"],
//         answer: "Benfica"
//     },

//     {
//         question: "Which Chelsea player scored the most goals in the 2019-2020 Premier League season?",
//         options: ["Tammy Abraham", "Mason Mount", "Christian Pulisic", "Olivier Giroud"],
//         answer: "Tammy Abraham"
//     },

//     {
//         question: "Which Chelsea player was known for his 'Panenka' penalty against Bayern Munich in 2012?",
//         options: ["Frank Lampard", "Didier Drogba", "Juan Mata", "Nicolas Anelka"],
//         answer: "Nicolas Anelka"
//     },

//     {
//         question: "Which Chelsea player was the top scorer in the 2006-2007 Premier League season?",
//         options: ["Didier Drogba", "Frank Lampard", "Andriy Shevchenko", "Arjen Robben"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Who was Chelsea's manager before Maurizio Sarri?",
//         options: ["Antonio Conte", "José Mourinho", "Carlo Ancelotti", "Guus Hiddink"],
//         answer: "Antonio Conte"
//     },

//     {
//         question: "Which Chelsea player scored a hat-trick in the 2009 FA Cup final?",
//         options: ["Didier Drogba", "Frank Lampard", "Nicolas Anelka", "Salomon Kalou"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Who did Chelsea defeat in the 2018 FA Cup final?",
//         options: ["Manchester United", "Arsenal", "Liverpool", "Tottenham Hotspur"],
//         answer: "Manchester United"
//     },

//     {
//         question: "Which player did Chelsea sign from AS Roma in 2018?",
//         options: ["Jorginho", "Emerson Palmieri", "N'Golo Kante", "Mateo Kovacic"],
//         answer: "Emerson Palmieri"
//     },

//     {
//         question: "Who was Chelsea's manager during the 2008-2009 season?",
//         options: ["Luiz Felipe Scolari", "José Mourinho", "Carlo Ancelotti", "Avram Grant"],
//         answer: "Luiz Felipe Scolari"
//     },

//     {
//         question: "Which Chelsea player scored in the 2011-2012 Premier League season opener against Stoke City?",
//         options: ["Didier Drogba", "Juan Mata", "Frank Lampard", "Nicolas Anelka"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Which Chelsea player was known for his exceptional dribbling skills and was often called 'The Wizard'?",
//         options: ["Eden Hazard", "Arjen Robben", "Willian", "Florent Malouda"],
//         answer: "Eden Hazard"
//     },

//     {
//         question: "Who was Chelsea's goalkeeper before Kepa Arrizabalaga?",
//         options: ["Petr Čech", "Thibaut Courtois", "Asmir Begovic", "Cesar Azpilicueta"],
//         answer: "Thibaut Courtois"
//     },

//     {
//         question: "Which Chelsea player was named Premier League Player of the Season in 2016-2017?",
//         options: ["N'Golo Kante", "Eden Hazard", "Diego Costa", "Cesc Fabregas"],
//         answer: "N'Golo Kante"
//     },

//     {
//         question: "Which club did Chelsea defeat in the 2008 Champions League final?",
//         options: ["Manchester United", "Barcelona", "Liverpool", "Bayern Munich"],
//         answer: "Manchester United"
//     },

//     {
//         question: "Who was Chelsea's top scorer in the 2010-2011 Premier League season?",
//         options: ["Didier Drogba", "Nicolas Anelka", "Frank Lampard", "Salomon Kalou"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Which Chelsea player scored the winning goal in the 1997 FA Cup final?",
//         options: ["Gianfranco Zola", "Frank Lampard", "Dennis Wise", "Mark Hughes"],
//         answer: "Dennis Wise"
//     },

//     {
//         question: "Which player did Chelsea sign from Benfica in 2020?",
//         options: ["Enzo Fernandez", "Joao Felix", "Ruben Dias", "Bernardo Silva"],
//         answer: "Enzo Fernandez"
//     },

//     {
//         question: "Which Chelsea player was known for his exceptional defensive skills and was often called 'The Captain'?",
//         options: ["John Terry", "Ricardo Carvalho", "Paulo Ferreira", "William Gallas"],
//         answer: "John Terry"
//     },

//     {
//         question: "Which Chelsea player scored a crucial goal in the 2009-2010 Premier League title win?",
//         options: ["Didier Drogba", "Frank Lampard", "Nicolas Anelka", "Florent Malouda"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Who was Chelsea's manager during their 2005 Premier League title win?",
//         options: ["José Mourinho", "Carlo Ancelotti", "Guus Hiddink", "Claudio Ranieri"],
//         answer: "José Mourinho"
//     },

//     {
//         question: "Which Chelsea player won the Golden Boot in the Premier League in 2015-2016?",
//         options: ["Didier Drogba", "Diego Costa", "Eden Hazard", "Nicolas Anelka"],
//         answer: "Diego Costa"
//     },

//     {
//         question: "Who did Chelsea sign from AC Milan in 2009?",
//         options: ["Zlatan Ibrahimovic", "Alexandre Pato", "Gennaro Gattuso", "Riccardo Montolivo"],
//         answer: "Alexandre Pato"
//     },

//     {
//         question: "Which Chelsea player scored the fastest goal in Premier League history?",
//         options: ["Didier Drogba", "Eden Hazard", "Frank Lampard", "Nicolas Anelka"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Which Chelsea player was nicknamed 'The Flying Dutchman'?",
//         options: ["Arjen Robben", "Marco van Basten", "Ruud Gullit", "Edgar Davids"],
//         answer: "Arjen Robben"
//     },

//     {
//         question: "Which Chelsea manager led the team to win the Premier League in 2009-2010?",
//         options: ["José Mourinho", "Carlo Ancelotti", "Andre Villas-Boas", "Luiz Felipe Scolari"],
//         answer: "Carlo Ancelotti"
//     },

//     {
//         question: "Which Chelsea player was known for his powerful long-range shots?",
//         options: ["Frank Lampard", "Cesc Fabregas", "Eden Hazard", "Nicolas Anelka"],
//         answer: "Frank Lampard"
//     },

//     {
//         question: "Which Chelsea player is known for his defensive skills and nickname 'The Bison'?",
//         options: ["Michael Essien", "Claude Makélélé", "Ricardo Carvalho", "John Obi Mikel"],
//         answer: "Michael Essien"
//     },

//     {
//         question: "Which Chelsea player scored in the 2012 FA Cup final against Liverpool?",
//         options: ["Didier Drogba", "Frank Lampard", "Juan Mata", "Fernando Torres"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Who was Chelsea's top scorer in the 2011-2012 season?",
//         options: ["Didier Drogba", "Frank Lampard", "Juan Mata", "Nicolas Anelka"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Which Chelsea player was known for his skillful dribbling and flair, often compared to Ronaldinho?",
//         options: ["Eden Hazard", "Arjen Robben", "Florent Malouda", "Joe Cole"],
//         answer: "Eden Hazard"
//     },

//     {
//         question: "Which Chelsea player was known for his excellent ball distribution and playmaking abilities?",
//         options: ["Cesc Fabregas", "Frank Lampard", "John Obi Mikel", "Michael Essien"],
//         answer: "Cesc Fabregas"
//     },

//     {
//         question: "Which Chelsea player had a famous goal celebration known as 'The Dance'?",
//         options: ["Didier Drogba", "Eden Hazard", "Nicolas Anelka", "Salomon Kalou"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Who was Chelsea's manager during their 2016-2017 Premier League title win?",
//         options: ["Antonio Conte", "José Mourinho", "Carlo Ancelotti", "Claudio Ranieri"],
//         answer: "Antonio Conte"
//     },

//     {
//         question: "Which Chelsea player was known for his exceptional pace and counter-attacking skills?",
//         options: ["Arjen Robben", "Eden Hazard", "Willian", "Victor Moses"],
//         answer: "Victor Moses"
//     },

//     {
//         question: "Which Chelsea player had the highest number of assists in the 2018-2019 Premier League season?",
//         options: ["Eden Hazard", "Willian", "Cesc Fabregas", "Christian Pulisic"],
//         answer: "Eden Hazard"
//     },

//     {
//         question: "Which Chelsea player was renowned for his solid performances in central defense and was nicknamed 'The Rock'?",
//         options: ["Ricardo Carvalho", "John Terry", "Paulo Ferreira", "William Gallas"],
//         answer: "John Terry"
//     },

//     {
//         question: "Which Chelsea player made the most appearances for the club?",
//         options: ["John Terry", "Frank Lampard", "Petr Čech", "Gianfranco Zola"],
//         answer: "Frank Lampard"
//     },

//     {
//         question: "Who did Chelsea sign from Leicester City in 2016?",
//         options: ["N'Golo Kante", "Wilfred Ndidi", "Riyad Mahrez", "Jamie Vardy"],
//         answer: "N'Golo Kante"
//     },

//     {
//         question: "Which Chelsea player was the youngest to score a hat-trick for the club?",
//         options: ["Tammy Abraham", "Mason Mount", "Christian Pulisic", "Callum Hudson-Odoi"],
//         answer: "Callum Hudson-Odoi"
//     },

//     {
//         question: "Which Chelsea player scored the most goals in a single Premier League season?",
//         options: ["Didier Drogba", "Frank Lampard", "Diego Costa", "Eden Hazard"],
//         answer: "Diego Costa"
//     },

//     {
//         question: "Who was Chelsea's top goal scorer in the 2007-2008 season?",
//         options: ["Didier Drogba", "Frank Lampard", "Nicolas Anelka", "Andriy Shevchenko"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Which Chelsea player was known for his trademark free-kicks?",
//         options: ["Frank Lampard", "Joe Cole", "Arjen Robben", "Nicolas Anelka"],
//         answer: "Frank Lampard"
//     },

//     {
//         question: "Which Chelsea player was named the UEFA Champions League Player of the Season in 2012?",
//         options: ["Didier Drogba", "Frank Lampard", "Juan Mata", "Petr Čech"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Which Chelsea player scored a memorable solo goal against Arsenal in 2005?",
//         options: ["Eden Hazard", "Didier Drogba", "Arjen Robben", "Frank Lampard"],
//         answer: "Arjen Robben"
//     },

//     {
//         question: "Who was Chelsea's top goal scorer in the 2019-2020 season?",
//         options: ["Tammy Abraham", "Christian Pulisic", "Mason Mount", "Olivier Giroud"],
//         answer: "Tammy Abraham"
//     },

//     {
//         question: "Which Chelsea player was known for his defensive capabilities and leadership skills, often playing as a right-back?",
//         options: ["Paulo Ferreira", "Ricardo Carvalho", "John Terry", "Ashley Cole"],
//         answer: "Paulo Ferreira"
//     },

//     {
//         question: "Which Chelsea player won the FA Youth Cup in 2015 and later became a key player for the first team?",
//         options: ["Mason Mount", "Tammy Abraham", "Callum Hudson-Odoi", "Reece James"],
//         answer: "Mason Mount"
//     },

//     {
//         question: "Which Chelsea player was known for his long throw-ins and solid defensive play?",
//         options: ["John Terry", "Ricardo Carvalho", "Paulo Ferreira", "Geremi"],
//         answer: "Geremi"
//     },

//     {
//         question: "Which Chelsea player scored a stunning goal in the 2013-2014 Premier League season against Tottenham Hotspur?",
//         options: ["Eden Hazard", "Willian", "Frank Lampard", "Nicolas Anelka"],
//         answer: "Eden Hazard"
//     },

//     {
//         question: "Which Chelsea player was the top scorer in the 2017-2018 season?",
//         options: ["Eden Hazard", "Alvaro Morata", "Olivier Giroud", "Willian"],
//         answer: "Eden Hazard"
//     },

//     {
//         question: "Which Chelsea player had a successful loan spell at Borussia Dortmund before returning to Stamford Bridge?",
//         options: ["Christian Pulisic", "Michy Batshuayi", "Tammy Abraham", "Jorginho"],
//         answer: "Christian Pulisic"
//     },

//     {
//         question: "Which Chelsea player was known for his role as a box-to-box midfielder and his ability to score goals from distance?",
//         options: ["Frank Lampard", "N'Golo Kante", "Cesc Fabregas", "Michael Essien"],
//         answer: "Frank Lampard"
//     },

//     {
//         question: "Which Chelsea player was named the club's Player of the Year for the 2018-2019 season?",
//         options: ["Eden Hazard", "Christian Pulisic", "Willian", "N'Golo Kante"],
//         answer: "Eden Hazard"
//     },

//     {
//         question: "Who was Chelsea's manager during their 2003-2004 Premier League season?",
//         options: ["José Mourinho", "Claudio Ranieri", "Guus Hiddink", "Carlo Ancelotti"],
//         answer: "Claudio Ranieri"
//     },

//     {
//         question: "Which Chelsea player was known for his incredible passing range and vision?",
//         options: ["Cesc Fabregas", "Frank Lampard", "N'Golo Kante", "Juan Mata"],
//         answer: "Cesc Fabregas"
//     },

//     {
//         question: "Which Chelsea player scored a decisive goal in the 2009 FA Cup final against Everton?",
//         options: ["Didier Drogba", "Frank Lampard", "Nicolas Anelka", "Michael Ballack"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Which Chelsea player was known for his exceptional ability to score from headers?",
//         options: ["Didier Drogba", "John Terry", "Frank Lampard", "Nicolas Anelka"],
//         answer: "Didier Drogba"
//     },

//     {
//         question: "Who was Chelsea's top goal scorer in the 2020-2021 Premier League season?",
//         options: ["Timo Werner", "Christian Pulisic", "Mason Mount", "Kai Havertz"],
//         answer: "Timo Werner"
//     }
// ];

//     function displayQuestion() {
//         const question = chelseaQuiz[currentQuestionIndex];
//         questionElement.textContent = question.question;
//         optionsButtons.forEach((button, index) => {
//             button.textContent = question.options[index];
//             button.onclick = () => checkAnswer(question.options[index]);
//         });
//     }

//     function checkAnswer(selectedOption) {
//         const correctAnswer = chelseaQuiz[currentQuestionIndex].answer;
//         if (selectedOption === correctAnswer) {
//             scoreElement.textContent = "Correct😁";
//         } else {
//             scoreElement.textContent = "Wrong 😞";
//         }
//         displayQuestion();

//         currentQuestionIndex++;
//         if (currentQuestionIndex < questions.length) {
//             displayQuestion();
//         } else {
//             scoreElement.textContent = "Quiz Over🎉";
//         }
//     }

//     displayQuestion();
// });



const chelseaQuiz = [
    {
        question: "Who is Chelsea's all-time top scorer?",
        options: ["Frank Lampard", "Didier Drogba", "Gianfranco Zola", "Joe Cole"],
        answer: "Frank Lampard"
    },

    {
        question: "In which year was Chelsea FC founded?",
        options: ["1905", "1920", "1950", "1965"],
        answer: "1905"
    },

    {
        question: "Which stadium is Chelsea's home ground?",
        options: ["Old Trafford", "Anfield", "Stamford Bridge", "Etihad Stadium"],
        answer: "Stamford Bridge"
    },

    {
        question: "Who won the Premier League with Chelsea in the 2014-2015 season?",
        options: ["Jose Mourinho", "Carlo Ancelotti", "Antonio Conte", "Guus Hiddink"],
        answer: "Jose Mourinho"
    },

    {
        question: "Which player did Chelsea sign from Arsenal in 2004?",
        options: ["Ashley Cole", "Robert Pires", "Thierry Henry", "Patrick Vieira"],
        answer: "Ashley Cole"
    },

    {
        question: "What was Chelsea's highest league finish in the 20th century?",
        options: ["2nd", "3rd", "4th", "5th"],
        answer: "2nd"
    },

    {
        question: "Who was Chelsea's manager when they won their first Champions League title?",
        options: ["Rafael Benitez", "Andre Villas-Boas", "Carlo Ancelotti", "Roberto Di Matteo"],
        answer: "Roberto Di Matteo"
    },

    {
        question: "Which Chelsea player won the PFA Player of the Year award in 2015?",
        options: ["Eden Hazard", "N'Golo Kante", "Cesc Fabregas", "Willian"],
        answer: "Eden Hazard"
    },

    {
        question: "Who is Chelsea's record signing?",
        options: ["Kai Havertz", "Enzo Fernandez", "Romelu Lukaku", "Gonzalo Higuain"],
        answer: "Enzo Fernandez"
    },

    {
        question: "Which Chelsea player scored the winning goal in the 2012 Champions League final?",
        options: ["Didier Drogba", "Frank Lampard", "Juan Mata", "Fernando Torres"],
        answer: "Didier Drogba"
    },

    {
        question: "Who was Chelsea's captain during their 2014-2015 Premier League title win?",
        options: ["John Terry", "Frank Lampard", "Petr Čech", "Gianfranco Zola"],
        answer: "John Terry"
    },

    {
        question: "Which player did Chelsea sign from Lille in 2012?",
        options: ["Eden Hazard", "Nicolas Anelka", "Florent Malouda", "Salomon Kalou"],
        answer: "Eden Hazard"
    },

    {
        question: "What color is Chelsea's away kit typically?",
        options: ["Yellow", "Green", "Black", "Blue"],
        answer: "Yellow"
    },

    {
        question: "Which Chelsea manager won the FA Cup in 2007?",
        options: ["José Mourinho", "Avram Grant", "Luiz Felipe Scolari", "Carlo Ancelotti"],
        answer: "José Mourinho"
    },

    {
        question: "Which Chelsea player was known as 'The Drogba'?",
        options: ["Didier Drogba", "Michael Essien", "Nicolas Anelka", "Frank Lampard"],
        answer: "Didier Drogba"
    },

    {
        question: "Who did Chelsea defeat in the 2013 Europa League final?",
        options: ["Benfica", "Valencia", "Athletic Bilbao", "Napoli"],
        answer: "Benfica"
    },

    {
        question: "Which Chelsea player scored the most goals in the 2019-2020 Premier League season?",
        options: ["Tammy Abraham", "Mason Mount", "Christian Pulisic", "Olivier Giroud"],
        answer: "Tammy Abraham"
    },

    {
        question: "Which Chelsea player was known for his 'Panenka' penalty against Bayern Munich in 2012?",
        options: ["Frank Lampard", "Didier Drogba", "Juan Mata", "Nicolas Anelka"],
        answer: "Nicolas Anelka"
    },

    {
        question: "Which Chelsea player was the top scorer in the 2006-2007 Premier League season?",
        options: ["Didier Drogba", "Frank Lampard", "Andriy Shevchenko", "Arjen Robben"],
        answer: "Didier Drogba"
    },

    {
        question: "Who was Chelsea's manager before Maurizio Sarri?",
        options: ["Antonio Conte", "José Mourinho", "Carlo Ancelotti", "Guus Hiddink"],
        answer: "Antonio Conte"
    },

    {
        question: "Which Chelsea player scored a hat-trick in the 2009 FA Cup final?",
        options: ["Didier Drogba", "Frank Lampard", "Nicolas Anelka", "Salomon Kalou"],
        answer: "Didier Drogba"
    },

    {
        question: "Who did Chelsea defeat in the 2018 FA Cup final?",
        options: ["Manchester United", "Arsenal", "Liverpool", "Tottenham Hotspur"],
        answer: "Manchester United"
    },

    {
        question: "Which player did Chelsea sign from AS Roma in 2018?",
        options: ["Jorginho", "Emerson Palmieri", "N'Golo Kante", "Mateo Kovacic"],
        answer: "Emerson Palmieri"
    },

    {
        question: "Who was Chelsea's manager during the 2008-2009 season?",
        options: ["Luiz Felipe Scolari", "José Mourinho", "Carlo Ancelotti", "Avram Grant"],
        answer: "Luiz Felipe Scolari"
    },

    {
        question: "Which Chelsea player scored in the 2011-2012 Premier League season opener against Stoke City?",
        options: ["Didier Drogba", "Juan Mata", "Frank Lampard", "Nicolas Anelka"],
        answer: "Didier Drogba"
    },

    {
        question: "Which Chelsea player was known for his exceptional dribbling skills and was often called 'The Wizard'?",
        options: ["Eden Hazard", "Arjen Robben", "Willian", "Florent Malouda"],
        answer: "Eden Hazard"
    },

    {
        question: "Who was Chelsea's goalkeeper before Kepa Arrizabalaga?",
        options: ["Petr Čech", "Thibaut Courtois", "Asmir Begovic", "Cesar Azpilicueta"],
        answer: "Thibaut Courtois"
    },

    {
        question: "Which Chelsea player was named Premier League Player of the Season in 2016-2017?",
        options: ["N'Golo Kante", "Eden Hazard", "Diego Costa", "Cesc Fabregas"],
        answer: "N'Golo Kante"
    },

    {
        question: "Which club did Chelsea defeat in the 2008 Champions League final?",
        options: ["Manchester United", "Barcelona", "Liverpool", "Bayern Munich"],
        answer: "Manchester United"
    },

    {
        question: "Who was Chelsea's top scorer in the 2010-2011 Premier League season?",
        options: ["Didier Drogba", "Nicolas Anelka", "Frank Lampard", "Salomon Kalou"],
        answer: "Didier Drogba"
    },

    {
        question: "Which Chelsea player scored the winning goal in the 1997 FA Cup final?",
        options: ["Gianfranco Zola", "Frank Lampard", "Dennis Wise", "Mark Hughes"],
        answer: "Dennis Wise"
    },

    {
        question: "Which player did Chelsea sign from Benfica in 2020?",
        options: ["Enzo Fernandez", "Joao Felix", "Ruben Dias", "Bernardo Silva"],
        answer: "Enzo Fernandez"
    },

    {
        question: "Which Chelsea player was known for his exceptional defensive skills and was often called 'The Captain'?",
        options: ["John Terry", "Ricardo Carvalho", "Paulo Ferreira", "William Gallas"],
        answer: "John Terry"
    },

    {
        question: "Which Chelsea player scored a crucial goal in the 2009-2010 Premier League title win?",
        options: ["Didier Drogba", "Frank Lampard", "Nicolas Anelka", "Florent Malouda"],
        answer: "Didier Drogba"
    },

    {
        question: "Who was Chelsea's manager during their 2005 Premier League title win?",
        options: ["José Mourinho", "Carlo Ancelotti", "Guus Hiddink", "Claudio Ranieri"],
        answer: "José Mourinho"
    },

    {
        question: "Which Chelsea player won the Golden Boot in the Premier League in 2015-2016?",
        options: ["Didier Drogba", "Diego Costa", "Eden Hazard", "Nicolas Anelka"],
        answer: "Diego Costa"
    },

    {
        question: "Who did Chelsea sign from AC Milan in 2009?",
        options: ["Zlatan Ibrahimovic", "Alexandre Pato", "Gennaro Gattuso", "Riccardo Montolivo"],
        answer: "Alexandre Pato"
    },

    {
        question: "Which Chelsea player scored the fastest goal in Premier League history?",
        options: ["Didier Drogba", "Eden Hazard", "Frank Lampard", "Nicolas Anelka"],
        answer: "Didier Drogba"
    },

    {
        question: "Which Chelsea player was nicknamed 'The Flying Dutchman'?",
        options: ["Arjen Robben", "Marco van Basten", "Ruud Gullit", "Edgar Davids"],
        answer: "Arjen Robben"
    },

    {
        question: "Which Chelsea manager led the team to win the Premier League in 2009-2010?",
        options: ["José Mourinho", "Carlo Ancelotti", "Andre Villas-Boas", "Luiz Felipe Scolari"],
        answer: "Carlo Ancelotti"
    },

    {
        question: "Which Chelsea player was known for his powerful long-range shots?",
        options: ["Frank Lampard", "Cesc Fabregas", "Eden Hazard", "Nicolas Anelka"],
        answer: "Frank Lampard"
    },

    {
        question: "Which Chelsea player is known for his defensive skills and nickname 'The Bison'?",
        options: ["Michael Essien", "Claude Makélélé", "Ricardo Carvalho", "John Obi Mikel"],
        answer: "Michael Essien"
    },

    {
        question: "Which Chelsea player scored in the 2012 FA Cup final against Liverpool?",
        options: ["Didier Drogba", "Frank Lampard", "Juan Mata", "Fernando Torres"],
        answer: "Didier Drogba"
    },

    {
        question: "Who was Chelsea's top scorer in the 2011-2012 season?",
        options: ["Didier Drogba", "Frank Lampard", "Juan Mata", "Nicolas Anelka"],
        answer: "Didier Drogba"
    },

    {
        question: "Which Chelsea player was known for his skillful dribbling and flair, often compared to Ronaldinho?",
        options: ["Eden Hazard", "Arjen Robben", "Florent Malouda", "Joe Cole"],
        answer: "Eden Hazard"
    },

    {
        question: "Which Chelsea player was known for his excellent ball distribution and playmaking abilities?",
        options: ["Cesc Fabregas", "Frank Lampard", "John Obi Mikel", "Michael Essien"],
        answer: "Cesc Fabregas"
    },

    {
        question: "Which Chelsea player had a famous goal celebration known as 'The Dance'?",
        options: ["Didier Drogba", "Eden Hazard", "Nicolas Anelka", "Salomon Kalou"],
        answer: "Didier Drogba"
    },

    {
        question: "Who was Chelsea's manager during their 2016-2017 Premier League title win?",
        options: ["Antonio Conte", "José Mourinho", "Carlo Ancelotti", "Claudio Ranieri"],
        answer: "Antonio Conte"
    },

    {
        question: "Which Chelsea player was known for his exceptional pace and counter-attacking skills?",
        options: ["Arjen Robben", "Eden Hazard", "Willian", "Victor Moses"],
        answer: "Victor Moses"
    },

    {
        question: "Which Chelsea player had the highest number of assists in the 2018-2019 Premier League season?",
        options: ["Eden Hazard", "Willian", "Cesc Fabregas", "Christian Pulisic"],
        answer: "Eden Hazard"
    },

    {
        question: "Which Chelsea player was renowned for his solid performances in central defense and was nicknamed 'The Rock'?",
        options: ["Ricardo Carvalho", "John Terry", "Paulo Ferreira", "William Gallas"],
        answer: "John Terry"
    },

    {
        question: "Which Chelsea player made the most appearances for the club?",
        options: ["John Terry", "Frank Lampard", "Petr Čech", "Gianfranco Zola"],
        answer: "Frank Lampard"
    },

    {
        question: "Who did Chelsea sign from Leicester City in 2016?",
        options: ["N'Golo Kante", "Wilfred Ndidi", "Riyad Mahrez", "Jamie Vardy"],
        answer: "N'Golo Kante"
    },

    {
        question: "Which Chelsea player was the youngest to score a hat-trick for the club?",
        options: ["Tammy Abraham", "Mason Mount", "Christian Pulisic", "Callum Hudson-Odoi"],
        answer: "Callum Hudson-Odoi"
    },

    {
        question: "Which Chelsea player scored the most goals in a single Premier League season?",
        options: ["Didier Drogba", "Frank Lampard", "Diego Costa", "Eden Hazard"],
        answer: "Diego Costa"
    },

    {
        question: "Who was Chelsea's top goal scorer in the 2007-2008 season?",
        options: ["Didier Drogba", "Frank Lampard", "Nicolas Anelka", "Andriy Shevchenko"],
        answer: "Didier Drogba"
    },

    {
        question: "Which Chelsea player was known for his trademark free-kicks?",
        options: ["Frank Lampard", "Joe Cole", "Arjen Robben", "Nicolas Anelka"],
        answer: "Frank Lampard"
    },

    {
        question: "Which Chelsea player was named the UEFA Champions League Player of the Season in 2012?",
        options: ["Didier Drogba", "Frank Lampard", "Juan Mata", "Petr Čech"],
        answer: "Didier Drogba"
    },

    {
        question: "Which Chelsea player scored a memorable solo goal against Arsenal in 2005?",
        options: ["Eden Hazard", "Didier Drogba", "Arjen Robben", "Frank Lampard"],
        answer: "Arjen Robben"
    },

    {
        question: "Who was Chelsea's top goal scorer in the 2019-2020 season?",
        options: ["Tammy Abraham", "Christian Pulisic", "Mason Mount", "Olivier Giroud"],
        answer: "Tammy Abraham"
    },

    {
        question: "Which Chelsea player was known for his defensive capabilities and leadership skills, often playing as a right-back?",
        options: ["Paulo Ferreira", "Ricardo Carvalho", "John Terry", "Ashley Cole"],
        answer: "Paulo Ferreira"
    },

    {
        question: "Which Chelsea player won the FA Youth Cup in 2015 and later became a key player for the first team?",
        options: ["Mason Mount", "Tammy Abraham", "Callum Hudson-Odoi", "Reece James"],
        answer: "Mason Mount"
    },

    {
        question: "Which Chelsea player was known for his long throw-ins and solid defensive play?",
        options: ["John Terry", "Ricardo Carvalho", "Paulo Ferreira", "Geremi"],
        answer: "Geremi"
    },

    {
        question: "Which Chelsea player scored a stunning goal in the 2013-2014 Premier League season against Tottenham Hotspur?",
        options: ["Eden Hazard", "Willian", "Frank Lampard", "Nicolas Anelka"],
        answer: "Eden Hazard"
    },

    {
        question: "Which Chelsea player was the top scorer in the 2017-2018 season?",
        options: ["Eden Hazard", "Alvaro Morata", "Olivier Giroud", "Willian"],
        answer: "Eden Hazard"
    },

    {
        question: "Which Chelsea player had a successful loan spell at Borussia Dortmund before returning to Stamford Bridge?",
        options: ["Christian Pulisic", "Michy Batshuayi", "Tammy Abraham", "Jorginho"],
        answer: "Christian Pulisic"
    },

    {
        question: "Which Chelsea player was known for his role as a box-to-box midfielder and his ability to score goals from distance?",
        options: ["Frank Lampard", "N'Golo Kante", "Cesc Fabregas", "Michael Essien"],
        answer: "Frank Lampard"
    },

    {
        question: "Which Chelsea player was named the club's Player of the Year for the 2018-2019 season?",
        options: ["Eden Hazard", "Christian Pulisic", "Willian", "N'Golo Kante"],
        answer: "Eden Hazard"
    },

    {
        question: "Who was Chelsea's manager during their 2003-2004 Premier League season?",
        options: ["José Mourinho", "Claudio Ranieri", "Guus Hiddink", "Carlo Ancelotti"],
        answer: "Claudio Ranieri"
    },

    {
        question: "Which Chelsea player was known for his incredible passing range and vision?",
        options: ["Cesc Fabregas", "Frank Lampard", "N'Golo Kante", "Juan Mata"],
        answer: "Cesc Fabregas"
    },

    {
        question: "Which Chelsea player scored a decisive goal in the 2009 FA Cup final against Everton?",
        options: ["Didier Drogba", "Frank Lampard", "Nicolas Anelka", "Michael Ballack"],
        answer: "Didier Drogba"
    },

    {
        question: "Which Chelsea player was known for his exceptional ability to score from headers?",
        options: ["Didier Drogba", "John Terry", "Frank Lampard", "Nicolas Anelka"],
        answer: "Didier Drogba"
    },

    {
        question: "Who was Chelsea's top goal scorer in the 2020-2021 Premier League season?",
        options: ["Timo Werner", "Christian Pulisic", "Mason Mount", "Kai Havertz"],
        answer: "Timo Werner"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const currentQuestion = chelseaQuiz[currentQuestionIndex];
    document.querySelector('.question-section p').textContent = currentQuestion.question;

    const options = document.querySelectorAll('.answer-section .option');
    options.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
        option.onclick = () => checkAnswer(currentQuestion.options[index]);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = chelseaQuiz[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
        document.querySelector('.final-answer').textContent = 'Correct! 😁';
    } else {
        document.querySelector('.final-answer').textContent = 'Wrong! 😞';
    }

    document.querySelector('.scores').textContent = `Score: ${score}`;

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < chelseaQuiz.length) {
            displayQuestion();
            document.querySelector('.final-answer').textContent = ''; 
        } else {
            showFinalScore(); 
        }
    }, 1000);
}

function showFinalScore() {
    document.querySelector('.quiz-game').innerHTML = `
        <h2>Quiz Complete!</h2>
        <p>Your final score is: ${score} / ${chelseaQuiz.length}</p>
    `;
}

displayQuestion();




















