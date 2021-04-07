function calcy(){
            let lp = document.getElementById('lp').value;
            let os = document.getElementById('os').value;
            let toc = document.getElementById('toc').value;
            let alg = document.getElementById('alg').value;
            let grade = "";
            
            let hvpe = document.getElementById('hvpe').value;
            
            let total = parseFloat(lp) +parseFloat(os) +parseFloat(toc) +parseFloat(alg) +parseFloat(hvpe) ;
            
            alert(total);
            
            let percentage = (total/500)*100;
            if(percentage<=100 && percentage>=80){
                grade = 'A';
            }
            else if(percentage<80 && percentage>=75){
                grade = 'B';
            }
            else if(percentage<75 && percentage>=60){
                grade = 'C';
            }else if(percentage<60 && percentage>=40){
                grade = 'D';
            }else{
                grade = 'F';
            }
            if(percentage>=39.5){
            document.getElementById("showData").innerHTML = `Out of 500 your total is ${total} and percentage is ${percentage}% <br> Your Grade is ${grade}. You are Pass`;
            }else{
                document.getElementById("showData").innerHTML = `Out of 500 your total is ${total} and percentage is ${percentage}% <br> Your Grade is ${grade}. You are Fail`;
            }
        }
