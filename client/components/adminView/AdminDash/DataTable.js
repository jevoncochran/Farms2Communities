import { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
// import axios from "axios";
import { connect } from "react-redux";
import { getSubscriptions } from "../../../redux/actions";
import { admin } from "../../../redux/reducers/admin-reducer";

const testBorder = "1px dashed black";
const tableEntryBorder = "1px solid black";

const useStyles = makeStyles((theme) => ({
  dataTable: {
    width: "100%",
    // border: testBorder,
  },
  header: {
    border: tableEntryBorder,
    fontSize: "14px",
  },
  tableEntry: {
    border: tableEntryBorder,
    fontSize: "14px",
  },
}));

const DataTable = (props) => {
  const classes = useStyles();

  useEffect(() => {
    props.getSubscriptions();
  }, []);

  return (
    <table className={classes.dataTable}>
      <tr>
        <th className={classes.header}>Name</th>
        <th className={classes.header}>Email</th>
        <th className={classes.header}>Phone</th>
        <th className={classes.header}>Basket</th>
        <th className={classes.header}>Street Address</th>
        <th className={classes.header}>City</th>
        <th className={classes.header}>Delivery Notes</th>
      </tr>
      {props.subscriptions &&
        props.subscriptions.map((sub) => (
          <tr>
            <td
              className={classes.tableEntry}
            >{`${sub.first_name} ${sub.last_name}`}</td>
            <td className={classes.tableEntry}>{`${sub.email}`}</td>
            <td className={classes.tableEntry}>{`${sub.phone}`}</td>
            <td className={classes.tableEntry}>{`${sub.item}`}</td>
            <td className={classes.tableEntry}>{`${sub.address}`}</td>
            <td className={classes.tableEntry}>{`${sub.city}`}</td>
            <td className={classes.tableEntry}>{`${sub.delivery_notes}`}</td>
          </tr>
        ))}
    </table>
  );
};

const mapStateToProps = (state) => {
  return {
    subscriptions: state.admin.subscriptions,
  };
};

export default connect(mapStateToProps, { getSubscriptions })(DataTable);
