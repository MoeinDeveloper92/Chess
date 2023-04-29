const gameArea = document.querySelector(".gameArea")
const score = elMaker('div', gameArea, 'score', "SCORE")
const output = elMaker('div', gameArea, 'output', '')
// we want to deposit the game board in the output
const game = { x: 5, y: 5 }
createBoard()










function createBoard() {
    const total = game.x * game.y
    for (let i = 0; i < total; i++) {
        const temp = elMaker('div', output, 'box', `${i + 1}`)
        if (i % 2 === 0) {
            temp.style.backgroundColor = "red"
        } else {
            temp.style.backgroundColor = "black"
            temp.style.color="white"
        }
    }
    output.style.setProperty(`grid-template-columns`, `repeat(${game.x},1fr)`)
}






function elMaker(elType, elParent, elClass, html) {
    const ele = document.createElement(elType)
    elParent.append(ele)
    ele.classList.add(elClass)
    ele.innerHTML = html
    return ele
}