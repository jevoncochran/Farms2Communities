import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { adminLogout } from "../../redux/actions";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  navBar: {
    height: "10vh",
    width: "100%",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "0 5%",
    position: "fixed",
    borderBottom: "1px solid #ebebeb",
    zIndex: "999",
  },
  logoutBtn: {
    //   border: "1px dashed black",
    fontSize: "20px !important",
    color: "green !important",
    height: "80%",
    width: "10%",
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.navBar}>
      <Button className={classes.logoutBtn} onClick={props.adminLogout}>
        LOGOUT
      </Button>
    </div>
  );
};

export default connect(null, { adminLogout })(NavBar);
