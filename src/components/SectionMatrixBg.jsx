import { useEffect, useRef } from 'react';

/**
 * Blurred Matrix code rain — designed specifically for section backgrounds.
 * Denser columns, vivid neon greens, CSS blur applied directly so the
 * foreground content stays sharp and readable.
 *
 * Props:
 *   blurPx   — blur radius in px (default 3)
 *   opacity  — canvas opacity (default 0.35)
 */
export default function SectionMatrixBg({ blurPx = 3, opacity = 0.35 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const FONT_SIZE = 13;
    const CHARS =
      'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン' +
      '01アBCDEFGHI{}()<>=+*#&@!?/\\|';

    let cols, columns, animId;

    const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const initColumns = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      cols = Math.floor(canvas.width / FONT_SIZE);

      // Deep black start
      ctx.fillStyle = 'rgba(0,0,0,0)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      columns = Array.from({ length: cols }, () => ({
        y:      -(Math.random() * (canvas.height / FONT_SIZE)),
        speed:  0.35 + Math.random() * 1.0,
        len:    8 + Math.floor(Math.random() * 18), // trail length
        chars:  Array.from({ length: 30 }, () => rand(CHARS.split(''))),
        bright: 0.7 + Math.random() * 0.3,
      }));
    };

    initColumns();
    const onResize = () => initColumns();
    window.addEventListener('resize', onResize);

    const draw = () => {
      // Very gentle fade — creates long glowing tails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.048)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      columns.forEach((col, i) => {
        const x = i * FONT_SIZE;

        // Draw trail from col.y backwards
        for (let t = 0; t < col.len; t++) {
          const yPx = (col.y - t) * FONT_SIZE;
          if (yPx < 0 || yPx > canvas.height) continue;

          const ch = col.chars[(Math.floor(col.y) + t) % col.chars.length];

          if (t === 0) {
            // Head — bright white-green flash
            ctx.font        = `bold ${FONT_SIZE}px "JetBrains Mono", monospace`;
            ctx.fillStyle   = `rgba(220, 255, 150, ${col.bright})`;
          } else if (t < 3) {
            // Near head — vivid neon green
            ctx.font        = `${FONT_SIZE}px "JetBrains Mono", monospace`;
            const a = col.bright * (1 - t / col.len) * 0.9;
            ctx.fillStyle   = `rgba(57, 255, 20, ${a})`;
          } else {
            // Tail — deep fading green
            ctx.font        = `${FONT_SIZE}px "JetBrains Mono", monospace`;
            const a = col.bright * (1 - t / col.len) * 0.55;
            ctx.fillStyle   = `rgba(0, 180, 40, ${a})`;
          }

          ctx.fillText(ch, x, yPx);
        }

        // Occasionally mutate a character for flickering effect
        if (Math.random() < 0.015) {
          col.chars[Math.floor(Math.random() * col.chars.length)] = rand(CHARS.split(''));
        }

        col.y += col.speed;

        // Reset once tail has fully scrolled off screen
        if ((col.y - col.len) * FONT_SIZE > canvas.height) {
          col.y     = -(Math.random() * 20);
          col.speed = 0.35 + Math.random() * 1.0;
          col.len   = 8 + Math.floor(Math.random() * 18);
          col.bright= 0.7 + Math.random() * 0.3;
        }
      });

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position:      'absolute',
        inset:         0,
        width:         '100%',
        height:        '100%',
        opacity,
        filter:        `blur(${blurPx}px)`,
        pointerEvents: 'none',
        zIndex:        0,
        display:       'block',
      }}
    />
  );
}
