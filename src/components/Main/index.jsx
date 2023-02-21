import React from "react";

export class Products extends React.Component {
	render() {
		const { name, image } = this.props;

		return (
			<figure>
				<img src={image} alt={`${name}`} />
			</figure>
		);
	}
}