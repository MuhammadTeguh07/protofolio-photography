import React from 'react';
import ImageSlider from '@/components/ImageSlider';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    images: string[];
}

const ModalProject = ({ isOpen, onClose, images }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000094]">
      <div className="w-11/12 p-6">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          ✖
        </button>
        <ImageSlider images={images} />
      </div>
    </div>
  );
};

export default ModalProject;
