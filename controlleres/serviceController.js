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

// delete service
export const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Service.findByIdAndDelete(id);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    return res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    console.log(error.message);
  }
};

// update service

export const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const reqBody = req.body;

    const updatedService = await Service.findByIdAndUpdate(id, reqBody, {
      new: true,
    });

    if (!updatedService) {
      return res.status(404).json({ message: "Service not found" });
    }

    return res
      .status(200)
      .json({ message: "Service updated successfully", updatedService });
  } catch (error) {
    console.log(error.message);
  }
};
