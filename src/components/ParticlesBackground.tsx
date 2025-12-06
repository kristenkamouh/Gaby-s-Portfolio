import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  type: "dollar" | "dot" | "globe" | "chart" | "briefcase";
  opacity: number;
}

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create particles
    const particles: Particle[] = [];
    const particleCount = 50;
    const types: Particle["type"][] = ["dollar", "dot", "globe", "chart", "briefcase"];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 20 + 10,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        type: types[Math.floor(Math.random() * types.length)],
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    // Draw functions for different particle types
    const drawDollar = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, opacity: number) => {
      ctx.font = `${size}px Arial`;
      ctx.fillStyle = `rgba(16, 185, 129, ${opacity})`;
      ctx.fillText("$", x, y);
    };

    const drawDot = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, opacity: number) => {
      ctx.beginPath();
      ctx.arc(x, y, size / 4, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(16, 185, 129, ${opacity})`;
      ctx.fill();
    };

    const drawGlobe = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, opacity: number) => {
      ctx.beginPath();
      ctx.arc(x, y, size / 2, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(16, 185, 129, ${opacity})`;
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Horizontal line
      ctx.beginPath();
      ctx.moveTo(x - size / 2, y);
      ctx.lineTo(x + size / 2, y);
      ctx.stroke();
      
      // Vertical line
      ctx.beginPath();
      ctx.ellipse(x, y, size / 4, size / 2, 0, 0, Math.PI * 2);
      ctx.stroke();
    };

    const drawChart = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, opacity: number) => {
      ctx.strokeStyle = `rgba(16, 185, 129, ${opacity})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + size / 3, y - size / 4);
      ctx.lineTo(x + size / 1.5, y - size / 6);
      ctx.lineTo(x + size, y - size / 2);
      ctx.stroke();
    };

    const drawBriefcase = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, opacity: number) => {
      ctx.strokeStyle = `rgba(16, 185, 129, ${opacity})`;
      ctx.lineWidth = 1.5;
      ctx.strokeRect(x, y, size, size * 0.7);
      ctx.strokeRect(x + size * 0.3, y - size * 0.2, size * 0.4, size * 0.2);
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;

        // Draw particle based on type
        switch (particle.type) {
          case "dollar":
            drawDollar(ctx, particle.x, particle.y, particle.size, particle.opacity);
            break;
          case "dot":
            drawDot(ctx, particle.x, particle.y, particle.size, particle.opacity);
            break;
          case "globe":
            drawGlobe(ctx, particle.x, particle.y, particle.size, particle.opacity);
            break;
          case "chart":
            drawChart(ctx, particle.x, particle.y, particle.size, particle.opacity);
            break;
          case "briefcase":
            drawBriefcase(ctx, particle.x, particle.y, particle.size, particle.opacity);
            break;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
};

export default ParticlesBackground;
