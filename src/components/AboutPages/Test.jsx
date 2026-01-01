"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect } from "react"

const EachCharacter = ({
  char,
  start,
  end,
  progress,
  duration,
  easing,
  index,
  transitionStartIndex,
}) => {
  const colorProgress = useTransform(
    progress,
    [start, end],
    ["#666666", "#FFFFFF"]
  )

  const initialColor = index < transitionStartIndex ? "#FFFFFF" : "#666666"

  return (
    <motion.span
      style={{
        color:
          index < transitionStartIndex ? initialColor : colorProgress,
      }}
      transition={{ duration, ease: easing }}
    >
      {char}
    </motion.span>
  )
}

const EachWord = ({
  word,
  progress,
  starting,
  ending,
  duration,
  easing,
  transitionStartIndex,
  currentCharacterIndex,
}) => {
  const characters = word.split("")
  const wordLength = word.length
  const amount = ending - starting
  const step = amount / wordLength

  return (
    <span>
      {characters.map((char, idx) => {
        const charStart = starting + step * idx
        const charEnd = starting + step * (idx + 1)

        return (
          <EachCharacter
            key={idx}
            char={char}
            start={charStart}
            end={charEnd}
            progress={progress}
            duration={duration}
            easing={easing}
            index={currentCharacterIndex + idx}
            transitionStartIndex={transitionStartIndex}
          />
        )
      })}
      &nbsp;
    </span>
  )
}

const TextColorLetters = ({
  text = "Hello Text",
  fontFamily = "Urbanist",
  fontSize = 48,
  lineHeight = 60,
  letterSpacing = -3,
  paragraphAlign = "center",
  duration = 0.3,
  easing = "easeInOut",
  transitionStartIndex = 22,
}) => {
  const words = text.split(" ")
  const totalWords = words.length
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "start 0.15"],
  })

  useEffect(() => {
    const style = document.createElement("style")
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=${fontFamily.replace(
        / /g,
        "+"
      )}:wght@400&display=swap');
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [fontFamily])

  let currentCharacterIndex = 0

  return (
    <p
      ref={ref}
      style={{
        fontFamily: `${fontFamily}, sans-serif`,
        fontSize: `${fontSize}px`,
        lineHeight: `${lineHeight}px`,
        letterSpacing: `${letterSpacing}px`,
        color: "#666666",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: paragraphAlign,
        margin: 0,
      }}
    >
      {words.map((word, idx) => {
        const starting = idx / totalWords
        const ending = (idx + 1) / totalWords
        const startIdx = currentCharacterIndex
        currentCharacterIndex += word.length + 1

        return (
          <EachWord
            key={idx}
            word={word}
            progress={scrollYProgress}
            starting={starting}
            ending={ending}
            duration={duration}
            easing={easing}
            transitionStartIndex={transitionStartIndex}
            currentCharacterIndex={startIdx}
          />
        )
      })}
    </p>
  )
}

export default TextColorLetters
