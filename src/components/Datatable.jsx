import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'; 
import paginationFactory from 'react-bootstrap-table2-paginator';

export default function Datatable() {


    const pagination = paginationFactory({
        page: 2,
        sizePerPage: 5,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
        onPageChange: function (page, sizePerPage) {
          console.log('page', page);
          console.log('sizePerPage', sizePerPage);
        },
        onSizePerPageChange: function (page, sizePerPage) {
          console.log('page', page);
          console.log('sizePerPage', sizePerPage);
        }
      });


    const products = [
        { id: 1, name: 'George', animal: 'Monkey' ,  },
        { id: 2, name: 'Jeffrey', animal: 'Giraffe' },
        { id: 3, name: 'Alice', animal: 'Giraffe' },
        { id: 4, name: 'Alice', animal: 'Tiger' },
        { id: 4, name: 'Alice', animal: 'Tiger' },
        { id: 4, name: 'Alice', animal: 'Tiger' },
        { id: 4, name: 'Alice', animal: 'Tiger' },
        { id: 4, name: 'Alice', animal: 'Tiger' },
        { id: 4, name: 'Alice', animal: 'Tiger' },
        { id: 4, name: 'Alice', animal: 'Tiger' },
        { id: 4, name: 'Alice', animal: 'Tiger' },
        { id: 4, name: 'Alice', animal: 'Tiger' },
        { id: 4, name: 'Alice', animal: 'Tiger' },
        { id: 4, name: 'Alice', animal: 'Tiger' },
        { id: 4, name: 'Alice', animal: 'Tiger' },
        { id: 4, name: 'Alice', animal: 'Tiger' },
        { id: 4, name: 'Alice', animal: 'Tiger' },
        { id: 4, name: 'Alice', animal: 'Tiger' },
        { id: 4, name: 'Alice', animal: 'Tiger' },
        { id: 4, name: 'Alice', animal: 'Tiger' },
        { id: 4, name: 'Alice', animal: 'Tiger' },
        { id: 4, name: 'Alice', animal: 'Tiger' },
        { id: 4, name: 'Alice', animal: 'Tiger' },
        { id: 4, name: 'Alice', animal: 'Tiger' },
        { id: 4, name: 'Alice', animal: 'Tiger' },
        { id: 4, name: 'Alice', animal: 'Tiger' },
        { id: 4, name: 'Alice', animal: 'Tiger' },
        { id: 4, name: 'Alice', animal: 'Tiger' },
        { id: 4, name: 'Alice', animal: 'Tiger' },
        { id: 4, name: 'Alice', animal: 'Tiger' },
        { id: 4, name: 'Alice', animal: 'Tiger' },
        { id: 4, name: 'Alice', animal: 'Tiger' },
        { id: 4, name: 'Alice', animal: 'Tiger' },
        { id: 4, name: 'Alice', animal: 'Tiger' },
        { id: 4, name: 'Alice', animal: 'Tiger' },
        { id: 4, name: 'Alice', animal: 'Tiger' },
        { id: 4, name: 'Alice', animal: 'Tiger' },
        
      ];
    
      const columns = [
        { dataField: 'id', text: 'Id' },
        { dataField: 'name', text: 'Name' },
        { dataField: 'animal', text: 'Animal' }
      ];


  return (
    <div> 
    
    <BootstrapTable keyField='id'
    pagination={pagination} 
    data={products} columns={columns} sort={true} />
    </div>
  )
}
