import React, { useRef, useEffect } from 'react';

const AnimatedMesh: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mesh configuration
    const gridSize = 60; // Distance between grid points
    const cols = Math.ceil(canvas.width / gridSize) + 2;
    const rows = Math.ceil(canvas.height / gridSize) + 2;
    
    // Create grid points
    const createGrid = () => {
      const points: Array<{
        x: number;
        y: number;
        originalX: number;
        originalY: number;
        offsetX: number;
        offsetY: number;
      }> = [];

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const x = j * gridSize - gridSize;
          const y = i * gridSize - gridSize;
          points.push({
            x,
            y,
            originalX: x,
            originalY: y,
            offsetX: Math.random() * Math.PI * 2,
            offsetY: Math.random() * Math.PI * 2,
          });
        }
      }
      return points;
    };

    let points = createGrid();

    // Animation function
    const animate = () => {
      timeRef.current += 0.008; // Slow, smooth animation speed
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update point positions with organic wave motion
      points.forEach((point, index) => {
        const waveX = Math.sin(timeRef.current + point.offsetX + point.originalY * 0.003) * 15;
        const waveY = Math.cos(timeRef.current + point.offsetY + point.originalX * 0.003) * 12;
        
        // Add secondary wave for more complex motion
        const secondaryWaveX = Math.sin(timeRef.current * 0.7 + point.offsetX * 1.3) * 8;
        const secondaryWaveY = Math.cos(timeRef.current * 0.5 + point.offsetY * 1.1) * 6;
        
        point.x = point.originalX + waveX + secondaryWaveX;
        point.y = point.originalY + waveY + secondaryWaveY;
      });

      // Draw horizontal lines
      ctx.strokeStyle = 'rgba(245, 240, 236, 0.08)';
      ctx.lineWidth = 1;
      ctx.lineCap = 'round';
      
      for (let i = 0; i < rows; i++) {
        ctx.beginPath();
        for (let j = 0; j < cols; j++) {
          const point = points[i * cols + j];
          if (j === 0) {
            ctx.moveTo(point.x, point.y);
          } else {
            ctx.lineTo(point.x, point.y);
          }
        }
        ctx.stroke();
      }

      // Draw vertical lines
      for (let j = 0; j < cols; j++) {
        ctx.beginPath();
        for (let i = 0; i < rows; i++) {
          const point = points[i * cols + j];
          if (i === 0) {
            ctx.moveTo(point.x, point.y);
          } else {
            ctx.lineTo(point.x, point.y);
          }
        }
        ctx.stroke();
      }

      // Draw intersection points with subtle glow
      ctx.fillStyle = 'rgba(245, 240, 236, 0.12)';
      points.forEach((point) => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Add subtle glow effect
        const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, 8);
        gradient.addColorStop(0, 'rgba(245, 240, 236, 0.06)');
        gradient.addColorStop(1, 'rgba(245, 240, 236, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 8, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: 'transparent',
        filter: 'blur(0.5px)', // Subtle blur for softer appearance
      }}
    />
  );
};

export default AnimatedMesh;