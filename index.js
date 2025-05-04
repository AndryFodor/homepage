const texts = [
    "An interesting fact about me is that as a developer with 3 months of experience, I was able to work on a project at the level of Middle FullStack Developer (although there were a couple of sleepless nights and nerves)",
    "The most difficult work situation (epic fail) in my career is not fully understanding the client's requirements and the inability to convey to him that it is impossible to implement Proxy on pure React without Nginx or something similar ",
    "I wish you inspiration in your next checkings. And if my work was your last one for check - have a good rest, it's finally over!)"
]

const btn = document.getElementById('getInfoBtn')
const container = document.getElementById('infoContainer')

btn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * texts.length)
    container.textContent = texts[randomIndex]

    if (container.classList.contains('more__info__element__placeholder')) {
        container.classList.remove('more__info__element__placeholder')
    }
})
