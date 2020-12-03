import mongoose from "mongoose";

const mySchema = mongoose.Schema({
	name: String,
	position: String,
	age: Number,
	followersCount: {
		type: Number,
		default: 0,
	},
	joinDate: {
		type: Date,
		default: new Date(),
	},
});

const empDetail = mongoose.model("empInformation", mySchema);

export default empDetail;
