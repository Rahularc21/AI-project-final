import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { Suspense } from 'react';

function PanoramaScene({ imageUrl }: { imageUrl: string }) {
  const texture = useTexture(imageUrl);
  
  return (
    <mesh>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial map={texture} side={1} />
    </mesh>
  );
}

export function PanoramaViewer({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="w-full h-[80vh]">
      <Canvas camera={{ position: [0, 0, 0.1] }}>
        <Suspense fallback={null}>
          <PanoramaScene imageUrl={imageUrl} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
} 