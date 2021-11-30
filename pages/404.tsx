import { Row, Col } from "@pds-react/grid";
import Card, { CardImage } from "@pds-react/card";

const Error404 = () => {

	return (
		<>
			<h1 className="pds-typography-center">Oops. This is not the page you were looking for...</h1>
			<Row className="pds-util-margin-top-20" justifyContent="center">
				<Col lg={6}>
					<Card>
						<source srcSet="https://starwarsblog.starwars.com/wp-content/uploads/sites/6/2017/05/ANH-Ben-identification.jpg" media="(prefers-reduced-motion: reduce)"></source> 
  					<img srcSet="https://media4.giphy.com/media/4560Nv2656Gv0Lvp9F/giphy.gif" alt="Not the droid you are looking for"/>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default Error404;