import React from "react";
// styles
import { Container } from "./Cart.styles";
// components
import BillOption from "../BillOption";
import CalculateBill from "../CalculateBill";

function Cart() {
	return (
		<Container>
			<BillOption />
			<CalculateBill />
		</Container>
	);
}

export default Cart;
