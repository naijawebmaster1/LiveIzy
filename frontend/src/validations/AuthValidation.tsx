import * as Yup from "yup";
export const screenLockedSchema = () => {
	return Yup.object().shape({
		password: Yup.string().required("Please enter a valid password"),
	});
};
export const passwordSchema = () => {
	return Yup.object().shape({
		oldPassword: Yup.string().required("Password is required"),
		newPassword: Yup.string().required("Please confirm password"),
	});
};
export const forgotPasswordSchema = Yup.object().shape({
	email: Yup.string().email('Invalid E-mail address').required('Required'),
});
export const loginSchema = (): {} => {
	return Yup.object().shape({
		email: Yup.string()
			.email()
			.required("Please input a correct email address"),
		password: Yup.string().required("Please enter a valid password"),
	});
};
export const forgotSchema = (): {} => {
	return Yup.object().shape({
		email: Yup.string()
			.email()
			.required("Please input a correct email address"),
	});
};
export const twoFaSchema = (): {} => {
	return Yup.object().shape({
		totp: Yup.string().required(
			"Please input the generated token from Authenticator app"
		),
	});
};
export const registerSchema = (): {} => {
	return Yup.object().shape({
		name: Yup.string().required("Your full name is required"),
		email: Yup.string()
			.email()
			.required("Please input a correct email address"),
		password: Yup.string().required("Please enter a valid password"),
		phone: Yup.string()
			.matches(/^\+?\d+$/, "Enter a valid phone number")
			.required("Your Phone number is required"),
		affiliateCode: Yup.string(),
		refferalCode: Yup.string(),
	});
};
export const changePasswordSchema = (): {} => {
	return Yup.object().shape({
		oldPassword: Yup.string().required("Enter your current password"),
		newPassword: Yup.string().required("Enter your new password"),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref("newPassword"), undefined], "Passwords must match")
			.required("Password confirmation is required"),
	});
};
export const resetPasswordSchema = (): {} => {
	return Yup.object().shape({
		password: Yup.string().required("Enter your current password"),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref("password"), undefined], "Passwords must match")
			.required("Password confirmation is required"),
	});
};
export const socialSignUpSchema = (): {} => {
	return Yup.object().shape({
		phone: Yup.string()
			.required("Phone Number is required!")
			.matches(/^\+?\d+$/, "Enter a valid phone number"),
		email: Yup.string().email(),
		referralCode: Yup.string(),
		affCode: Yup.string(),
	});
};