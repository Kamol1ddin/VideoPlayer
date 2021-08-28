window.onload = function(){
let video = document.querySelector('.video')
let videoPlayer = document.querySelector('.video_player')
let playBtn = document.querySelector('#play')
let videoList = document.querySelector('.video_list')
let progressContainer = document.querySelector('.progress_container')
let progress = document.querySelector('.progress')

function updateProgress(e){
    const { duration, currentTime } = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
}

function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = video.duration
    video.currentTime = (clickX / width) * duration
}

let videoLink = ['Konfuz','kostromin','SLAVA','SubUrban']

function play(){
    videoPlayer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')
    video.play()
}

function pause(){
    videoPlayer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    video.pause()
}

playBtn.addEventListener('click', () =>{
    let video_check = videoPlayer.classList.contains('play')
    if(video_check){
        pause()
    }else{
        play()
    }
})
videoLink.forEach((photo, index) =>{
    let img = document.createElement('img')
    img.setAttribute('src', `./image/${photo}.jpg`)
    img.setAttribute('data-id', index)
    videoList.append(img)
})

videoList.querySelectorAll('img').forEach((play, index) =>{
    play.addEventListener('click', ()=>{
        video.setAttribute('poster', `/image/${videoLink[index]}.jpg`)
        video.setAttribute('src', `/video/${videoLink[index]}.mp4`)
        video.style.visibility = 'visible'
    }) 
})

progressContainer.addEventListener('click', setProgress)
video.addEventListener('timeupdate', updateProgress)

videoPlayer.addEventListener('mouseover', ()=>{
    progressContainer.style.opacity = '1'
    progress.style.opacity = '1'
    progressContainer.style.transition = 'all .6s'
})
videoPlayer.addEventListener('mouseleave', ()=>{
    progressContainer.style.opacity = '0'
    progress.style.opacity = '0'
    progressContainer.style.transition = 'all .6s'
})

}
