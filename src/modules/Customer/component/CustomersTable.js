import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import {
  onDeleteCustomer,
  onGetAllCustomers,
  onGetCustomerById,
} from "../../action";
import { Link } from "react-router-dom";

const CustomersTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetAllCustomers());
  }, []);

  const allcustomers = useSelector((state) => state.customers);
  console.log("ALL CUSTOMERS:", allcustomers);

  const customersList = allcustomers.length ? (
    <>
      <div style={{ padding: "25px" }}>
        <div>
          <TableContainer component={Paper}>
            <Table
              sx={{ width: 300, backgroundColor: "whitesmoke" }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Address</TableCell>
                  <TableCell align="left">Mobile #</TableCell>
                  <TableCell align="left">Type</TableCell>
                  <TableCell align="left">Edit</TableCell>
                  <TableCell align="left">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allcustomers.map((row) => (
                  <TableRow
                    key={row.customerId}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{row.customerName}</TableCell>
                    <TableCell align="left">{row.address}</TableCell>
                    <TableCell align="left">{row.mobile}</TableCell>
                    <TableCell align="left">
                      {row.customerType == 1 ? (
                        <>Free</>
                      ) : row.customerType == 2 ? (
                        <>Subscribed</>
                      ) : (
                        ""
                      )}
                    </TableCell>
                    <TableCell align="left">
                      <Button>
                        <Link to={`/customer/${row.customerId}`}>
                          <EditIcon />
                        </Link>
                      </Button>
                    </TableCell>
                    <TableCell align="left">
                      <Button
                        onClick={() => {
                          let confirmDelete = confirm(
                            "Are you sure you want to delete?"
                          );
                          if (confirmDelete) {
                            dispatch(onDeleteCustomer(row.customerId));
                            location.reload();
                          }
                        }}
                      >
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  ) : (
    <></>
  );

  return <>{customersList}</>;
};

export default CustomersTable;
