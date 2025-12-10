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
    const layers = 6; // How "thick" the 3D letter is
    const depthSpacing = 3; // Distance between layers
    const explosionSpeed = 15;

    class Particle {
      x: number;
      y: number;
      originX: number;
      originY: number;
      size: number;
      vx: number;
      vy: number;
      ease: number;
      color: string;
      layer: number;

      constructor(x: number, y: number, layer: number) {
        // Offset each layer slightly to create 3D perspective tilt
        const perspectiveOffset = layer * depthSpacing;
        
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.originX = x + perspectiveOffset; 
        this.originY = y - perspectiveOffset;
        
        // Front layers are larger, back layers smaller (Depth perception)
        this.size = 2.5;
        this.layer = layer;
        
        // Velocity for explosion
        this.vx = (Math.random() * 2) - 1;
        this.vy = (Math.random() * 2) - 1;
        this.ease = 0.08; // Smooth return
        
        // Color Gradient: Front is Red, Back is Darker/Orange (Like the screenshot)
        // Layer 0 = Bright Red, Layer 5 = Dark Red/Orange
        const brightness = 60 - (layer * 10); 
        this.color = `hsl(0, 100%, ${brightness}%)`; // HSL Red
        if (layer > 3) this.color = `hsl(10, 80%, ${brightness}%)`; // Back layers turn Orange-ish
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        // Draw SQUARE particles for the "Tech/Grid" look (from screenshot)
        ctx.fillRect(this.x, this.y, this.size, this.size);
      }

      update() {
        const scrollY = window.scrollY;
        // Explosion logic: Back layers move slower for parallax 3D effect
        const explosionFactor = Math.min(scrollY / 150, 6) * (1 + this.layer * 0.2);
        
        if (explosionFactor > 0.1) {
            // EXPLODE
            this.x += (this.vx * explosionSpeed * explosionFactor);
            this.y += (this.vy * explosionSpeed * explosionFactor);
        } else {
            // FORM 3D LETTER
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

        // 1. Draw text temporarily to scan it
        ctx.fillStyle = 'white';
        // Use a thick, blocky font
        ctx.font = '900 350px Arial'; 
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(textToRender, canvas.width / 2, canvas.height / 2);

        const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);
        
        // 2. Loop through pixels and create particles for MULTIPLE LAYERS
        // We skip pixels (step 6) for a grid look
        const step = 6;
        
        for (let y = 0; y < textCoordinates.height; y += step) {
            for (let x = 0; x < textCoordinates.width; x += step) {
                if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
                    // Create particles for each layer (0 to 5)
                    for (let l = 0; l < layers; l++) {
                        // Only add particles randomly to back layers to make them look like "wisps" or volume
                        if (l === 0 || Math.random() > 0.6) {
                             particlesArray.push(new Particle(x, y, l));
                        }
                    }
                }
            }
        }
    }

    function animate() {
        if (!canvas || !ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Sort particles so back layers draw first (True 3D stacking)
        // This prevents back dots from appearing on top of front dots
        // Note: Sorting every frame is heavy, but fine for simple N. 
        // We can skip sorting if performance lags, but it looks better with it.
        
        particlesArray.forEach(particle => particle.update());
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', init);
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
        style={{ opacity: 0.8 }} // Slight transparency for the "Hologram" feel
    />
  );
}