// playing vedio
const playBtn = document.querySelector(".toggle");
const ved = document.querySelector(".viewer");

//changing innerhtml of btn nd changing ved state
let isPlaying = false;
function chgState(e) {
  isPlaying = !isPlaying;
  playBtn.innerHTML = playBtn.innerHTML === "►" ? `&#${9724}` : "►";
  if (isPlaying) {
    ved.play();
  }
  if (!isPlaying) ved.pause();
}
playBtn.addEventListener("click", chgState);
ved.addEventListener("click", chgState);

//changing volume & playback with inp[name] using 'ved.volume==ved[inp.name]'here inp.name==volume same for playback
const rangeInps = document.querySelectorAll(".player__slider"); //takes all range inps
function volPlaybackFun(e) {
  ved[this.name] = +this.value;
}
rangeInps.forEach((inp) => inp.addEventListener("change", volPlaybackFun)); //adding eventlistener[change] for all at a tym
rangeInps.forEach((inp) => inp.addEventListener("mousemove", volPlaybackFun)); //same for mousemove

const forBackBtns = document.querySelectorAll(".player__button");
function forBackFun(e) {
  ved.currentTime += +this.dataset.skip;
  //or video.currentTime += parseFloat(this.dataset.skip);
}

forBackBtns.forEach((btn) => btn.addEventListener("click", forBackFun));

//updating yellow bar
const progress = document.querySelector(".progress__filled");
progress.style.flexBasis = 0;
function timeChange(e) {
  progress.style.flexBasis = `${(ved.currentTime / ved.duration) * 100}%`;
}
ved.addEventListener("timeupdate", timeChange);

///scrubber  movements
const progressField = document.querySelector(".progress");
function scrub(e) {
  ved.currentTime = (e.offsetX / progressField.offsetWidth) * ved.duration;
}

let mousedown = false;
progressField.addEventListener("click", scrub);
progressField.addEventListener("mousedown", (mousedown = true));
progressField.addEventListener("mousemove", mousedown && scrub(e));
progressField.addEventListener("mouseup", (mousedown = false));

// //playbackrate-fast/slow motion playing
// const inpPlayback = document.querySelector("input[name=playbackRate]");
// function playbackFun(e) {
//   ved.playbackRate = +this.value;
// }
// inpPlayback.addEventListener("change", playbackFun);

//forward-backwards
// // backwards
// // forwards
// const forWards = document.querySelector("button[data-skip='25']");
// function forFun(e) {
//   ved.currentTime += 25;
// }
// forWards.addEventListener("click", forFun);

////////////////////////////////////////////////////////////
/* Get Our Elements */
// const player = document.querySelector('.player');
// const video = player.querySelector('.viewer');
// const progress = player.querySelector('.progress');
// const progressBar = player.querySelector('.progress__filled');
// const toggle = player.querySelector('.toggle');
// const skipButtons = player.querySelectorAll('[data-skip]');
// const ranges = player.querySelectorAll('.player__slider');

// /* Build out functions */
// function togglePlay() {
//   const method = video.paused ? 'play' : 'pause';
//   video[method]();
// }

// function updateButton() {
//   const icon = this.paused ? '►' : '❚ ❚';
//   console.log(icon);
//   toggle.textContent = icon;
// }

// function skip() {
//  video.currentTime += parseFloat(this.dataset.skip);
// }

// function handleRangeUpdate() {
//   video[this.name] = this.value;
// }

// function handleProgress() {
//   const percent = (video.currentTime / video.duration) * 100;
//   progressBar.style.flexBasis = `${percent}%`;
// }

// function scrub(e) {
//   const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
//   video.currentTime = scrubTime;
// }

// /* Hook up the event listeners */
// video.addEventListener('click', togglePlay);
// video.addEventListener('play', updateButton);
// video.addEventListener('pause', updateButton);
// video.addEventListener('timeupdate', handleProgress);

// toggle.addEventListener('click', togglePlay);
// skipButtons.forEach(button => button.addEventListener('click', skip));
// ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
// ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

// let mousedown = false;
// progress.addEventListener('click', scrub);
// progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
// progress.addEventListener('mousedown', () => mousedown = true);
// progress.addEventListener('mouseup', () => mousedown = false);
