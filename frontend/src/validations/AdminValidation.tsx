import * as Yup from "yup";

export const addStaffSchema = () => {
	const phoneRegExp = /^(([+]{1}[0-9]{3}|0)[0-9]{10})$/g;
	const nameRegExp = /^[a-z ,.'-]+$/i
	return Yup.object().shape({
		name: Yup.string()
			.matches(nameRegExp, "Name should not contain numbers")
			.required("Please input a correct name"),
		email: Yup.string()
			.email("Please input a valid email address")
			.required("Please input a correct email address"),
		phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
			.required("Please input a correct phone number"),
		password: Yup.string().required("Please enter a valid password"),
		roleId: Yup.string().required("Please select a role"),
		bankId: Yup.string().required("Please select a bank"),
		// limit: Yup.string().required("Please input a limit"),
		// max: Yup.string().required("Please input a max"),
	});
};

export const editStaffSchema = () => {
	const phoneRegExp = /^(([+]{1}[0-9]{3}|0)[0-9]{10})$/g;
	const nameRegExp = /^[a-z ,.'-]+$/i
	return Yup.object().shape({
		name: Yup.string()
			.matches(nameRegExp, "Name should not contain numbers")
			.required("Please input a correct name"),
		phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
			.required("Please input a correct phone number"),
		roleId: Yup.string().required("Please select a role"),
		bankId: Yup.string().required("Please select a bank"),
		// limit: Yup.string().required("Please input a limit"),
		// max: Yup.string().required("Please input a max"),
	});
};


export const addStaffBankRoleSchema = () => {
	return Yup.object().shape({
		accountName: Yup.string()
			.required("Please input a correct account name"),
		accountNumber: Yup.string()
			//  .email("Please input a valid email address")
			.required("Please input a correct account number"),
		bankName: Yup.string().required("Please enter a valid bank name"),
		description: Yup.string().required("Please select a valid description"),
	});
};



export const SignupSchema = Yup.object().shape({
	firstName: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	lastName: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	email: Yup.string().email('Invalid email').required('Required'),
});
