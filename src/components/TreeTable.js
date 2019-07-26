// From material-table
// https://material-table.com/#/docs/features/tree-data

import React from 'react';
import MaterialTable from 'material-table';

export default class BasicTreeData extends React.Component {
    render() {
      return (
        <MaterialTable
          title="Basic Tree Data Preview"
          data={[
            {
              id: 1,
              name: 'Jack',
              surname: 'Baran',
              birthYear: 1987,
              birthCity: 12,
              sex: 'Male',
              type: 'adult',
            },
            {
              id: 2,
              name: 'Jill',
              surname: 'Brooks',
              birthYear: 2015,
              birthCity: 13,
              sex: 'Female',
              type: 'child',
              parentId: 1,
            },
            {
              id: 3,
              name: 'James',
              surname: 'Baran',
              birthYear: 2015,
              birthCity: 13,
              sex: 'Male',
              type: 'child',
              parentId: 1,
            },
            {
              id: 4,
              name: 'Fred',
              surname: 'Jones',
              birthYear: 1975,
              birthCity: 14,
              sex: 'Male',
              type: 'adult',
            //   parentId: 1,
            },
            {
              id: 5,
              name: 'Susan',
              surname: 'Smith',
              birthYear: 2005,
              birthCity: 15,
              sex: 'Female',
              type: 'child',
              parentId: 4,
            },
            {
                id: 6,
                name: 'Sam',
                surname: 'Smith',
                birthYear: 2009,
                birthCity: 15,
                sex: 'Male',
                type: 'child',
                parentId: 4,
            },
            {
              id: 7,
              name: 'Suzanne',
              surname: 'Weight',
              birthYear: 1972,
              birthCity: 12,
              sex: 'Female',
              type: 'adult',
            //   parentId: 5,
            },
            {
              id: 8,
              name: 'Jack',
              surname: 'Baran',
              birthYear: 1987,
              birthCity: 12,
              sex: 'Male',
              type: 'adult',
            },
            {
              id: 9,
              name: 'Jill',
              surname: 'Brooks',
              birthYear: 2015,
              birthCity: 13,
              sex: 'Female',
              type: 'child',
              parentId: 8,
            },
            {
              id: 10,
              name: 'James',
              surname: 'Baran',
              birthYear: 2015,
              birthCity: 13,
              sex: 'Male',
              type: 'child',
              parentId: 8,
            },
            {
              id: 11,
              name: 'Fred',
              surname: 'Jones',
              birthYear: 1975,
              birthCity: 14,
              sex: 'Male',
              type: 'adult',
            //   parentId: 1,
            },
            {
              id: 12,
              name: 'Susan',
              surname: 'Smith',
              birthYear: 2005,
              birthCity: 15,
              sex: 'Female',
              type: 'child',
              parentId: 11,
            },
            {
                id: 13,
                name: 'Sam',
                surname: 'Smith',
                birthYear: 2009,
                birthCity: 15,
                sex: 'Male',
                type: 'child',
                parentId: 11,
            },
            {
              id: 14,
              name: 'Suzanne',
              surname: 'Weight',
              birthYear: 1972,
              birthCity: 12,
              sex: 'Female',
              type: 'adult',
            //   parentId: 5,
            },
          ]}
          columns={[
            { title: 'First Name', field: 'name' },
            { title: 'Last Name', field: 'surname' },
            { title: 'Gender', field: 'sex' },
            { title: 'Type', field: 'type', removable: false },
            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
            {
              title: 'Birth City',
              field: 'birthCity',
              lookup: { 12: 'Rocklin', 13: 'Roseville', 14: 'Ophir', 15: 'Newcastle', 34: 'İstanbul', 63: 'Şanlıurfa' },
            },
          ]}
          parentChildData={(row, rows) => rows.find(a => a.id === row.parentId)}
          options={{
            selection: true,
          }}
        />
      )
    }
  }