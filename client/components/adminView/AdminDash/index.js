import { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import AdminLayout from "../AdminLayout";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import DataTable from "./DataTable";

const useStyles = makeStyles((theme) => ({
  pageHeader: {
    textAlign: "center",
    fontSize: "3rem !important",
  },
}));

const AdminDash = (props) => {
  const classes = useStyles();
  const router = useRouter();

  useEffect(() => {
    if (!props.adminAccount) {
      router.push("/");
    }
  }, [props.adminAccount]);

  // useEffect(() => {
  //   props.getSubscriptions();
  // }, []);

  return (
    <AdminLayout>
      <Typography className={classes.pageHeader}>Admin Dashboard</Typography>
      <DataTable />
    </AdminLayout>
  );
};

const mapStateToProps = (state) => {
  return {
    adminAccount: state.admin.account,
  };
};

export default connect(mapStateToProps, {})(AdminDash);
