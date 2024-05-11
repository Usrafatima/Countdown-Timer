#!/usr/bin/env node
import { differenceInSeconds } from "date-fns";
function* countdownTimer(seconds) {
    while (seconds > 0) {
        yield seconds;
        seconds--;
    }
}
let timer = countdownTimer(10);
function displaycountdown() {
    let result = timer.next();
    if (!result.done) {
        const now = new Date();
        const countdownTime = new Date(now.getTime() + (result.value * 1000));
        const remainingSeconds = differenceInSeconds(countdownTime, now);
        console.log(`Remaining Seconds : ${remainingSeconds}`);
        setTimeout(displaycountdown, 1000);
    }
    else {
        console.log("Countdown Complete");
    }
}
displaycountdown();
