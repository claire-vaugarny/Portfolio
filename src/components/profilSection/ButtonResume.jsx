import './buttonResume.scss';

function ButtonResume() {
  return (
    <div className="resumeContainer">
      <h3>Mon CV</h3>
      <a href="/Développeur web - Claire Vaugarny - CV.pdf" download="Développeur web - Claire Vaugarny - CV.pdf">
        <button id="buttonResume" aria-label="Télécharger mon CV au format PDF">
          Télécharger mon CV
        </button>
      </a>
    </div>
  );
}

export default ButtonResume;
