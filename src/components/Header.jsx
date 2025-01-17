import logoImg from '../assets/quiz-logo.png'

export default function Header () {
    return (
        <header>
            <img src={logoImg} alt="quiz logo" />
            <h1>Quiz Application</h1>
        </header>
    )
}