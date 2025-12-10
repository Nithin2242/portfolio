'use client';

import { useEffect, useRef } from 'react';

export default function TextParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    
    // CONFIGURATION
    const textToRender = "N"; 
    const particleColor = "#DC2626"; // Red
    const connectionColor = "rgba(220, 38, 38, 0.2)";
    const explosionSpeed = 15; // How fast it blows up

    class Particle {
      x: number;
      y: number;
      originX: number;
      originY: number;
      size: number;
      vx: number;
      vy: number;
      force: number;
      angle: number;
      distance: number;
      friction: number;
      ease: number;

      constructor(x: number, y: number) {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.originX = x; // The position inside the letter "N"
        this.originY = y;
        this.size = 2; // Particle size
        this.vx = (Math.random() * 2) - 1;
        this.vy = (Math.random() * 2) - 1;
        this.friction = 0.9; // Slow down effect
        this.ease = 0.1; // Smoothness
        this.force = 0;
        this.angle = 0;
        this.distance = 0;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }

      update() {
        // SCROLL INTERACTION:
        // As you scroll down (window.scrollY increases), we calculate a massive explosion force
        const scrollY = window.scrollY;
        
        // If scroll is 0, go to Origin (Form the letter N)
        // If scroll > 0, explode outwards based on scroll depth
        const explosionFactor = Math.min(scrollY / 200, 5); // Cap the explosion
        
        if (explosionFactor > 0.1) {
            // EXPLODE STATE: Move wildly based on noise
            this.x += (this.vx * explosionSpeed * explosionFactor);
            this.y += (this.vy * explosionSpeed * explosionFactor);
        } else {
            // FORM LETTER STATE: Return to origin
            this.x += (this.originX - this.x) * this.ease;
            this.y += (this.originY - this.y) * this.ease;
        }
        
        this.draw();
      }
    }

    function init() {
        if (!canvas || !ctx) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        particlesArray = [];

        // 1. Draw the text on the canvas temporarily
        ctx.fillStyle = 'white';
        ctx.font = '900 300px Verdana'; // Huge Font
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(textToRender, canvas.width / 2, canvas.height / 2);

        // 2. Scan the canvas to find where the pixels are
        const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);
        
        // 3. Create particles only where the text pixels exist
        // We skip pixels (y += 10, x += 10) to create a "grid" look instead of solid text
        for (let y = 0; y < textCoordinates.height; y += 8) {
            for (let x = 0; x < textCoordinates.width; x += 8) {
                // Check alpha value (transparency) of the pixel (every 4th value in array)
                if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
                    particlesArray.push(new Particle(x, y));
                }
            }
        }
    }

    function animate() {
        if (!canvas || !ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and connect particles
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
        connect();
        requestAnimationFrame(animate);
    }

    function connect() {
        if (!ctx) return;
        const maxDist = 40; // Max distance to draw a line
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                const dx = particlesArray[a].x - particlesArray[b].x;
                const dy = particlesArray[a].y - particlesArray[b].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDist) {
                    ctx.strokeStyle = connectionColor;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    // Handle resizing
    window.addEventListener('resize', init);
    // Initialize
    init();
    animate();

    return () => {
        window.removeEventListener('resize', init);
    };
  }, []);

  return (
    <canvas 
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
}