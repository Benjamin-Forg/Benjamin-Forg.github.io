async function play_ciyf_animation() {
  var element = document.getElementById("ciyf-sprite");
  element.classList.add("animate-ciyf");
  await sleep(6000);
  element.classList.remove("animate-ciyf");
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
