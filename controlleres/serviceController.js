import Service from "./../model/Service.js";

//get All Users
export const getAllService = async (req, res) => {
  try {
    const services = await Service.find();
    if (services.length > 0) {
      return res.status(200).json({
        message: "All Services",
        services,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

// create Service
export const createService = async (req, res) => {
  try {
    const reqBody = req.body;

    const services = await Service.create(reqBody);
    return res.status(200).json({
      message: "Service created successfully",
      services,
    });
  } catch (error) {
    console.log(error.message);
  }
};
