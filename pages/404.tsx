import { Row, Col } from "@pds-react/grid";
import Card from "@pds-react/card";
import jpg404 from "../public/images/404.jpg"
import gif404 from "../public/images/404.gif"
import Image from 'next/image'
import styles from "../styles/404.module.css"

const Error404 = () => {

	return (
		<>
			<h1 className="pds-typography-center">Oops. This is not the page you were looking for...</h1>
			<Row className="pds-util-margin-top-20" justifyContent="center">
				<Col lg={6}>
					<Card>
						{/* <Image className={styles["jpg-404"]} layout="responsive" src={jpg404} alt="Not the droid you are looking for" /> */}
						<Image className={styles["gif-404"]} layout="responsive" src={gif404}alt="Not the droid you are looking for" />
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default Error404;