const hour=document.getElementById("hour");
const min=document.getElementById("minute");
const sec=document.getElementById("second");
updateTime()
function updateTime(){
    d = new Date()
    
    htime = d.getHours()
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = (30 * htime + mtime / 2)%360;
    mrotation = 6 * mtime;
    srotation = 6 * stime;
    hour.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;
}

setInterval(updateTime, 1000);