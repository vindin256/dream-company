import AddItem from "./add-item"
import DataTable from "./shared/component/DataTable"
import { category_header_list } from "./shared/meta_data/table_column_header"
import React, { useRef } from "react"

const AdminHome =()=>{
    const childRef = useRef()
    const addItem = async (e) => {
      childRef.current.addItem();

   }
    return(<>
      <AddItem ref={childRef} level="category" />
      <button onClick={addItem}>Add Item</button>
    <DataTable columns={category_header_list} rows={[]}></DataTable>
    </>)
}
export default AdminHome;