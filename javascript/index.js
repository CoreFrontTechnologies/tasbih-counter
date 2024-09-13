// var minus;
let count = 0;
let counts = 0;
let minus = document.getElementById("minus");

function display_unlimited() {
    var unlimited = document.getElementById("functioncontainer");
    unlimited.style.display = 'flex';



    var unlim = document.getElementById("zehrah")
    unlim.classList.remove("selected")


    const minus = document.getElementById("minus");

    minus.style.background = "#979ba7"

    var unlim = document.getElementById("unlimited")
    unlim.classList.add("selected");
    counts = 0
    buttons.textContent = `${counts}`


    let counters = document.getElementById("counter-btn")
    counters.style.display = "none";

    let counterss = document.getElementById("counters-btn")
    counterss.style.display = "inline";

    document.getElementById("arabic").style.display = "none"











}

function zehrah() {
    var zehrah = document.getElementById("functioncontainer")
    zehrah.style.display = 'none'

    var unlim = document.getElementById("unlimited")
    unlim.classList.remove("selected")

    var unlim = document.getElementById("zehrah")
    unlim.classList.add("selected");
    count = 0
    button.textContent = `${count}`

    document.getElementById("arabic").style.display = "flex";

    const minus = document.getElementById("minus");
    minus.style.background = "#979ba7";


    let counters = document.getElementById("counter-btn")
    counters.style.display = "inline";

    let counterss = document.getElementById("counters-btn")
    counterss.style.display = "none"








}




function counters() {
    const [counts, setCounts] = useState(0);
    setCounts(counts + 1)
}
const clickables = document.getElementById("counter-area");
const buttons = document.getElementById("counters-btn");
clickables.addEventListener('click', function () {
    counts++
    buttons.textContent = `${counts}`

    if (counts > 0) {
        minus.style.background = "linear-gradient(to right, #7b2e52, #ca7451)"

    }

    const input_value = document.getElementById("sound_input")
    const beepAt = Number(input_value.value)
    const sound = document.getElementById("sound")

    if (counts === beepAt) {
        sound.play();
    }

});





function counter() {
    const [count, setCount] = useState(0);
    setCount(count + 1)
}
const clickable = document.getElementById("counter-area")
const button = document.getElementById("counter-btn");
clickable.addEventListener('click', function () {
    count++
    button.textContent = `${count}`
    const sound = document.getElementById("sound")



    if (count === 33) {
        sound.play();
        document.getElementById("arabic").innerHTML = "الحمد لله"




    }
    else if (count === 64) {

        sound.play()
        document.getElementById("arabic").innerHTML = "سبحان الله"

    }
    else if (count === 101) {
        sound.play()
        count = 0
        document.getElementById("arabic").innerHTML = "الله اكبر"
        button.textContent = `${0}`


    }
    else if (count === 0) {

        document.getElementById("arabic").innerHTML = "الله اكبر"


    }



    if (count > 0) {
        minus.style.background = "linear-gradient(to right, #7b2e52, #ca7451)"

    }
})



const reset = document.getElementById("reset-btn");
reset.addEventListener('click', function () {
    count = 0
    button.textContent = `${count}`
    minus.style.background = "#979ba7"
    document.getElementById("arabic").innerHTML = "الله اكبر"

})


const resets = document.getElementById("reset-btn");
resets.addEventListener('click', function () {
    counts = 0
    buttons.textContent = `${counts}`
    minus.style.background = "#979ba7"


})


minus.addEventListener('click', function () {
    if (count > 0) {
        count--;
        button.textContent = `${count}`

        if (count == 0) {
            minus.style.background = "#979ba7"
        }


    }

})


minus.addEventListener('click', function () {
    if (counts > 0) {
        counts--;
        buttons.textContent = `${counts}`

        if (counts == 0) {
            minus.style.background = "#979ba7"
        }


    }

})

