function clkd(val)
{
            var x = val.innerText;
            // alert(x);
            if(x=="C")
            {
                document.getElementById("disp").innerHTML = ""
                document.getElementById("prevno").value = null
                document.getElementById("prevop").value = null
            }
            else if(x=="back")
            {
                document.getElementById("disp").innerHTML = document.getElementById("disp").innerHTML.slice(0,-1)
            }
            // else if(x == "+" || x == "-" || x == "/" || x == "X")
            //     {
            //         document.getElementById("prevop").value = x;
            //         var a = document.getElementById("disp").innerHTML;
            //         if(a != "+" && a != "-" && a != "/" && a != "X")
            //         {
            //             document.getElementById("prevno").value = a;
            //         }
            //         document.getElementById("disp").innerHTML=val.innerHTML;
            //     }
            else if(x == "=")
            {
                document.getElementById("disp").innerHTML = eval(document.getElementById("disp").innerHTML); 
                // var cur_no = document.getElementById("disp").innerHTML;             
                // var prev_no = document.getElementById("prevno").value;
                // if(cur_no == "+" || cur_no == "-")
                // {
                //     cur_no = 0;
                // }
                // else if(cur_no == "/" || cur_no == "X")
                // {
                //     cur_no = 1;
                // }
                // var op = document.getElementById("prevop").value;
            //     document.getElementById("disp").innerHTML = ""
            //         if(op=="+")
            //         {
            //             document.getElementById("disp").innerHTML = Number(prev_no) + Number(cur_no);  
            //         }
            //         else if(op=="-")
            //         {
            //             document.getElementById("disp").innerHTML = Number(prev_no) - Number(cur_no);  
            //         }
            //         else if(op=="/")
            //         {
            //             document.getElementById("disp").innerHTML = Number(prev_no) / Number(cur_no);  
            //         }
            //         else if(op=="X")
            //         {
            //             document.getElementById("disp").innerHTML = Number(prev_no) * Number(cur_no);  
            //         }
            //         else
            //         {
            //             document.getElementById("disp").innerHTML = cur_no;
            //         }
            //         document.getElementById("prevno").value = null
            //         document.getElementById("prevop").value = null
            }
            else
            {
                // var cur = document.getElementById("disp").innerHTML;
                // if(cur == "+" || cur == "-" || cur == "/" || cur == "X")
                // {
                //     document.getElementById("prevop").value = cur;
                //     document.getElementById("disp").innerHTML="";
                // }
                document.getElementById("disp").innerHTML = document.getElementById("disp").innerHTML+x;
            }
 }