const system={
    title:document.getElementsByTagName("h1")[0],
    t1: document.getElementsByTagName("h2")[0],
    t2: document.getElementsByTagName("h2")[1],
    t3: document.getElementsByTagName("h2")[2],
    animation:{
        title_str:"CHIPSKEIN",
        str1:"BASIC()",
        str2:"COMO_BAIXAR",
        str3:"COMO_USAR",
        i:0,
        c1:0,
        c2:0,
        c3:0,
        write_title:function(){
            //title
            setInterval(function(){
                if (system.animation.i<= system.animation.title_str.length-1){
                    system.title.innerHTML += system.animation.title_str[system.animation.i];
                    system.animation.i++
                }
                else{
                    system.animation.i=0;
                    system.title.innerHTML="";
                }
            },100)
            //h2
            setInterval(function(){
                if (system.animation.c1 <= system.animation.str1.length - 1) {
                    system.t1.innerHTML += system.animation.str1[system.animation.c1];
                    system.animation.c1++
                }
                else {
                    system.animation.c1 = 0;
                    system.t1.innerHTML = "";
                }
            },120)
            setInterval(function(){
                if (system.animation.c2 <= system.animation.str2.length - 1) {
                    system.t2.innerHTML += system.animation.str2[system.animation.c2];
                    system.animation.c2++
                }
                else {
                    system.animation.c2 = 0;
                    system.t2.innerHTML = "";
                }
            },140)
            setInterval(function(){
                if (system.animation.c3 <= system.animation.str3.length - 1) {
                    system.t3.innerHTML += system.animation.str3[system.animation.c3];
                    system.animation.c3++
                }
                else {
                    system.animation.c3 = 0;
                    system.t3.innerHTML = "";
                }
            },160)

        }
    }
}
system.animation.write_title();
