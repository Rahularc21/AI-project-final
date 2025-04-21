import { useState, useRef, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';

export function ImageRecognition({ onPrediction }: { onPrediction: (predictions: any[]) => void }) {
  const [model, setModel] = useState<mobilenet.MobileNet | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const loadModel = async () => {
      setIsLoading(true);
      try {
        await tf.ready();
        const loadedModel = await mobilenet.load();
        setModel(loadedModel);
      } catch (error) {
        console.error('Error loading model:', error);
      }
      setIsLoading(false);
    };

    loadModel();
  }, []);

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !model) return;

    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = async () => {
      try {
        const predictions = await model.classify(img);
        onPrediction(predictions);
      } catch (error) {
        console.error('Error classifying image:', error);
      }
    };
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={fileInputRef}
        className="hidden"
      />
      <Button
        onClick={() => fileInputRef.current?.click()}
        disabled={isLoading || !model}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          'Upload Image for Recognition'
        )}
      </Button>
    </div>
  );
} 