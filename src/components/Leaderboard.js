import React from "react";
import {
	Table
} from "react-bootstrap";

const Leaderboard = ({leaderboard}) => {
	
	return (
		<React.Fragment>
			<h4 className="py-5">Leaderboard</h4>
			<Table striped hover>
				<thead>
					<tr>
						<th>Rank</th>
						<th>Name</th>
						<th>Win</th>
						<th>Loss</th>
						<th>Ratio</th>
					</tr>
				</thead>
				<tbody>
					{leaderboard.length > 0
						? leaderboard.map(
								({ displayName, wins, losses }, idx) => (
									<tr key={idx + 1}>
										<td>{idx + 1}</td>
										<td>{displayName}</td>
										<td>{wins}</td>
										<td>{losses}</td>
										<td>{(wins / losses).toFixed(3)}</td>
									</tr>
								)
						  )
						: null}
				</tbody>
			</Table>
		</React.Fragment>
	);
}

export default Leaderboard
