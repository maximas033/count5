// function that counts down from 5 to 0 and then gives a random dirrection either left or right 
// after counting down from 5 to 0 automatically calls countDown2 function that will count down from 10 to 0 and then give a random direction either left or right, countdown from 10 to 0 will forever repeat
// print the countdown to the console

function countDown1() {
    var count = 5;
    var interval = setInterval(function() {
        if (count == 0) {
            document.getElementById("dirrection").innerHTML = Math.random() < 0.5 ? "left" : "right";
            clearInterval(interval);
            countDown2();
            setTimeout(function() {
                document.getElementById("dirrection").innerHTML = "";
            }
            , 1000);
        }
        document.getElementById("num").innerHTML = count;
        count--;
    }, 1000);
}

function countDown2() {
    var count = 10;
    var interval = setInterval(function() {
        if (count == 0) {
            // print random direction either left or right to the dirrection div
            document.getElementById("dirrection").innerHTML = Math.random() < 0.5 ? "left" : "right";
            clearInterval(interval);
            countDown2();
            // clear the dirrection div after 1 seconds
            setTimeout(function() {
                document.getElementById("dirrection").innerHTML = "";
            }
            , 1000);
        }
        document.getElementById("num").innerHTML = count;
        count--;
    }, 1000);
}













