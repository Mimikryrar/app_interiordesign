function generatePlaceholderImage(): string {
  const canvas = document.createElement('canvas');
  canvas.width = 800;
  canvas.height = 600;
  const ctx = canvas.getContext('2d')!;

  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, 800, 600);
  gradient.addColorStop(0, '#c8bfb0');
  gradient.addColorStop(1, '#a09080');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 800, 600);

  // Subtle grid lines to suggest a room
  ctx.strokeStyle = 'rgba(255,255,255,0.15)';
  ctx.lineWidth = 1;
  for (let x = 0; x <= 800; x += 80) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 600); ctx.stroke();
  }
  for (let y = 0; y <= 600; y += 60) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(800, y); ctx.stroke();
  }

  // Center label box
  ctx.fillStyle = 'rgba(26,26,26,0.45)';
  ctx.roundRect(200, 230, 400, 140, 16);
  ctx.fill();

  // Main text
  ctx.fillStyle = '#f5f2ed';
  ctx.font = "300 28px 'Georgia', serif";
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Reimagined Space', 400, 285);

  // Sub text
  ctx.fillStyle = 'rgba(245,242,237,0.55)';
  ctx.font = "12px 'Georgia', serif";
  ctx.fillText('Demo Mode — simulated result', 400, 335);

  return canvas.toDataURL('image/png');
}

const MOCK_CHAT_RESPONSE = `🔍 **ANALYSIS:** This is a well-lit room with modern furniture and neutral tones. The layout makes good use of natural light, and the existing pieces have strong bones worth building on.

✨ **TOP 3 IMPROVEMENTS:**
1. **Add warm lighting** — Replace overhead fixtures with layered lamps (floor + table) to create a cozy, intimate atmosphere.
2. **Include plants** — A large fiddle-leaf fig or monstera in the corner adds life and softens hard edges.
3. **Layer textures** — Introduce a chunky wool throw, a jute rug, and linen cushions to add depth and warmth.

🛒 **PRODUCT PICKS:**
- IKEA KALLAX shelf ($179) — versatile storage that doubles as a room divider
- West Elm throw blanket ($49) — merino wool in a warm terracotta tone
- CB2 Arched Floor Lamp ($299) — brushed brass finish, adjustable arm

🎨 **STYLE ALTERNATIVES:**
- **Japandi** — strip back further, lean into natural wood and negative space
- **Bohemian** — layer patterns, add macrame, go warmer and more eclectic`;

export async function mockGenerateImage(): Promise<string> {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return generatePlaceholderImage();
}

export async function mockChat(): Promise<string> {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return MOCK_CHAT_RESPONSE;
}
