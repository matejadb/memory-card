export default function Card({ name, imageLink }) {
	name = name.split('');
	name = name[0].toUpperCase() + name.slice(1).join('');
	const formatName = name;

	return (
		<div className="card">
			<img src={imageLink} alt={name + '-avatar'} />
			<h2>{formatName}</h2>
		</div>
	);
}
