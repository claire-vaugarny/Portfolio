import './ImageCard.scss';
import { useState, useEffect } from 'react';

function ImageCard({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0); // Suivi de l'index de l'image actuelle

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Met à jour l'image chaque 5 secondes
    }, 5000); // 5000 ms = 5 secondes

    // Nettoyer l'intervalle quand le composant est démonté
    return () => clearInterval(interval);
  }, [images.length]); // Se déclenche uniquement si la longueur des images change

  return (
    <div className="imageContainer">
      <img
        src={images[currentIndex]} // Affiche l'image courante
        alt={`Aperçu de la maquette ${currentIndex + 1}`}
      />
    </div>
  );
}

export default ImageCard;
