import { useState, useEffect } from 'react';

/**
 * Returns a string that cycles through `phrases` with a typewriter
 * effect — types out, pauses, then erases before moving to the next.
 *
 * @param {string[]} phrases
 * @param {{ typeSpeed, deleteSpeed, pauseMs }} options
 */
export function useTypewriter(phrases, { typeSpeed = 65, deleteSpeed = 38, pauseMs = 1800 } = {}) {
  const [display, setDisplay] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];

    if (!deleting && charIdx < current.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), typeSpeed);
      return () => clearTimeout(t);
    }

    if (!deleting && charIdx === current.length) {
      const t = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(t);
    }

    if (deleting && charIdx > 0) {
      const t = setTimeout(() => setCharIdx((c) => c - 1), deleteSpeed);
      return () => clearTimeout(t);
    }

    if (deleting && charIdx === 0) {
      setDeleting(false);
      setPhraseIdx((p) => (p + 1) % phrases.length);
    }
  }, [charIdx, deleting, phraseIdx, phrases, typeSpeed, deleteSpeed, pauseMs]);

  useEffect(() => {
    setDisplay(phrases[phraseIdx].slice(0, charIdx));
  }, [charIdx, phraseIdx, phrases]);

  return display;
}
