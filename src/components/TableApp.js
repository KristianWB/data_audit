import React, { useMemo, } from 'react';
import Table from './Table';
import data from './data.json';

/*
const data = 
[
  {
    "score": 17.592657,
    "show": {
      "name": 'Facebook',
      "type": 'Social media',
      "files": 'Private fotoes',
      "data": 'Personal info'
    }
  },
]
*/

function TableApp() {
    const columns = useMemo(
      () => [
        {
          // first group - Dish type and name
          Header: "Place",
          // First group columns
          columns: [
            {
              Header: "Name",
              accessor: "show.name"
            },
            {
              Header: "Type",
              accessor: "show.type"
            }
          ]
        },
        {
          // Second group - Details
          Header: "Details",
          // Second group columns
          columns: [
            {
              Header: "Items",
              accessor: "show.files"
            },
            {
              Header: "Data",
              accessor: "show.data"
            },
            {
              Header: "Preferences",
              accessor: "show.preferences"
            }            
          ]
        }
      ],
      []
    );

    return (
        <div className="TableApp">
            <Table columns={columns} data={data} />
        </div>
    );
};

export default TableApp;
