import React from "react";
import AssetsTable from "./AssetsTable";

const ManagerAssets = () =>
{
    return (
			<div className="min-h-screen">
            
            <button type="button" style=
                {{
                backgroundColor: '#2CAE66',
                borderRadius: 5,
                width: 100,
                color: '#FFFFFF',
                fontSize: 13.62,
                }}>
                Add
            </button>
				<AssetsTable />
			</div>
		);
}

export default ManagerAssets;
