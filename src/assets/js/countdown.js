function countdown() {
  var now = new Date()
  var eventDate = new Date(2020, 04, 22, 20) 
 
  var currentTime = now.getTime()
  var eventTime = eventDate.getTime()

  var remTime = eventTime - currentTime

  var s = Math.floor(remTime / 1000)
  var m = Math.floor(s / 60)
  var h = Math.floor(m / 60)
  var d = Math.floor(h / 24)

  h %= 24
  m %= 60
  s %= 60
  
  h = (h < 10) ? "0" + h : h
  m = (m < 10) ? "0" + m : m
  s = (s < 10) ? "0" + s : s


  // código comentado, mas funcional
  // document.getElementById("days").textContent = d
  // document.getElementById("days").innerText = d

  // document.getElementById("hours").textContent = h
  // document.getElementById("minutes").textContent = m
  // document.getElementById("seconds").textContent = s


  document.getElementById("days").textContent = 0
  document.getElementById("days").innerText = 0

  document.getElementById("hours").textContent = 0
  document.getElementById("minutes").textContent = 0
  document.getElementById("seconds").textContent = 0

  setTimeout(countdown, 1000)

}

countdown()