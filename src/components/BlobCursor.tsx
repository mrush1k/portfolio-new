import React, { useEffect, useRef, useState } from 'react';

const BlobCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  
  const mousePosition = useRef({ x: 0, y: 0 });
  const cursorPosition = useRef({ x: 0, y: 0 });
  const animationId = useRef<number>();
  const movingTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const updateCursorPosition = () => {
      if (!cursorRef.current) return;
      
      // Smooth interpolation for fluid movement
      const lerp = (start: number, end: number, factor: number) => {
        return start + (end - start) * factor;
      };
      
      cursorPosition.current.x = lerp(cursorPosition.current.x, mousePosition.current.x, 0.15);
      cursorPosition.current.y = lerp(cursorPosition.current.y, mousePosition.current.y, 0.15);
      
      cursorRef.current.style.left = `${cursorPosition.current.x}px`;
      cursorRef.current.style.top = `${cursorPosition.current.y}px`;
      
      animationId.current = requestAnimationFrame(updateCursorPosition);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current.x = e.clientX;
      mousePosition.current.y = e.clientY;
      
      // Add moving class for morphing effect
      setIsMoving(true);
      clearTimeout(movingTimeout.current);
      movingTimeout.current = setTimeout(() => {
        setIsMoving(false);
      }, 150);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('a, button, input, textarea, select, [role="button"], .cursor-pointer')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('a, button, input, textarea, select, [role="button"], .cursor-pointer')) {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    // Start animation loop
    animationId.current = requestAnimationFrame(updateCursorPosition);

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
      clearTimeout(movingTimeout.current);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`blob-cursor ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''} ${isMoving ? 'moving' : ''}`}
    />
  );
};

export default BlobCursor;