function calculateScore(){
    let score=0;
    let q1=document.querySelector('input[name="q1"]:checked').value;
    let q2=document.querySelector('input[name="q2"]:checked').value;
    let q3=document.querySelector('input[name="q3"]:checked').value;

    if(q1 === "a"){
        score++;
    }

    if(q2 === "c"){
        score++;
    }

    if(q3 === "a"){
        score++;
    }
    alert(`you are scored ${score} out of 3
          the correct answer for question1 is Object-Oriented (a)
          the correct answer for question2 is Both A and B (c)
          the correct answer for question3 is const (a)`);

};