import { Row, Col } from "@pds-react/grid";
import Card, { CardImage } from "@pds-react/card";

const Error404 = () => {

	return (
		<>
			<h1 className="pds-typography-center">Oops. We couldn&#39;t find that Pok&eacute;mon!</h1>
			<Row className="pds-util-margin-top-20" justifyContent="center">
				<Col lg={6}>
					<Card>
						<CardImage style={{ height: "auto", margin: "auto" }} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/201.png" alt={`Image of Unown, the 201st Pokemon, from the front profile`} />
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default Error404;