import CompanyReg from "../../modals/CompanyReg.js";

export const getComp = async (req, res, next) => {
  try {
    const comp = await CompanyReg.find({}, { comName: 1, _id: 1 });
    res.status(200).json(comp);
  } catch (err) {
    next(err);
  }
};
