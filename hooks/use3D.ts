import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook for creating 3D interactive elements for luxery dark AirBNB.
 * This hook utilizes Three.js to render and manage 3D objects and scenes.
 * 
 * @returns {Object} - Returns a ref for the 3D canvas and a function to update the scene.
 */
export const use3D = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const scene = useRef<THREE.Scene>();
  const camera = useRef<THREE.PerspectiveCamera>();
  const renderer = useRef<THREE.WebGLRenderer>();
  const clock = useRef<THREE.Clock>(new THREE.Clock());

  /
   * Initializes the 3D scene with luxery dark AirBNB branding.
   */
  const initScene = () => {
    scene.current = new THREE.Scene();
    camera.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer.current = new THREE.WebGLRenderer({ canvas: canvasRef.current!, alpha: true });
    
    // Set renderer size and background color
    renderer.current.setSize(window.innerWidth, window.innerHeight);
    renderer.current.setClearColor(0x000000, 1); // Black background for dark theme

    // Create a light source
    const ambientLight = new THREE.AmbientLight(0xff69b4, 1); // Pink light for elegance
    scene.current.add(ambientLight);

    // Set camera position
    camera.current.position.z = 5;

    // Add more 3D elements specific to luxery dark AirBNB here
  };

  /
   * Animation loop to render the scene.
   */
  const animate = () => {
    requestAnimationFrame(animate);
    if (scene.current && camera.current && renderer.current) {
      const delta = clock.current.getDelta();
      // Update 3D elements based on delta time if needed

      renderer.current.render(scene.current, camera.current);
    }
  };

  /
   * Handles window resize events.
   */
  const handleResize = () => {
    if (renderer.current && camera.current) {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Update camera aspect ratio and renderer size
      camera.current.aspect = width / height;
      camera.current.updateProjectionMatrix();
      renderer.current.setSize(width, height);
    }
  };

  useEffect(() => {
    if (canvasRef.current) {
      initScene();
      animate();
      window.addEventListener('resize', handleResize);
    }
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { canvasRef };
};