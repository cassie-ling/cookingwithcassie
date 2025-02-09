let food_buttons = document.getElementsByClassName("wobbling-button");
let dy = 0;
let direction = 0.1;
let hovering = false;


function wobble() {
    for (let button of food_buttons) {
        button.addEventListener('mouseover', () => {
            hovering = true;
        });
    
        button.addEventListener('mouseout', () => {
            hovering = false;
        });
    }
    if (!hovering) {
        dy += direction;
        for (let button of food_buttons) {
            button.style.transform = `translateY(${dy}vh)`;
        }
        if (dy >= 5 || dy <= 0) {
            direction *= -1;
        }
    }
    requestAnimationFrame(wobble);
}

// Checking if i'm hovering over a button so it stops wobbling

wobble();