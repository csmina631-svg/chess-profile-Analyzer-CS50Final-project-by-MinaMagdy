const form = document.getElementById('chess-form');
const resultBox = document.getElementById('result-box');
const resetBtn = document.getElementById('reset-btn');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let elo = document.getElementById('elo').value;


    if (elo < 0 || elo > 4000) {
        alert("Please enter a valid ELO rating (cannot be negative or unrealistic)!");
        return;
    }

    let name = document.getElementById('player-name').value;
    let white = document.getElementById('white-opening').value;
    let black = document.getElementById('black-opening').value;

    let stratScore = 0;
    
    let q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === 'correct') { stratScore++; }

    let q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === 'correct') { stratScore++; }

    let q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === 'correct') { stratScore++; }

    let q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === 'correct') { stratScore++; }

    let q5 = document.querySelector('input[name="q5"]:checked');
    if (q5 && q5.value === 'correct') { stratScore++; }

    let q6 = document.querySelector('input[name="q6"]:checked');
    if (q6 && q6.value === 'correct') { stratScore++; }

    let q7 = document.querySelector('input[name="q7"]:checked');
    if (q7 && q7.value === 'correct') { stratScore++; }

    let q8 = document.querySelector('input[name="q8"]:checked');
    if (q8 && q8.value === 'correct') { stratScore++; }

    let q9 = document.querySelector('input[name="q9"]:checked');
    if (q9 && q9.value === 'correct') { stratScore++; }

    let q10 = document.querySelector('input[name="q10"]:checked');
    if (q10 && q10.value === 'correct') { stratScore++; }

    let ans1 = document.getElementById('p1').value.trim();
    let ans2 = document.getElementById('p2').value.trim();
    let ans3 = document.getElementById('p3').value.trim();
    let ans4 = document.getElementById('p4').value.trim();
    let ans5 = document.getElementById('p5').value.trim();

    let puzzleScore = 0;
    if (ans1 === 'Re8') { puzzleScore++; }
    if (ans2 === 'Rd7') { puzzleScore++; }
    if (ans3 === 'Qd3') { puzzleScore++; }
    if (ans4 === 'Qe4') { puzzleScore++; }
    if (ans5 === 'Kc4') { puzzleScore++; }

    let advice = "";

    if (puzzleScore < 3 && stratScore < 5) {
        advice = "Focus heavily on tactical pattern recognition and foundational principles.";
    } else if (puzzleScore >= 4 && stratScore >= 7) {
        advice = "Study master-level games, deep positional structures, and complex endgame theory.";
    } else {
        advice = "Work on consistent game review habits and eliminate time-trouble mistakes.";
    }

    document.getElementById('res-name').textContent = name;
    document.getElementById('res-elo').textContent = elo;
    document.getElementById('res-white').textContent = white;
    document.getElementById('res-black').textContent = black;
    document.getElementById('res-strat-score').textContent = stratScore;
    document.getElementById('res-score').textContent = puzzleScore;
    document.getElementById('res-advice').textContent = advice;

    form.style.display = 'none';
    resultBox.style.display = 'block';
});

resetBtn.addEventListener('click', function() {
    form.reset();
    form.style.display = 'block';
    resultBox.style.display = 'none';
});