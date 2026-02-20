import { useEffect, useRef } from 'react';

/**
 * Smooth matrix code rain.
 * When `fixed` prop is true → covers the entire page as a fixed background.
 * When false (default) → fills its parent (absolute positioning).
 */
export default function MatrixCanvas({ fixed = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const FONT_SIZE = 14;
    // Characters to rain down
    const CHARS =
      'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン' +
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789</>{}[]|';

    let cols;
    let columns = []; // each: { y, speed, char, opacity }
    let animId;

    const randomChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

    const buildColumns = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      cols = Math.floor(canvas.width / FONT_SIZE);

      // Fill the canvas black on resize so old pixels disappear
      ctx.fillStyle = '#080808';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      columns = Array.from({ length: cols }, () => ({
        y:       Math.random() * -canvas.height,  // start above viewport (staggered)
        speed:   0.4 + Math.random() * 1.2,       // each col has its own pace
        char:    randomChar(),
        opacity: 0.6 + Math.random() * 0.4,
      }));
    };

    buildColumns();

    const handleResize = () => buildColumns();
    window.addEventListener('resize', handleResize);

    const draw = () => {
      // Very thin semi-transparent overlay — creates long soft trails
      ctx.fillStyle = 'rgba(8, 8, 8, 0.055)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      columns.forEach((col, i) => {
        const x = i * FONT_SIZE;
        const yPx = col.y * FONT_SIZE;

        // Randomly swap the character occasionally for a flickering effect
        if (Math.random() < 0.018) col.char = randomChar();

        // Head — brightest
        ctx.font = `bold ${FONT_SIZE}px "JetBrains Mono", monospace`;
        ctx.fillStyle = `rgba(220, 255, 80, ${col.opacity})`;
        ctx.fillText(col.char, x, yPx);

        // One step behind — mid brightness glow
        ctx.font = `${FONT_SIZE}px "JetBrains Mono", monospace`;
        ctx.fillStyle = 'rgba(200, 245, 66, 0.45)';
        ctx.fillText(randomChar(), x, yPx - FONT_SIZE);

        // Two steps behind — dimmer
        ctx.fillStyle = 'rgba(200, 245, 66, 0.18)';
        ctx.fillText(randomChar(), x, yPx - FONT_SIZE * 2);

        // Advance by fractional step (smooth)
        col.y += col.speed;

        // Reset column when it scrolls past the bottom
        if (yPx > canvas.height + FONT_SIZE * 4 && Math.random() > 0.97) {
          col.y     = -Math.random() * (canvas.height / FONT_SIZE) * 0.5;
          col.speed = 0.4 + Math.random() * 1.2;
          col.opacity = 0.6 + Math.random() * 0.4;
        }
      });

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position:      fixed ? 'fixed' : 'absolute',
        inset:         0,
        width:         '100%',
        height:        '100%',
        opacity:       fixed ? 0.18 : 0.30,
        pointerEvents: 'none',
        zIndex:        fixed ? -1 : 0,
      }}
    />
  );
}
