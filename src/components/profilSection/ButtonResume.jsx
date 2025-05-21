import './buttonResume.scss';

function ButtonResume() {
  return (
    <div className="resumeContainer">
      <h3>Mon CV</h3>
      <a href="/Claire_Vaugarny_CV.pdf" download="Claire_Vaugarny_CV.pdf">
        <button id="buttonResume" aria-label="Télécharger mon CV au format PDF">
          Télécharger mon CV
        </button>
      </a>
    </div>
  );
}

export default ButtonResume;
