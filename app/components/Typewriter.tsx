"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export const Typewriter = ({
  text,
  typingSpeed = 150,
  deletingSpeed = 100,
  pauseDuration = 2000,
}: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < text.length) {
          setDisplayedText(text.substring(0, displayedText.length + 1));
        } else {
          // Finished typing, wait before deleting
          timer = setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(text.substring(0, displayedText.length - 1));
        } else {
          // Finished deleting, start typing again
          setIsDeleting(false);
        }
      }
    };

    timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, text, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span>
      {displayedText}
      <span className={`${cursorVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-100 ml-1`}>|</span>
    </span>
  );
};
