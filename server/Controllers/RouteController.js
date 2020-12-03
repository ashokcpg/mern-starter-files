import empDetail from "../Models/DatabaseModel.js";

export const getEmp = async (req, res) => {
	try {
		res.send("Post Getter...");
		const empDetails = await empDetail.find();
		console.log(empDetails);
		res.status(200).json(empDetails);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const addEmp = async (req, res) => {
	res.send("Post Creation...");
	const empInfo = req.body;
	const newEmp = new empDetail(empInfo);
	try {
		await newEmp.save();
		res.status(201).json(newEmp);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
