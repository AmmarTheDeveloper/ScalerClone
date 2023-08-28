const buttons = document.querySelectorAll('#faqs .main-container .container .row .col-1 span'),
      accordions = document.querySelectorAll('#faqs .main-container .container .row .col-2 .accordion'),
      questions = document.querySelectorAll('#faqs .main-container .container .row .col-2 .questions-container .question button'),
      row = document.querySelector('#faqs .main-container .container .row'),
      backBtn = document.querySelectorAll('#faqs .main-container .container .row .col-2 .heading .icon');

      function setInactive(){
        buttons.forEach(btn =>{
            btn.classList.remove('active');
        })
        accordions.forEach(accordion =>{
            accordion.classList.remove('active');
        })
      }
      buttons.forEach((btn , index) =>{
        btn.onclick = ()=>{
            setInactive();
            row.classList.remove('tab-closed');
            buttons[index].classList.add('active');
            accordions[index].classList.add('active');
        }
      })

      questions.forEach(question =>{
        question.onclick = ()=>{
            let ans = question.nextElementSibling;
            question.classList.toggle('active');
            ans.classList.toggle('active');
        }
      })

      backBtn.forEach(btn =>{
        btn.onclick = ()=>{
            row.classList.add('tab-closed');
            setInactive();
            accordions[0].classList.add('active');
            buttons[0].classList.add('active');
        }
      })