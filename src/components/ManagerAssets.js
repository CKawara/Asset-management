import React from "react";
import AssetsTable from "./AssetsTable";
import '../index.css'

const ManagerAssets = () => {
	return (
		<div className="min-h-screen">
			<div class="row">
				<div class="column">
					<button type="button" id="btn">
						Add
					</button>
				</div>
				<div class="column">
					<h1>Assets Available</h1>
				</div>
			</div>
			<br />
			<hr />
			<AssetsTable />
		</div>
	);
};

export default ManagerAssets;
