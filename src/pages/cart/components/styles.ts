const styles = {
  header: {
    fontSize: "20px",
    fontWeight: "800",
    marginBottom: "30px",
  },
  cartItemsHeader: {
    width: "100%",
    display: "flex",
    padding: "20px",
    alignItems: "center",
  },
  container: {
    borderRadius: "10px",
  },
  headerText: {
    fontSize: "20px",
    fontWeight: "800",
    marginRight: "10px",
  },
  headerSubText: {
    fontSize: "14px",
    color: "rgb(99, 115, 129)",
  },
  tableHeader: {
    background: "#f3f6f8",
  },
  tableCell: {
    fontSize: "14px",
    color: "rgb(99, 115, 129)",
    fontWeight: "600",
  },
  tableCellWithImage: {
    display: "flex",
    alignItems: "center",
  },
  tableCellWithImagetext: {
    fontSize: "14px",
    fontWeight: "800",
    marginRight: "10px",
  },
  icons: {
    color: "rgba(145, 158, 171, 0.8)",
  },
  backToShopping: {
    textTransform: "none",
    marginTop: "30px",
    marginBottom: "40px",
    color: "black",
    fontWeight: "800",
  },
  summary: {
    padding: "20px",
  },
  summaryItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  summaryItemLabel: {
    color: "rgb(99, 115, 129)",
    fontWeight: "400",
    fontSize: "15px",
  },
  summaryItemValue: {
    color: "black",
    fontWeight: "600",
    fontSize: "15px",
  },
  total: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between",
  },
  totalLabel: {
    color: "#ff5530",
    fontSize: "18px",
    fontWeight: "800",
    marginRight: "10px",
  },
  totalValue: {
    color: "#ff5530",
    fontSize: "16px",
    fontWeight: "600",
  },
  checkout: {
    background: "#00aa55",
    width: "100%",
    color: "white",
    borderRadius: "7px",
    marginTop: "20px",
    textTransform: "none",
    "&:hover": {
      background: "rgb(0, 123, 85)",
    },
  },
  card: {
    marginBottom: "10px",
    borderRadius: "10px",
    padding: "10px",
  },
  billingDetails: {
    padding: "20px",
    width: "100%",
  },
  billingCard: {
    display: "flex",
  },
  deliverButton: {
    textTransform: "none",
    color: "#00aa55",
    background: "white",
    width: "250px",
    borderRadius: "7px",
    marginTop: "20px",
    height: "30px",
    border: "1px solid rgba(0, 171, 85, 0.5)",
    "&:hover": {
      background: "rgba(0, 171, 85, 0.08)",
      border: "1px solid rgb(0, 171, 85)",
    },
  },
  billingName: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  name: {
    fontSize: "16px",
    fontWeight: "600",
    marginRight: "5px",
  },
  location: {
    fontSize: "14px",
    color: "rgb(99, 115, 129)",
    fontWeight: "400",
    marginRight: "10px",
  },

  chip: {
    color: "rgb(0, 108, 156)",
    background: "rgba(0, 184, 217, 0.16)",
    borderRadius: "7px",
    height: "30px",
    fontWeight: "900", 
  },
  address: {
    fontSize: "15px",
    color: "rgb(33, 43, 54)",
    marginBottom: "10px",
  },
  phone: {
    fontSize: "15px",
    color: "rgb(99, 115, 129)",
    fontWeight: "400",
    marginRight: "10px",
  },
};

export default styles;
