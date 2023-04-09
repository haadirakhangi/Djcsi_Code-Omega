import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'status', headerName: 'Status', width: 130 },
  { field: 'create_time', headerName: 'Time', width: 200},
  { field: 'duration', headerName: 'Duration', width: 130}
  // {
  //   field: 'age',
  //   headerName: 'Age',
  //   type: 'number',
  //   width: 90,
  // },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const rows = [
  { id: 1, name: 'pycharm64.exe', status:'running', create_time: "2023-04-08 13:23:10" , duration:'0mins'},
  { id: 2, name: 'explorer.exe', status: 'running', create_time:  "2023-04-06 20:13:48" , duration:'0mins'},
  { id: 3, name: 'opera.exe', status: 'running', create_time: "2023-04-07 17:24:29" , duration:'0mins'},
  { id: 4, name: 'explorer.exe', status: 'running', create_time:  "2023-04-06 20:13:48" , duration:'0mins'},
  { id: 5, name: 'msedge.exe', status: 'running', create_time: "2023-04-08 13:19:00", duration:'0mins' },
  { id: 6, name: 'explorer.exe', status:'running', create_time: "2023-04-06 20:13:48", duration:'0mins' },
  { id: 7, name: 'sublime_text.exe', status: 'running', create_time: "2023-04-08 21:14:59", duration:'0mins' },
  { id: 8, name: 'explorer.exe', status: 'running', create_time:  "2023-04-06 20:13:48", duration:'0mins' },
  { id: 9, name: 'msedge.exe', status: 'running', create_time: "2023-04-08 13:19:00" , duration:'0mins'},
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
