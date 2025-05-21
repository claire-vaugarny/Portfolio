import './LabelProject.scss';

function LabelProject({ labels }) {
  return (
    <ul className="label-list">
      {labels.map((label, index) => (
        <li key={index} className="label-item">
          <i className={label.icon_tag}></i> {label.name_tag}
        </li>
      ))}
    </ul>
  );
}

export default LabelProject;
