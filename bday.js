const button = document.getElementById("begin-btn");
const wish = document.getElementById("the-wish");
const area = document.getElementById("animation-area");

button.addEventListener("click", function(){

    button.style.display="none";

    createFlowers();

    setTimeout(createFireworks,2000);

    setTimeout(function(){

        wish.classList.add("show");

    },3500);

});

function createFlowers(){

    for(let i=0;i<15;i++){

        let flower=document.createElement("div");

        flower.className="flower";

        flower.innerHTML="🌸";

        flower.style.left=Math.random()*window.innerWidth+"px";

        flower.style.top=Math.random()*window.innerHeight+"px";

        area.appendChild(flower);

    }

}

function createFireworks(){

    for(let i=0;i<40;i++){

        let spark=document.createElement("div");

        spark.className="firework";

        spark.style.left=(window.innerWidth/2)+(Math.random()*300-150)+"px";

        spark.style.top=(window.innerHeight/2)+(Math.random()*300-150)+"px";

        spark.style.background=
        `hsl(${Math.random()*360},100%,60%)`;

        area.appendChild(spark);

    }

}