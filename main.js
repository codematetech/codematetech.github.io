// logic for navigation menu

(slideBar = () => {
   const nav = document.querySelector('.nav-links')
   const burger = document.querySelector('.nav-menu-toggle')
     const navA = document.querySelector('.nav-links a');
   burger.addEventListener('click', () => {
      nav.classList.toggle('nav-show')
      burger.classList.toggle('active')
      
   })
   navA.addEventListener('click',() => {
      nav.classList.add('nav-links');
   })
})();

const date = document.querySelector('.date');
date.textContent = new Date().getFullYear();

// logic for reviewers

const reviews = [
   {
      name : "Nichola Flariano",
      workPlace : "Nico bio company",
      textSaid : "I really like this company since I have experience there great and awesome Project they did for my business keep on moving forward codemate tech."
   },
      {
         name : "Natana Lomoro",
            workPlace : "CWE",
            textSaid : "What a cool upstanding technology company out there I wish I could work with you too. "
      },
         {
            name : "Ayume Francis",
               workPlace : "Eirmon shop",
               textSaid : "codemate is the awesome company out there keep moving forward. do the best in the country "
         }
   ];
   const name = document.querySelector(".name");
   const workPlace = document.querySelector(".work-place");
   const textSaid = document.querySelector(".text-said");
   const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    let said = 0;
    
   function getInfo(person){
       const clientSay = reviews[person];
       name.textContent = clientSay.name;
       workPlace.textContent = clientSay.workPlace;
       textSaid.textContent = clientSay.textSaid;
    }
    getInfo(said);
    
    next.addEventListener('click',() => {
       said++;
       if(said > reviews.length -1){
          said = 0;
       }
       getInfo(said);
    });
    
     prev.addEventListener('click', () => {
        said--;
        if (said < 0) {
           said = reviews.length - 1;
        }
        getInfo(said);
     });
     
     // Typing text
     
     let texts = ['Web Development','App Development','Digital Marketing','Logo Designing', 'windows Installation', 'We Are Programmers','The Future of Africa','Codemate Tech for All'];
     let index = 0;
     let count = 0;
     let currentText = '';
     let letter = '';
     
      (type = () => {
        if (count === texts.length){
           count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);
        document.querySelector('.typing').textContent = letter;
        if(letter.length === currentText.length){
           count++;
           index = 0;
        }
       setTimeout(type,250);
     })();




