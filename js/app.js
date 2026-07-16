let currentQuestion = 0;


// 用户答案
let answers = [];



const questionEl =
document.getElementById("question");


const optionsEl =
document.querySelector(".options");


const currentEl =
document.getElementById("current");


const prevBtn =
document.querySelector(".prev");


const nextBtn =
document.querySelector(".next");




// 初始化

renderQuestion();





// 上一题

prevBtn.onclick = ()=>{


    if(currentQuestion > 0){

        currentQuestion--;

        renderQuestion();

    }


};





// 下一题

nextBtn.onclick = ()=>{


    if(answers[currentQuestion] === undefined){

        alert("请选择一个答案");

        return;

    }



    if(currentQuestion < questions.length-1){


        currentQuestion++;

        renderQuestion();



    }else{


        saveResult();


    }


};






function renderQuestion(){


const q = questions[currentQuestion];



currentEl.textContent =
`${currentQuestion+1}/${questions.length}`;



questionEl.textContent =
q.title;



optionsEl.innerHTML="";




// 第一题隐藏上一题

prevBtn.style.visibility =
currentQuestion===0?
"hidden":
"visible";




// 最后一题

nextBtn.textContent =
currentQuestion===questions.length-1?
"查看结果 →":
"下一题 →";





q.options.forEach((item,index)=>{


let div =
document.createElement("div");


div.className="option";


div.textContent=item.text;



if(answers[currentQuestion]===index){

div.classList.add("active");

}




div.onclick=()=>{


answers[currentQuestion]=index;



document.querySelectorAll(".option")
.forEach(el=>{

el.classList.remove("active");

});



div.classList.add("active");


nextBtn.disabled=false;


};



optionsEl.appendChild(div);



});



nextBtn.disabled =
answers[currentQuestion]===undefined;


}







// 保存结果

function saveResult(){


    localStorage.setItem(
        "answers",
        JSON.stringify(answers)
    );


    window.location.href="result.html";


}